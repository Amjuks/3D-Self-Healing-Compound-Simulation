import React, { useRef, useEffect, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Function to create a 3D hexagon and track unique lines
const create3DHexagon = (radius, height, center = [0, 0, 0], uniqueLines) => {
  const topPoints = [];
  const bottomPoints = [];
  const angleStep = (Math.PI * 2) / 6;

  // Generate points for the top and bottom hexagons
  for (let i = 0; i < 6; i++) {
    const angle = i * angleStep;
    const x = center[0] + radius * Math.cos(angle);
    const y = center[1] + radius * Math.sin(angle);
    const zTop = center[2] + height / 2;
    const zBottom = center[2] - height / 2;
    topPoints.push(new THREE.Vector3(x, y, zTop));
    bottomPoints.push(new THREE.Vector3(x, y, zBottom));
  }

  const lines = [];
  for (let i = 0; i < 6; i++) {
    const topStart = topPoints[i];
    const topEnd = topPoints[(i + 1) % 6];
    const bottomStart = bottomPoints[i];
    const bottomEnd = bottomPoints[(i + 1) % 6];

    // Define vertical and horizontal lines
    const topLine = [topStart, topEnd];
    const bottomLine = [bottomStart, bottomEnd];
    const verticalLine = [topStart, bottomStart];

    // Add unique lines only
    addUniqueLine(topLine, uniqueLines, lines);
    addUniqueLine(bottomLine, uniqueLines, lines);
    addUniqueLine(verticalLine, uniqueLines, lines);
  }

  return lines;
};

// Helper function to add unique lines
const addUniqueLine = (line, uniqueLines, lines) => {
  const sortedLine = line.map((point) => point.toArray()).sort();
  const lineKey = JSON.stringify(sortedLine);

  if (!uniqueLines.has(lineKey)) {
    uniqueLines.add(lineKey);
    lines.push({
      geometry: new THREE.BufferGeometry().setFromPoints(line),
      start: line[0],
      end: line[1],
    });
  }
};

// Line component with breaking and healing animations
const AnimatedLine = ({ geometry, breaking, healing, onHealed, start, end }) => {
  const materialRef = useRef();
  const [progress, setProgress] = useState(0);
  const [offset, setOffset] = useState(0);

  useFrame((_, delta) => {
    if (breaking) {
      setProgress((prev) => Math.min(prev + delta * 1.5, 1));
      materialRef.current.color.lerpColors(
        new THREE.Color("blue"),
        new THREE.Color("red"),
        progress
      );

      // Move the line apart
      setOffset((prev) => Math.min(prev + delta, 1));

      if (progress >= 1) {
        setTimeout(() => onHealed(), 500); // Trigger healing after breaking
      }
    } else if (healing) {
      setProgress((prev) => Math.max(prev - delta * 1.5, 0));
      materialRef.current.color.lerpColors(
        new THREE.Color("red"),
        new THREE.Color("green"),
        1 - progress
      );

      // Move the line back
      setOffset((prev) => Math.max(prev - delta, 0));
    }
  });

  const updatedStart = new THREE.Vector3().lerpVectors(start, end, offset);
  const updatedEnd = new THREE.Vector3().lerpVectors(end, start, offset);
  geometry.setFromPoints([updatedStart, updatedEnd]);

  return (
    <line geometry={geometry}>
      <lineBasicMaterial attach="material" color="blue" ref={materialRef} />
    </line>
  );
};

// 3D Hexagon component
const Hexagon3D = ({
  radius = 1,
  height = 1,
  center = [0, 0, 0],
  uniqueLines,
  breakingLines,
  healedLines,
  setHealedLines,
}) => {
  const lines = create3DHexagon(radius, height, center, uniqueLines);

  return (
    <group>
      {lines.map((line, index) => {
        const isBreaking = breakingLines.has(index);
        const isHealing = healedLines.has(index);

        return (
          <AnimatedLine
            key={index}
            geometry={line.geometry}
            breaking={isBreaking}
            healing={isHealing}
            start={line.start}
            end={line.end}
            onHealed={() => {
              setHealedLines((prev) => {
                const newSet = new Set(prev);
                newSet.add(index);
                return newSet;
              });
            }}
          />
        );
      })}
    </group>
  );
};

// Function to generate hexagon positions for a beehive layout
const generateBeehiveGrid = ({ radius, height, rows, cols }) => {
  const positions = [];
  const hexWidth = radius * 2; // Horizontal distance between hexagon centers
  const hexHeight = Math.sqrt(3) * radius; // Vertical distance between rows

  const centerXOffset = (cols - 1) * (hexWidth * 0.75) / 2; // Offset grid horizontally to center
  const centerYOffset = (rows - 1) * (hexHeight / 2) / 2; // Offset grid vertically to center

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const offsetX = col * hexWidth * 0.75; // Staggered column spacing
      const offsetY = row * hexHeight - (col % 2 === 1 ? hexHeight / 2 : 0); // Offset for staggered rows
      const offsetZ = 0; // All hexagons are in the same plane for the beehive structure

      // Adjust positions to center the grid
      const x = offsetX - centerXOffset;
      const y = offsetY - centerYOffset;
      const z = offsetZ;

      positions.push([x, y, z]);
    }
  }

  return positions;
};

// Main App component
const App = () => {
  const radius = 1; // Radius of each hexagon
  const height = 1; // Height of each hexagon
  const rows = 2; // Number of rows
  const cols = 2; // Number of columns

  const hexagonPositions = generateBeehiveGrid({ radius, height, rows, cols });

  const uniqueLines = useMemo(() => new Set(), []);
  const [breakingLines, setBreakingLines] = useState(new Set());
  const [healedLines, setHealedLines] = useState(new Set());

  useEffect(() => {
    const interval = setInterval(() => {
      const totalLines = Array.from(uniqueLines).length;

      console.log(uniqueLines);

      // Randomly select 10 lines to break
      const randomIndices = new Set();
      while (randomIndices.size < 10) {
        randomIndices.add(Math.floor(Math.random() * totalLines));
      }

      setBreakingLines(randomIndices);
      setHealedLines(new Set());
    }, 5000);

    return () => clearInterval(interval);
  }, [uniqueLines]);

  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [10, 10, 10], fov: 75 }}>
        <ambientLight />
        <OrbitControls enableZoom={true} />
        {hexagonPositions.map((position, index) => (
          <Hexagon3D
            key={index}
            radius={radius}
            height={height}
            center={position}
            uniqueLines={uniqueLines}
            breakingLines={breakingLines}
            healedLines={healedLines}
            setHealedLines={setHealedLines}
          />
        ))}
      </Canvas>
    </div>
  );
};

export default App;
