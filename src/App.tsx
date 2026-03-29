import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, RoundedBox, Float, Text, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'motion/react';
import { ITEMS, REACTIONS, ACHIEVEMENTS } from './constants';
import { ChemicalItem, GameState, Achievement } from './types';
import { Beaker, FlaskConical, Atom, Info, ChevronRight, ChevronLeft, Plus, Zap, Trophy, BookOpen, X, Star, Award, TrendingUp, LayoutGrid } from 'lucide-react';
import confetti from 'canvas-confetti';

// --- Components ---

const AchievementNotification = ({ achievement }: { achievement: any }) => (
  <motion.div
    initial={{ y: -100, opacity: 0, scale: 0.8 }}
    animate={{ y: 20, opacity: 1, scale: 1 }}
    exit={{ y: -100, opacity: 0, scale: 0.8 }}
    className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] astro-panel p-1 pr-8 flex items-center gap-5 min-w-[360px] overflow-hidden group"
  >
    <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-[0_8px_20px_rgba(245,158,11,0.4)] transform rotate-3 group-hover:rotate-0 transition-transform border-4 border-white">
      <Trophy className="text-white drop-shadow-md" size={32} />
    </div>
    <div className="flex flex-col py-2">
      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-600">成就达成 (Achievement)</span>
      <h3 className="text-xl font-black text-slate-900 leading-tight">{achievement.title}</h3>
      <p className="text-sm font-bold text-slate-500">{achievement.description}</p>
    </div>
    <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-amber-400/10 rounded-full blur-2xl" />
  </motion.div>
);

const DiscoveryNotification = ({ item }: { item: ChemicalItem }) => (
  <motion.div
    initial={{ scale: 0.5, opacity: 0, rotateY: 90 }}
    animate={{ scale: 1, opacity: 1, rotateY: 0 }}
    exit={{ scale: 1.5, opacity: 0, filter: 'blur(20px)' }}
    className="fixed inset-0 z-[110] flex items-center justify-center pointer-events-none"
  >
    <div className="astro-panel-dark p-12 flex flex-col items-center gap-8 max-w-md text-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-[80px]" />
      <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-fuchsia-500/20 rounded-full blur-[80px]" />

      <div className="flex flex-col items-center">
        <motion.div 
          animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="text-[10rem] font-black mb-4 drop-shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
          style={{ color: item.baseColor }}
        >
          {item.formula}
        </motion.div>
        <div className="px-6 py-2 bg-cyan-500 rounded-full mb-4 shadow-lg">
          <span className="text-xs font-black text-white uppercase tracking-[0.3em]">新发现 (New Discovery)</span>
        </div>
        <h2 className="text-6xl font-black text-white mb-2 drop-shadow-lg">{item.name}</h2>
        <p className="text-cyan-100 font-bold max-w-xs text-lg">{item.details.kidFriendly}</p>
      </div>
      
      <div className="flex gap-6 mt-4">
        <div className="flex flex-col items-center px-10 py-4 bg-white/10 rounded-3xl border-2 border-white/20">
          <span className="text-[10px] font-bold text-cyan-300 uppercase tracking-widest">稀有度</span>
          <span className="text-2xl font-black text-white">★ ★ ★</span>
        </div>
        <div className="flex flex-col items-center px-10 py-4 bg-white/10 rounded-3xl border-2 border-white/20">
          <span className="text-[10px] font-bold text-cyan-300 uppercase tracking-widest">经验值</span>
          <span className="text-2xl font-black text-white">+500</span>
        </div>
      </div>
    </div>
  </motion.div>
);

const LevelUpNotification = ({ level }: { level: number }) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 2, opacity: 0 }}
    className="fixed inset-0 z-[120] flex items-center justify-center pointer-events-none"
  >
    <div className="flex flex-col items-center">
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 0.5, repeat: 3 }}
        className="text-[12rem] font-black italic text-transparent bg-clip-text bg-gradient-to-b from-amber-300 via-orange-500 to-red-600 drop-shadow-[0_0_60px_rgba(245,158,11,0.6)]"
      >
        LEVEL UP!
      </motion.div>
      <div className="astro-panel px-16 py-6 -mt-16 border-4 border-amber-400 shadow-[0_0_50px_rgba(245,158,11,0.5)]">
        <span className="text-5xl font-black text-slate-900">等级提升至 {level}</span>
      </div>
    </div>
  </motion.div>
);

// --- Hooks ---
const useKeyboard = () => {
  const [keys, setKeys] = useState<Record<string, boolean>>({});
  useEffect(() => {
    const down = (e: KeyboardEvent) => setKeys(k => ({ ...k, [e.code]: true }));
    const up = (e: KeyboardEvent) => setKeys(k => ({ ...k, [e.code]: false }));
    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);
    return () => { window.removeEventListener('keydown', down); window.removeEventListener('keyup', up); };
  }, []);
  return keys;
};

// --- 3D Components ---

