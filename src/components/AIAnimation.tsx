import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Node {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

export function AIAnimation() {
  const [nodes, setNodes] = useState<Node[]>([]);

  useEffect(() => {
    const newNodes: Node[] = [];
    for (let i = 0; i < 20; i++) {
      newNodes.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 2
      });
    }
    setNodes(newNodes);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(168, 85, 247, 0.05)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0)" />
          </radialGradient>
        </defs>
        
        {/* Central glow */}
        <circle cx="400" cy="300" r="200" fill="url(#glow)">
          <animate
            attributeName="r"
            values="180;220;180"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Connection lines - Darker for visibility on white */}
        {nodes.map((node, i) => (
          <g key={`lines-${i}`}>
            {nodes.slice(i + 1).map((otherNode, j) => {
              const distance = Math.sqrt(
                Math.pow((node.x / 100) * 800 - (otherNode.x / 100) * 800, 2) +
                Math.pow((node.y / 100) * 600 - (otherNode.y / 100) * 600, 2)
              );
              
              if (distance < 150) {
                return (
                  <motion.line
                    key={`line-${i}-${j}`}
                    x1={(node.x / 100) * 800}
                    y1={(node.y / 100) * 600}
                    x2={(otherNode.x / 100) * 800}
                    y2={(otherNode.y / 100) * 600}
                    stroke="rgba(148, 163, 184, 0.4)"
                    strokeWidth="1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: node.delay
                    }}
                  />
                );
              }
              return null;
            })}
          </g>
        ))}

        {/* Nodes - Colored for visibility on white */}
        {nodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={(node.x / 100) * 800}
            cy={(node.y / 100) * 600}
            r={node.size}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: node.delay,
              ease: "easeInOut"
            }}
          >
            <animate
              attributeName="fill"
              values="#9333ea;#2563eb;#9333ea"
              dur="6s"
              repeatCount="indefinite"
              begin={node.delay + "s"}
            />
          </motion.circle>
        ))}

        {/* Floating particles - Colored */}
        {[...Array(30)].map((_, i) => (
          <motion.circle
            key={`particle-${i}`}
            cx={Math.random() * 800}
            cy={Math.random() * 600}
            r={Math.random() * 2 + 1}
            fill="#a855f7"
            opacity="0.4"
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
    </div>
  );
}