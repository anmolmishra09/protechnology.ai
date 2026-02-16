import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Token {
  id: number;
  text: string;
  x: number;
  y: number;
  baseX: number;
  baseY: number;
}

const TOKEN_WORDS = [
  "AI", "Data", "Learn", "Think", "Code", 
  "Future", "Smart", "Logic", "Grow", "Adapt",
  "Prompt", "Response", "Model", "Neural", "Bot"
];

export function LLMInteractiveAnimation() {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize tokens with random positions
  useEffect(() => {
    const updateTokens = () => {
      if (!containerRef.current) return;
      const { width, height } = containerRef.current.getBoundingClientRect();
      
      const newTokens = TOKEN_WORDS.map((text, i) => ({
        id: i,
        text,
        x: Math.random() * width,
        y: Math.random() * height,
        baseX: Math.random() * width,
        baseY: Math.random() * height,
      }));
      
      setTokens(newTokens);
    };

    updateTokens();
    window.addEventListener('resize', updateTokens);
    return () => window.removeEventListener('resize', updateTokens);
  }, []);

  // Track mouse position relative to container
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -1000, y: -1000 });
  };

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-auto"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <svg className="w-full h-full" style={{ position: 'absolute', top: 0, left: 0 }}>
        {/* Connection Lines (The "Attention" Mechanism) */}
        {tokens.map((token) => {
          const dx = mousePos.x - token.x;
          const dy = mousePos.y - token.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 250;
          
          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            return (
              <motion.line
                key={`line-${token.id}`}
                x1={mousePos.x}
                y1={mousePos.y}
                x2={token.x}
                y2={token.y}
                stroke="rgba(20, 184, 166, 0.4)" // Teal-500 with opacity
                strokeWidth="1.5"
                initial={{ opacity: 0 }}
                animate={{ opacity }}
                transition={{ duration: 0.1 }}
              />
            );
          }
          return null;
        })}

        {/* Tokens (Floating Words) */}
        {tokens.map((token) => {
          const dx = mousePos.x - token.x;
          const dy = mousePos.y - token.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 250;
          const isActive = distance < maxDistance;
          const scale = isActive ? 1.3 : 1;
          const opacity = isActive ? 1 : 0.3;

          return (
            <motion.text
              key={token.id}
              x={token.x}
              y={token.y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="font-medium select-none cursor-default"
              style={{
                fill: isActive ? '#0d9488' : '#94a3b8', // Teal-600 or Slate-400
                fontSize: '14px',
                fontFamily: 'system-ui, sans-serif',
              }}
              initial={{ scale: 1, opacity: 0.3 }}
              animate={{ 
                scale,
                opacity,
                x: token.baseX + Math.sin(Date.now() / 1000 + token.id) * 10,
                y: token.baseY + Math.cos(Date.now() / 1000 + token.id) * 10,
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                opacity: { duration: 0.2 }
              }}
            >
              {token.text}
            </motion.text>
          );
        })}

        {/* Mouse Cursor Indicator */}
        <circle 
          cx={mousePos.x} 
          cy={mousePos.y} 
          r="6" 
          fill="#9333ea" 
          opacity="0.8"
          className="pointer-events-none"
        >
          <animate
            attributeName="r"
            values="6;10;6"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </circle>
        <circle 
          cx={mousePos.x} 
          cy={mousePos.y} 
          r="30" 
          fill="url(#cursor-glow)" 
          className="pointer-events-none"
        />
        
        <defs>
          <radialGradient id="cursor-glow">
            <stop offset="0%" stopColor="rgba(168, 85, 247, 0.2)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0)" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}