const CameraController = ({ playerPosRef }: { playerPosRef: React.MutableRefObject<THREE.Vector3> }) => {
  const controlsRef = useRef<any>(null);
  useFrame((state) => {
    if (controlsRef.current) {
      const delta = new THREE.Vector3().subVectors(playerPosRef.current, controlsRef.current.target);
      controlsRef.current.target.copy(playerPosRef.current);
      state.camera.position.add(delta);
    }
  });
  return <OrbitControls ref={controlsRef} enablePan={false} maxPolarAngle={Math.PI / 2 - 0.05} minDistance={4} maxDistance={20} makeDefault />;
};

const Player = ({ color, expression, playerPosRef }: { color: string, expression: string, playerPosRef: React.MutableRefObject<THREE.Vector3> }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const keys = useKeyboard();
  const vel = useRef(new THREE.Vector3(0, 0, 0));
  const jumpCount = useRef(0);
  const canJump = useRef(true);
  
  useFrame((state, delta) => {
    const speed = 10;
    const jumpForce = 12;
    const gravity = -35;
    
    const dir = new THREE.Vector3();
    if (keys['KeyW'] || keys['ArrowUp']) dir.z -= 1;
    if (keys['KeyS'] || keys['ArrowDown']) dir.z += 1;
    if (keys['KeyA'] || keys['ArrowLeft']) dir.x -= 1;
    if (keys['KeyD'] || keys['ArrowRight']) dir.x += 1;
    
    if (dir.lengthSq() > 0) {
      const camDir = new THREE.Vector3();
      state.camera.getWorldDirection(camDir);
      camDir.y = 0;
      camDir.normalize();
      const camRight = new THREE.Vector3().crossVectors(camDir, new THREE.Vector3(0, 1, 0)).normalize();
      
      const moveDir = new THREE.Vector3();
      moveDir.addScaledVector(camDir, -dir.z);
      moveDir.addScaledVector(camRight, dir.x);
      moveDir.normalize().multiplyScalar(speed * delta);
      
      playerPosRef.current.x += moveDir.x;
      playerPosRef.current.z += moveDir.z;
    }
    
    const onGround = playerPosRef.current.y <= 0.5;
    
    if (keys['Space']) {
      if (onGround) {
        if (canJump.current) {
          vel.current.y = jumpForce;
          jumpCount.current = 1;
          canJump.current = false;
        } else {
          vel.current.y = jumpForce;
          jumpCount.current = 1;
        }
      } else if (canJump.current && jumpCount.current === 1) {
        vel.current.y = jumpForce;
        jumpCount.current = 2;
        canJump.current = false;
      }
    } else {
      canJump.current = true;
    }
    
    vel.current.y += gravity * delta;
    playerPosRef.current.y += vel.current.y * delta;
    
    if (playerPosRef.current.y < 0.5) {
      playerPosRef.current.y = 0.5;
      vel.current.y = 0;
      if (!keys['Space']) jumpCount.current = 0;
    }
    
    if (meshRef.current) {
      meshRef.current.position.copy(playerPosRef.current);
      if (dir.lengthSq() > 0 && playerPosRef.current.y === 0.5) {
        meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 15) * 0.1;
      }
    }
  });

  return (
    <group>
      <RoundedBox ref={meshRef} args={[1, 1, 1]} radius={0.2} smoothness={4}>
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.2} />
        
        {/* Face Screen */}
        <mesh position={[0, 0, 0.501]}>
          <planeGeometry args={[0.8, 0.6]} />
          <meshStandardMaterial color="#000000" roughness={0.1} />
        </mesh>

        {/* Eyes / Expression */}
        <group position={[0, 0, 0.51]}>
          {expression === '◕‿◕' ? (
            <group>
              <mesh position={[-0.2, 0, 0]}>
                <circleGeometry args={[0.1, 32]} />
                <meshStandardMaterial color="#00d2ff" emissive="#00d2ff" emissiveIntensity={2} />
              </mesh>
              <mesh position={[0.2, 0, 0]}>
                <circleGeometry args={[0.1, 32]} />
                <meshStandardMaterial color="#00d2ff" emissive="#00d2ff" emissiveIntensity={2} />
              </mesh>
            </group>
          ) : (
            <Text
              position={[0, 0, 0]}
              fontSize={0.4}
              color="#00d2ff"
              anchorX="center"
              anchorY="middle"
            >
              {expression}
            </Text>
          )}
        </group>

        {/* Head Antenna */}
        <mesh position={[0, 0.6, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.3, 8]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        <mesh position={[0, 0.75, 0]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="#00d2ff" emissive="#00d2ff" emissiveIntensity={1} />
        </mesh>
      </RoundedBox>
    </group>
  );
};

const ReactionVessel = ({ items, onSynthesize }: { items: string[], onSynthesize: () => void }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group position={[0, 0, -5]}>
      {/* Base Pedestal */}
      <mesh position={[0, 0.1, 0]}>
        <cylinderGeometry args={[2.8, 3.2, 0.2, 64]} />
        <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.1} />
      </mesh>
      
      {/* Glowing Ring 1 */}
      <mesh position={[0, 0.25, 0]}>
        <torusGeometry args={[2.6, 0.05, 16, 100]} />
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={2} />
      </mesh>

      {/* Main Platform */}
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[2.4, 2.6, 0.3, 64]} />
        <meshStandardMaterial color="#f8fafc" metalness={0.2} roughness={0.5} />
      </mesh>

      {/* Inner Glowing Core */}
      <mesh position={[0, 0.56, 0]}>
        <cylinderGeometry args={[2.2, 2.2, 0.02, 64]} />
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={1.5} transparent opacity={0.8} />
      </mesh>

      {/* Floating Decorative Rings */}
      <Float speed={3} rotationIntensity={0.5} floatIntensity={0.5}>
        <group position={[0, 1.5, 0]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[2.8, 0.02, 16, 100]} />
            <meshStandardMaterial color="#ffffff" transparent opacity={0.2} />
          </mesh>
          <mesh rotation={[Math.PI / 2, Math.PI / 4, 0]}>
            <torusGeometry args={[3.2, 0.01, 16, 100]} />
            <meshStandardMaterial color="#06b6d4" transparent opacity={0.1} />
          </mesh>
        </group>
      </Float>

      {/* Glass Dome */}
      <mesh position={[0, 0.55, 0]}>
        <sphereGeometry args={[2.3, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshPhysicalMaterial 
          color="#ffffff"
          transparent 
          opacity={0.15} 
          transmission={0.9}
          thickness={0.5}
          roughness={0}
          metalness={0}
        />
      </mesh>

      {/* Items inside */}
      <group ref={groupRef} position={[0, 1.5, 0]}>
        {items.map((id, idx) => {
          const angle = (idx / items.length) * Math.PI * 2;
          const radius = 1.2;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          const item = ITEMS[id];
          if (!item) return null;
          
          return (
            <Float key={`${id}-${idx}`} speed={5} rotationIntensity={2} floatIntensity={1} position={[x, 0, z]}>
              <mesh>
                <octahedronGeometry args={[0.3, 0]} />
                <meshStandardMaterial 
                  color={item.baseColor} 
                  emissive={item.baseColor} 
                  emissiveIntensity={1} 
                />
              </mesh>
              <Text
                position={[0, 0.5, 0]}
                fontSize={0.2}
                color="white"
                outlineWidth={0.02}
                outlineColor="#000000"
              >
                {item.formula}
              </Text>
            </Float>
          );
        })}
      </group>
    </group>
  );
};

const GroundItem = ({ item, onCollect, position, playerPosRef }: { item: ChemicalItem, onCollect: () => void, position: [number, number, number], playerPosRef: React.MutableRefObject<THREE.Vector3> }) => {
  const [hovered, setHovered] = useState(false);
  const collected = useRef(false);
  const itemPos = new THREE.Vector3(...position);
  
  useFrame(() => {
    if (!collected.current && playerPosRef.current.distanceTo(itemPos) < 1.5) {
      collected.current = true;
      onCollect();
    }
  });
  
  return (
    <Float speed={5} rotationIntensity={2} floatIntensity={1} position={position}>
      <mesh 
        onClick={(e) => { e.stopPropagation(); if(!collected.current) { collected.current = true; onCollect(); } }}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <octahedronGeometry args={[0.4, 0]} />
        <meshStandardMaterial 
          color={item.baseColor} 
          emissive={item.baseColor} 
          emissiveIntensity={hovered ? 2 : 0.5} 
        />
      </mesh>
      <Text
        position={[0, 0.6, 0]}
        fontSize={0.2}
        color="white"
        outlineWidth={0.02}
        outlineColor="#000000"
        anchorX="center"
      >
        {item.formula}
      </Text>
    </Float>
  );
};

const DetailModal = ({ item, onClose, onAdd }: { item: ChemicalItem, onClose: () => void, onAdd: (id: string) => void }) => {
  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed right-0 top-0 bottom-0 w-[550px] z-50 p-8 pointer-events-none"
    >
      <div 
        className="astro-panel w-full h-full overflow-hidden flex flex-col pointer-events-auto shadow-[0_40px_100px_rgba(0,0,0,0.15)] border-white rounded-r-none"
        onClick={e => e.stopPropagation()}
      >
        {/* Top: 3D Preview (Simplified) */}
        <div className="w-full h-2/5 bg-gradient-to-b from-cyan-50 to-transparent flex items-center justify-center relative border-b-4 border-slate-50">
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 w-14 h-14 rounded-full bg-white text-slate-400 flex items-center justify-center hover:bg-red-500 hover:text-white hover:scale-110 transition-all shadow-xl border-4 border-white"
          >
            <X size={28} />
          </button>
          
          <div className="text-center">
             <motion.div 
               animate={{ y: [0, -20, 0], rotate: [0, 8, -8, 0] }}
               transition={{ duration: 4, repeat: Infinity }}
               className="text-[12rem] font-black mb-2 drop-shadow-2xl" 
               style={{ color: item.baseColor }}
             >
               {item.formula}
             </motion.div>
          </div>
        </div>

        {/* Bottom: Info */}
        <div className="w-full p-12 flex flex-col gap-10 overflow-y-auto flex-1 custom-scrollbar">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <span className="px-4 py-1.5 bg-cyan-500 rounded-full text-[10px] font-black text-white uppercase tracking-[0.3em] shadow-md">
                {item.type === 'element' ? '化学元素' : '化合物'}
              </span>
              <span className="text-slate-300 text-xs font-black tracking-widest uppercase">ID: {item.id}</span>
            </div>
            <h2 className="text-6xl font-black text-slate-900 mb-2">{item.name}</h2>
            <p className="text-cyan-500 font-black text-2xl uppercase tracking-[0.3em]">{item.formula}</p>
          </div>

          <div className="space-y-10">
            <section className="bg-slate-50 p-8 rounded-[2.5rem] border-4 border-white shadow-inner">
              <h3 className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600 mb-5">
                <Info size={20} className="text-cyan-500" /> 通俗科普 (Kid Friendly)
              </h3>
              <p className="text-slate-700 leading-relaxed font-bold text-xl">{item.details.kidFriendly}</p>
            </section>

            <section className="bg-slate-100/50 p-8 rounded-[2.5rem] border-4 border-white">
              <h3 className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-5">
                <BookOpen size={20} /> 硬核知识 (Hardcore Info)
              </h3>
              <p className="text-slate-600 leading-relaxed text-base font-bold">{item.details.hardcore}</p>
            </section>
          </div>

          <div className="mt-auto pt-10 flex gap-6">
            <button 
              onClick={() => { onAdd(item.id); onClose(); }}
              className="astro-button flex-1 flex items-center justify-center gap-4 text-2xl py-6"
            >
              <Plus size={32} /> 加入合成器
            </button>
            <button 
              className="w-24 h-24 bg-slate-50 text-slate-300 rounded-[2rem] flex items-center justify-center hover:bg-cyan-500 hover:text-white transition-all border-4 border-white shadow-lg"
            >
              <BookOpen size={32} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  const [gameState, setGameState] = useState<GameState>({
    inventory: ['elem_H', 'elem_O', 'elem_C'],
    level: 1,
    exp: 0,
    discoveredItems: new Set(['elem_H', 'elem_O', 'elem_C']),
    unlockedAchievements: new Set(),
    totalSyntheses: 0
  });

  const [vesselItems, setVesselItems] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState<ChemicalItem | null>(null);
  const [groundItems, setGroundItems] = useState<{id: string, pos: [number, number, number]}[]>([]);
  const [expression, setExpression] = useState('◕‿◕');
  const [showAchievements, setShowAchievements] = useState(false);
  const [recentAchievement, setRecentAchievement] = useState<any>(null);
  const [lastDiscoveredItem, setLastDiscoveredItem] = useState<ChemicalItem | null>(null);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [showInventoryGrid, setShowInventoryGrid] = useState(false);
  const [currentTask, setCurrentTask] = useState({
    title: '入门实验',
    description: '尝试合成最简单的物质：水 (H2O)',
    target: 'comp_H2O',
    progress: 0,
    targetCount: 1
  });
  const playerPosRef = useRef(new THREE.Vector3(0, 0.5, 0));

  // Task update logic
  useEffect(() => {
    if (gameState.discoveredItems.has('comp_H2O') && currentTask.target === 'comp_H2O') {
      setCurrentTask({
        title: '温室气体',
        description: '合成一种植物喜欢的灭火气体：二氧化碳 (CO2)',
        target: 'comp_CO2',
        progress: 0,
        targetCount: 1
      });
    } else if (gameState.discoveredItems.has('comp_CO2') && currentTask.target === 'comp_CO2') {
      setCurrentTask({
        title: '调味大师',
        description: '合成我们每天都要吃的食盐：氯化钠 (NaCl)',
        target: 'comp_NaCl',
        progress: 0,
        targetCount: 1
      });
    } else if (gameState.discoveredItems.has('comp_NaCl') && currentTask.target === 'comp_NaCl') {
      setCurrentTask({
        title: '化工基础',
        description: '合成一种具有刺激性气味的强酸：盐酸 (HCl)',
        target: 'comp_HCl',
        progress: 0,
        targetCount: 1
      });
    }
  }, [gameState.discoveredItems]);

  useEffect(() => {
    const checkAchievements = () => {
      const newUnlocked = new Set(gameState.unlockedAchievements);
      let newlyUnlockedThisTurn: any = null;

      ACHIEVEMENTS.forEach(ach => {
        if (newUnlocked.has(ach.id)) return;

        let unlocked = false;
        switch (ach.id) {
          case 'first_synthesis':
            if (gameState.totalSyntheses >= 1) unlocked = true;
            break;
          case 'level_5':
            if (gameState.level >= 5) unlocked = true;
            break;
          case 'level_10':
            if (gameState.level >= 10) unlocked = true;
            break;
          case 'discover_10':
            if (gameState.discoveredItems.size >= 10) unlocked = true;
            break;
          case 'discover_30':
            if (gameState.discoveredItems.size >= 30) unlocked = true;
            break;
          case 'synthesis_50':
            if (gameState.totalSyntheses >= 50) unlocked = true;
            break;
        }

        if (unlocked) {
          newUnlocked.add(ach.id);
          newlyUnlockedThisTurn = ach;
        }
      });

      if (newlyUnlockedThisTurn) {
        setGameState(prev => ({ ...prev, unlockedAchievements: newUnlocked }));
        setRecentAchievement(newlyUnlockedThisTurn);
        setTimeout(() => setRecentAchievement(null), 5000);
        confetti({
          particleCount: 150,
          spread: 100,
          origin: { y: 0.3 }
        });
      }
    };

    checkAchievements();
  }, [gameState.level, gameState.discoveredItems.size, gameState.totalSyntheses]);

  // Sync player color with first item
  const playerColor = ITEMS[gameState.inventory[0]]?.baseColor || '#ffffff';

  useEffect(() => {
    generateGroundItems();
  }, [gameState.level]);

  const generateGroundItems = () => {
    const available = Object.values(ITEMS).filter(i => i.unlockLevel <= gameState.level && i.type === 'element');
    const newItems = Array.from({ length: 5 }).map((_, i) => ({
      id: available[Math.floor(Math.random() * available.length)].id,
      pos: [(Math.random() - 0.5) * 10, 0.5, (Math.random() - 0.5) * 10] as [number, number, number]
    }));
    setGroundItems(newItems);
  };

  const handleCollect = (id: string, index: number) => {
    const isNew = !gameState.discoveredItems.has(id);
    setGameState(prev => {
      let newExp = prev.exp + 10;
      let newLevel = prev.level;
      if (newExp >= newLevel * 100) {
        newExp -= newLevel * 100;
        newLevel += 1;
        setShowLevelUp(true);
        setTimeout(() => setShowLevelUp(false), 3000);
      }
      
      const newInventory = prev.inventory.filter(i => i !== id);
      newInventory.unshift(id);

      return {
        ...prev,
        inventory: newInventory,
        exp: newExp,
        level: newLevel,
        discoveredItems: new Set([...prev.discoveredItems, id])
      };
    });
    
    if (isNew) {
      setLastDiscoveredItem(ITEMS[id]);
      setTimeout(() => setLastDiscoveredItem(null), 4000);
    }

    setGroundItems(prev => prev.filter((_, i) => i !== index));
    setExpression('^o^');
    setTimeout(() => setExpression('◕‿◕'), 2000);
  };

  const addToVessel = (id: string) => {
    if (vesselItems.length < 8) {
      setVesselItems([...vesselItems, id]);
    }
  };

  const handleSynthesize = () => {
    if (vesselItems.length < 2) return;

    const counts: Record<string, number> = {};
    vesselItems.forEach(id => {
      counts[id] = (counts[id] || 0) + 1;
    });

    let reaction = REACTIONS.find(r => {
      if (r.inputs.length !== Object.keys(counts).length) return false;
      return r.inputs.every(input => counts[input.itemId] === input.count);
    });

    let outputIds = reaction ? reaction.outputs.map(o => o.itemId) : [];

    if (!reaction) {
      const matchedCompound = Object.values(ITEMS).find(item => {
        if (item.type !== 'compound' || !item.composition) return false;
        const comp = item.composition;
        if (Object.keys(comp).length !== Object.keys(counts).length) return false;
        return Object.keys(comp).every(k => comp[k] === counts[k]);
      });

      if (matchedCompound) {
        outputIds = [matchedCompound.id];
      }
    }

    if (outputIds.length > 0) {
      const newDiscoveries = outputIds.filter(id => !gameState.discoveredItems.has(id));
      
      setGameState(prev => {
        let newExp = prev.exp + 50;
        let newLevel = prev.level;
        if (newExp >= newLevel * 100) {
          newExp -= newLevel * 100;
          newLevel += 1;
          setShowLevelUp(true);
          setTimeout(() => setShowLevelUp(false), 3000);
        }
        
        let newInventory = [...prev.inventory];
        outputIds.forEach(id => {
          newInventory = newInventory.filter(i => i !== id);
          newInventory.unshift(id);
        });

        return {
          ...prev,
          inventory: newInventory,
          exp: newExp,
          level: newLevel,
          discoveredItems: new Set([...prev.discoveredItems, ...outputIds]),
          totalSyntheses: prev.totalSyntheses + 1
        };
      });

      if (newDiscoveries.length > 0) {
        setLastDiscoveredItem(ITEMS[newDiscoveries[0]]);
        setTimeout(() => setLastDiscoveredItem(null), 4000);
      }

      setVesselItems([]);
      setExpression('☆▽☆');
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      setTimeout(() => setExpression('◕‿◕'), 3000);
    } else {
      setExpression('⊙﹏⊙');
      setVesselItems([]);
      setTimeout(() => setExpression('◕‿◕'), 2000);
    }
  };

  return (
    <div className="relative w-full h-screen font-sans">
      {/* 3D Scene */}
      <Canvas shadows dpr={[1, 2]}>
        <color attach="background" args={['#1a0b2e']} />
        <PerspectiveCamera makeDefault position={[0, 6, 14]} fov={50} />
        <CameraController playerPosRef={playerPosRef} />
        
        <Environment preset="sunset" />
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 10, 0]} color="#ffffff" intensity={1.5} />
        <pointLight position={[-5, 5, -5]} color="#d946ef" intensity={2} />
        <pointLight position={[5, 5, 5]} color="#06b6d4" intensity={2} />
        <spotLight position={[10, 20, 10]} angle={0.15} penumbra={1} intensity={2} color="#ffffff" castShadow />
        
        <Player color={playerColor} expression={expression} playerPosRef={playerPosRef} />
        <ReactionVessel items={vesselItems} onSynthesize={handleSynthesize} />
        
        {groundItems.map((item, idx) => (
          <GroundItem 
            key={`${item.id}-${idx}`} 
            item={ITEMS[item.id]} 
            position={item.pos} 
            onCollect={() => handleCollect(item.id, idx)} 
            playerPosRef={playerPosRef}
          />
        ))}

        <ContactShadows position={[0, 0, 0]} opacity={0.6} scale={30} blur={2.5} far={5} color="#000000" />
        
        {/* Floor grid - Astro Style */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.1} metalness={0.8} />
        </mesh>
        <gridHelper args={[100, 50, '#06b6d4', '#e2e8f0']} position={[0, 0.01, 0]} />
      </Canvas>

      {/* UI: Top Left (Level & EXP) */}
      <div className="absolute top-8 left-8 flex items-center gap-4 pointer-events-auto">
        <div className="astro-panel px-1 py-1 pr-10 flex items-center gap-6 min-w-[320px] relative overflow-hidden group">
          <div className="w-20 h-20 bg-cyan-500 rounded-[2rem] flex items-center justify-center shadow-[0_10px_25px_rgba(6,182,212,0.4)] transform -rotate-3 group-hover:rotate-0 transition-transform border-4 border-white">
            <span className="text-4xl font-black text-white">{gameState.level}</span>
          </div>
          <div className="flex flex-col py-2">
            <span className="text-[10px] text-cyan-600 font-black uppercase tracking-[0.2em]">等级 (Level)</span>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-black text-slate-900 leading-none">{gameState.exp}</span>
              <span className="text-sm font-bold text-slate-400 mb-1">/ {gameState.level * 100} EXP</span>
            </div>
          </div>
          {/* Progress bar background */}
          <div className="absolute bottom-0 left-0 w-full h-3 bg-slate-100">
            <motion.div 
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
              initial={{ width: 0 }}
              animate={{ width: `${(gameState.exp / (gameState.level * 100)) * 100}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>

      {/* UI: Top Right (Task & Medals) */}
      <div className="absolute top-8 right-8 flex flex-col items-end gap-4 pointer-events-auto">
        <div className="astro-panel p-6 min-w-[360px] flex flex-col gap-4 border-r-[12px] border-r-fuchsia-500 shadow-2xl">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-fuchsia-600">当前任务 (Current Task)</span>
            <div className="w-3 h-3 rounded-full bg-fuchsia-500 animate-pulse shadow-[0_0_10px_rgba(217,70,239,0.8)]" />
          </div>
          <h3 className="text-2xl font-black text-slate-900 leading-tight">
            {currentTask.description}
          </h3>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex-1 h-4 bg-slate-100 rounded-full overflow-hidden border-2 border-slate-200 shadow-inner">
              <motion.div 
                className="h-full bg-gradient-to-r from-fuchsia-400 to-pink-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(gameState.discoveredItems.has(currentTask.target) ? 1 : 0) * 100}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
            <span className="text-sm font-black text-slate-500">{gameState.discoveredItems.has(currentTask.target) ? 1 : 0}/1</span>
          </div>
        </div>

        <button 
          onClick={() => setShowAchievements(true)}
          className="astro-button astro-button-gold group scale-110 origin-right"
        >
          <Trophy size={24} className="group-hover:scale-125 transition-transform" />
          <span className="text-lg">荣誉勋章 ({gameState.unlockedAchievements.size})</span>
        </button>
      </div>

      {/* UI: Center Left (Reaction Vessel) */}
      <div className="absolute top-1/2 left-12 -translate-y-1/2 pointer-events-auto">
        <div className="astro-panel p-10 w-96 flex flex-col gap-10 border-l-[12px] border-l-cyan-500 shadow-[0_30px_80px_rgba(0,0,0,0.2)]">
          <div className="flex flex-col gap-2">
            <div className="text-[10px] font-black text-cyan-600 uppercase tracking-[0.4em]">Synthesizer Core</div>
            <h2 className="text-4xl font-black text-slate-900 leading-none">合成反应槽</h2>
          </div>

          <div className="grid grid-cols-4 gap-4 w-full">
            {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
              <motion.div 
                key={i} 
                className="aspect-square rounded-[1.5rem] border-4 border-slate-100 bg-slate-50 flex items-center justify-center relative overflow-hidden shadow-inner group"
                animate={{ 
                  borderColor: vesselItems[i] ? ITEMS[vesselItems[i]].baseColor : '#f1f5f9',
                  backgroundColor: vesselItems[i] ? `${ITEMS[vesselItems[i]].baseColor}15` : '#f8fafc',
                  scale: vesselItems[i] ? 1.1 : 1,
                  y: vesselItems[i] ? [0, -5, 0] : 0
                }}
                transition={{
                  y: { duration: 2 + i * 0.3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                {vesselItems[i] ? (
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }} 
                    animate={{ scale: 1, rotate: 0 }}
                    className="w-full h-full flex flex-col items-center justify-center"
                  >
                    <div 
                      className="text-3xl font-black drop-shadow-md" 
                      style={{ color: ITEMS[vesselItems[i]].baseColor }}
                    >
                      {ITEMS[vesselItems[i]].formula}
                    </div>
                    <button 
                      onClick={() => setVesselItems(prev => prev.filter((_, idx) => idx !== i))}
                      className="absolute inset-0 bg-red-500/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white"
                    >
                      <X size={20} />
                    </button>
                  </motion.div>
                ) : (
                  <div className="w-2 h-2 rounded-full bg-slate-200" />
                )}
              </motion.div>
            ))}
          </div>
          
          <div className="flex flex-col gap-6">
            <AnimatePresence>
              {vesselItems.length > 0 && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  onClick={handleSynthesize}
                  className="astro-button w-full flex items-center justify-center gap-4 text-2xl py-6 shadow-[0_15px_40px_rgba(6,182,212,0.4)] relative overflow-hidden group"
                >
                  <motion.div 
                    animate={{ 
                      opacity: [0.1, 0.3, 0.1],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-white/40 to-cyan-400/20"
                  />
                  <Zap size={28} className="fill-white group-hover:scale-125 transition-transform" /> 开始合成
                </motion.button>
              )}
            </AnimatePresence>
            
            {vesselItems.length > 0 && (
              <button 
                onClick={() => setVesselItems([])} 
                className="text-xs font-black text-slate-400 hover:text-red-500 transition-all uppercase tracking-[0.2em] flex items-center justify-center gap-2"
              >
                <X size={14} /> 清空容器 (Clear)
              </button>
            )}
          </div>
        </div>
      </div>

      {/* UI: Bottom Inventory - Full Width Redesign */}
      <div className="absolute bottom-0 left-0 right-0 z-40 pointer-events-none">
        <div className="w-full h-48 bg-gradient-to-t from-white via-white/80 to-transparent" />
        <div className="w-full bg-white/95 backdrop-blur-3xl border-t-8 border-white p-8 pointer-events-auto shadow-[0_-30px_80px_rgba(0,0,0,0.1)]">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-6">
            <div className="flex items-center justify-between px-4">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3 text-cyan-600 font-black text-lg uppercase tracking-[0.3em]">
                  <LayoutGrid size={24} className="text-cyan-500" /> 物质收集箱 (Inventory)
                </div>
                <div className="h-6 w-1 bg-slate-100 rounded-full" />
                <span className="text-slate-400 text-sm font-black">{gameState.discoveredItems.size} / {Object.keys(ITEMS).length} 种物质已发现</span>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em] hidden sm:block">点击卡片加入合成容器 · 滚动查看更多</div>
                <div className="flex items-center gap-3 bg-slate-100 rounded-3xl p-2 border-4 border-white shadow-inner">
                  <button 
                    onClick={() => setShowInventoryGrid(!showInventoryGrid)}
                    className={`p-3 rounded-2xl transition-all ${showInventoryGrid ? 'bg-cyan-500 text-white shadow-lg scale-110' : 'text-slate-400 hover:bg-white hover:text-cyan-500'}`}
                  >
                    <LayoutGrid size={20} />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar scroll-smooth px-4 min-h-[160px]">
              <AnimatePresence initial={false}>
                {gameState.inventory.map((id, idx) => {
                  const item = ITEMS[id];
                  if (!item) return null;
                  return (
                    <motion.div
                      key={`${id}-${idx}`}
                      layout
                      initial={{ scale: 0, x: 50 }}
                      animate={{ scale: 1, x: 0 }}
                      whileHover={{ y: -15, scale: 1.1 }}
                      className="flex-shrink-0 w-44 h-40 astro-card flex flex-col items-center justify-center cursor-pointer group relative overflow-hidden border-4"
                      onClick={() => addToVessel(id)}
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" style={{ background: `radial-gradient(circle at center, ${item.baseColor}, transparent)` }} />
                      
                      <div 
                        className="text-5xl font-black mb-2 z-10 drop-shadow-md"
                        style={{ color: item.baseColor }}
                      >
                        {item.formula}
                      </div>
                      <div className="text-sm text-slate-900 font-black truncate w-full text-center z-10 px-3 uppercase tracking-tight">{item.name}</div>
                      
                      <button 
                        onClick={(e) => { e.stopPropagation(); setSelectedItem(item); }}
                        className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-cyan-500 hover:text-white hover:scale-110 shadow-xl border-4 border-white"
                      >
                        <Info size={18} />
                      </button>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Inventory Grid Overlay */}
      <AnimatePresence>
        {showInventoryGrid && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-8 pointer-events-none">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md pointer-events-auto"
              onClick={() => setShowInventoryGrid(false)}
            />
            <motion.div 
              initial={{ y: 100, opacity: 0, scale: 0.9 }} 
              animate={{ y: 0, opacity: 1, scale: 1 }} 
              exit={{ y: 100, opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-7xl astro-panel p-12 border-t-[16px] border-t-cyan-500 flex flex-col gap-10 pointer-events-auto max-h-[90vh] shadow-[0_50px_120px_rgba(0,0,0,0.3)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-2">
                  <div className="text-[10px] font-black text-cyan-600 uppercase tracking-[0.4em]">Full Collection</div>
                  <h2 className="text-5xl font-black text-slate-900 flex items-center gap-6">
                    <LayoutGrid className="text-cyan-500" size={48} /> 所有收集条目
                  </h2>
                </div>
                <button 
                  onClick={() => setShowInventoryGrid(false)} 
                  className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center hover:bg-red-500 hover:text-white hover:scale-110 transition-all shadow-lg border-4 border-white"
                >
                  <X size={32} />
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 overflow-y-auto pr-6 custom-scrollbar py-6">
                {gameState.inventory.map((id, idx) => {
                  const item = ITEMS[id];
                  if (!item) return null;
                  return (
                    <motion.div
                      key={`grid-${id}-${idx}`}
                      whileHover={{ scale: 1.1, y: -10 }}
                      className="astro-card p-8 flex flex-col items-center justify-center cursor-pointer relative group min-h-[200px] border-4"
                      onClick={() => { addToVessel(id); setShowInventoryGrid(false); }}
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" style={{ background: `radial-gradient(circle at center, ${item.baseColor}, transparent)` }} />
                      
                      <div 
                        className="text-6xl font-black mb-4 drop-shadow-md"
                        style={{ color: item.baseColor }}
                      >
                        {item.formula}
                      </div>
                      <div className="text-sm text-slate-900 font-black text-center uppercase tracking-tight px-3">{item.name}</div>
                      
                      <button 
                        onClick={(e) => { e.stopPropagation(); setSelectedItem(item); }}
                        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-cyan-500 hover:text-white shadow-xl border-4 border-white"
                      >
                        <Info size={20} />
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showAchievements && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-8">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
              onClick={() => setShowAchievements(false)}
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 50 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              className="relative w-full max-w-4xl astro-panel p-12 border-t-[16px] border-t-amber-500 flex flex-col gap-10 shadow-[0_50px_120px_rgba(0,0,0,0.3)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-2">
                  <div className="text-[10px] font-black text-amber-600 uppercase tracking-[0.4em]">Hall of Fame</div>
                  <h2 className="text-5xl font-black text-slate-900 flex items-center gap-6">
                    <Trophy className="text-amber-500" size={48} /> 成就奖章
                  </h2>
                </div>
                <button 
                  onClick={() => setShowAchievements(false)} 
                  className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center hover:bg-red-500 hover:text-white hover:scale-110 transition-all shadow-lg border-4 border-white"
                >
                  <X size={32} />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-h-[600px] overflow-y-auto pr-6 custom-scrollbar py-4">
                {ACHIEVEMENTS.map(ach => {
                  const isUnlocked = gameState.unlockedAchievements.has(ach.id);
                  return (
                    <div 
                      key={ach.id}
                      className={`p-8 rounded-[3rem] border-4 flex items-center gap-8 transition-all relative overflow-hidden group ${
                        isUnlocked 
                          ? 'bg-amber-50 border-amber-200 shadow-[0_15px_35px_rgba(245,158,11,0.1)]' 
                          : 'bg-slate-50 border-slate-100 opacity-40 grayscale'
                      }`}
                    >
                      {isUnlocked && (
                        <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl group-hover:bg-amber-400/20 transition-all" />
                      )}
                      
                      <div className={`w-24 h-24 rounded-[2rem] flex items-center justify-center flex-shrink-0 shadow-xl border-4 transition-transform group-hover:scale-110 ${
                        isUnlocked ? 'bg-gradient-to-br from-amber-300 to-amber-500 border-white text-white' : 'bg-slate-200 border-slate-300 text-slate-400'
                      }`}>
                        <span className="text-5xl">{ach.icon}</span>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <h3 className={`text-2xl font-black ${isUnlocked ? 'text-slate-900' : 'text-slate-400'}`}>{ach.title}</h3>
                        <p className={`text-sm font-bold leading-tight ${isUnlocked ? 'text-slate-600' : 'text-slate-400'}`}>{ach.description}</p>
                        {isUnlocked && (
                          <div className="mt-3 inline-flex px-3 py-1 bg-amber-500 rounded-full text-[10px] font-black text-white uppercase tracking-widest shadow-md w-fit">
                            已解锁 (Unlocked)
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Notifications */}
      <AnimatePresence>
        {recentAchievement && <AchievementNotification achievement={recentAchievement} />}
        {lastDiscoveredItem && <DiscoveryNotification item={lastDiscoveredItem} />}
        {showLevelUp && <LevelUpNotification level={gameState.level} />}
      </AnimatePresence>

      {/* Modals */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-6 pointer-events-none">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto"
              onClick={() => setSelectedItem(null)}
            />
            <DetailModal 
              item={selectedItem} 
              onClose={() => setSelectedItem(null)} 
              onAdd={addToVessel}
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
