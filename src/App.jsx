import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Controls from './Controls';
import './styles.css';

// Global variable to store all Three.js lines
const allLines = [];
let allVertices = [];

/**
 * Function to calculate the grid of hexagons and return all unique line coordinates in [x, y] format.
 * @param {number} gridWidth - The number of hexagons along the x-axis.
 * @param {number} gridHeight - The number of hexagons along the y-axis.
 * @param {number} radius - The radius of each hexagon.
 * @returns {Array} - A flat array of unique line coordinates for the grid in the format [[x1, y1], [x2, y2]].
 */
function getHexagonGridCoordinates(gridWidth, gridHeight, gridDepth, radius) {
  const allLineCoordinates = [];
  const hexHeight = Math.sqrt(3) * radius; // Height of a hexagon
  const hexWidth = 2 * radius; // Width of a hexagon
  const verticalSpacing = 1.0 * hexHeight; // Vertical spacing between rows (75% of height)
  const horizontalSpacing = 1 * hexWidth * 0.75; // Horizontal spacing between columns
  const vertices = new Set();
  const layerVertices = []; // Store vertices grouped by depth layer

  for (let depth = 0; depth < gridDepth; depth++) {
    const centerZ = depth * radius; // Depth spacing between layers
    for (let row = 0; row < gridHeight; row++) {
      for (let col = 0; col < gridWidth; col++) {
        let centerY = row * verticalSpacing;
        let centerX = col * horizontalSpacing;
  
        centerY = col % 2 == 0 ? centerY - (hexHeight / 2) : centerY;
        centerX = (col * horizontalSpacing);
  
        const lineCoordinates = getHexagonLineCoordinates(centerX, centerY, centerZ, radius);
        allLineCoordinates.push(...lineCoordinates);

        if (depth === 0) {
          lineCoordinates.map(line => line[0]).forEach(vertex => layerVertices.push(vertex));
        }
      }
    }
  }

  // Connect vetices between layers
  for (let depth = 0; depth < (gridDepth-1); depth++) {
    for (let i = 0; i < layerVertices.length; i++) {
      const start = [...layerVertices[i]];
      const end = [...layerVertices[i]];

      start[2] = depth * radius;
      end[2] = (depth + 1) * radius;

      allLineCoordinates.push([start, end]);
    }
  }

  // Vertices of hexagons
  for (let depth = 0; depth < gridDepth; depth++) {
    const centerZ = depth * radius; // Depth spacing between layers
    for (let row = 0; row < gridHeight; row++) {
      for (let col = 0; col < gridWidth; col++) {
        let centerY = row * verticalSpacing;
        let centerX = col * horizontalSpacing;
  
        centerY = col % 2 == 0 ? centerY - (hexHeight / 2) : centerY;
        centerX = (col * horizontalSpacing);
  
        const lineCoordinates = getHexagonLineCoordinates(centerX, centerY, centerZ, radius);
        lineCoordinates.flat().forEach(vertex => vertices.add(JSON.stringify(vertex)));
      }
    }
  }

  // All vertices
  allVertices = Array.from(vertices).map(vertex => JSON.parse(vertex));

  const uniqueLineCoordinates = removeDuplicateLines(allLineCoordinates);
  return uniqueLineCoordinates;
}

function prettyPrintCoordinates(coordinateList) {
  console.clear();
  if (!Array.isArray(coordinateList) || coordinateList.length === 0) {
    console.log('The provided list is empty or not a valid array.');
    return;
  }

  console.log('Coordinates List:');
  coordinateList.forEach((coordinates, index) => {
    console.log(`Line ${index + 1}:`);
    if (!Array.isArray(coordinates) || coordinates.length !== 3) {
      console.log(`  Item ${index + 1}: Invalid coordinates`);
    } else {
      let [x1, y1, z1] = coordinates[0].map(coord => Math.round(coord));
      let [x2, y2, z2] = coordinates[1].map(coord => Math.round(coord));

      console.log(`[${x1},${y1},${z1}] -> [${x2},${y2},${z2}]`);
    }
  });
}

/**
 * Function to get all line coordinates for a hexagon.
 */
function getHexagonLineCoordinates(centerX, centerY, centerZ, radius) {
  const lineCoordinates = [];
  const angleStep = (2 * Math.PI) / 6;

  const vertices = [];
  for (let i = 0; i < 6; i++) {
    const angle = i * angleStep;
    const vertexX = centerX + radius * Math.cos(angle);
    const vertexY = centerY + radius * Math.sin(angle);
    vertices.push([vertexX, vertexY, centerZ]);
  }

  for (let i = 0; i < vertices.length; i++) {
    const start = vertices[i];
    const end = vertices[(i + 1) % vertices.length];
    lineCoordinates.push([start, end]);
  }

  return lineCoordinates;
}

/**
 * Function to remove duplicate line coordinates.
 */
function removeDuplicateLines(lines, tolerance = 1e-10) {
  const uniqueLines = new Set();

  console.log("Original number of lines:", lines.length);

  function normalizeCoordinate(coord) {
    return coord.map(value => Math.round(value / tolerance) * tolerance);
  }

  for (const line of lines) {
    const [start, end, depth] = line;
    const normalizedStart = normalizeCoordinate(start);
    const normalizedEnd = normalizeCoordinate(end);
    const normalizedLine = JSON.stringify(
      normalizedStart[0] < normalizedEnd[0] || (normalizedStart[0] === normalizedEnd[0] && normalizedStart[1] < normalizedEnd[1])
        ? [normalizedStart, normalizedEnd, depth]
        : [normalizedEnd, normalizedStart, depth]
    );

    uniqueLines.add(normalizedLine);
  }

  const finalLines = Array.from(uniqueLines).map(line => JSON.parse(line));
  console.log("Final number of lines:", finalLines.length);

  return finalLines;
}

/**
 * Function to create Three.js spheres on every vertex.
 * @param {Array} vertices - Array of vertices in the format [x, y, z].
 * @param {THREE.Scene} scene - The Three.js scene to add the spheres to.
 * @param {number} radius - The radius of each sphere.
 */
function createSpheresOnVertices(vertices, scene, sphereRadius = 0.1) {
  const sphereGeometry = new THREE.SphereGeometry(sphereRadius, 32, 32);
  const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xB87333 });

  vertices.forEach(vertex => {
    const [x, y, z] = vertex;
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(x, y, z);
    scene.add(sphere);
  });
}

/**
 * Function to create Three.js lines from the coordinates.
 */
function createLines(allLineCoordinates) {
  for (const line of allLineCoordinates) {
    const [start, end] = line;

    const geometry = new THREE.BufferGeometry();
    const vertices = new Float32Array([
      start[0], start[1], start[2],
      end[0], end[1], end[2],
    ]);

    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    const material = new THREE.LineBasicMaterial({ color: 0x9370DB });
    const threeLine = new THREE.Line(geometry, material);
   
    // Store original color and positions
    threeLine.userData.originalColor = material.color.getHex();
    threeLine.userData.originalPositions = vertices.slice();

    allLines.push(threeLine);
  }
}

function updateLineLengthAndColor(threeLine, healingDuration, breakingDuration) {
  // Update the color to red
  threeLine.material.color.set(0xFFA500);
  threeLine.userData.isAnimating = true;

  // Get the current vertices
  const positions = threeLine.geometry.attributes.position.array;

  // Store the original end coordinates
  const originalEndX = positions[3];
  const originalEndY = positions[4];
  const originalEndZ = positions[5];

  // Animation parameters
  const vanishDuration = breakingDuration * 1000;
  const reappearDuration = healingDuration * 1000;
  const startTime = performance.now();

  function vanish() {
    const currentTime = performance.now();
    const elapsedTime = currentTime - startTime;
    const progress = elapsedTime / vanishDuration;

    if (progress < 1) {
      // Calculate the new end coordinates based on progress
      const newEndX = positions[0] + (originalEndX - positions[0]) * (1 - progress);
      const newEndY = positions[1] + (originalEndY - positions[1]) * (1 - progress);
      const newEndZ = positions[2] + (originalEndZ - positions[2]) * (1 - progress);

      // Update the vertices
      positions[3] = newEndX;
      positions[4] = newEndY;
      positions[5] = newEndZ;

      // Notify Three.js that the geometry has changed
      threeLine.geometry.attributes.position.needsUpdate = true;

      // Continue the animation
      requestAnimationFrame(vanish);
    } else {
      // Start reappearing animation
      threeLine.material.color.set(0x008080); // Change to green
      reappear();
    }
  }

  function reappear() {
    const reappearStartTime = performance.now();

    function animateReappear() {
      const currentTime = performance.now();
      const elapsedTime = currentTime - reappearStartTime;
      const progress = elapsedTime / reappearDuration;

      if (progress < 1) {
        // Calculate the new end coordinates based on progress
        const newEndX = positions[0] + (originalEndX - positions[0]) * progress;
        const newEndY = positions[1] + (originalEndY - positions[1]) * progress;
        const newEndZ = positions[2] + (originalEndZ - positions[2]) * progress;

        // Update the vertices
        positions[3] = newEndX;
        positions[4] = newEndY;
        positions[5] = newEndZ;

        // Notify Three.js that the geometry has changed
        threeLine.geometry.attributes.position.needsUpdate = true;

        // Continue the animation
        requestAnimationFrame(animateReappear);
      } else {
        // Reset the line after the animation is complete
        resetLineLengthAndColor(threeLine);
        threeLine.userData.isAnimating = false; // Set isAnimating to false
      }
    }

    // Start the reappear animation
    requestAnimationFrame(animateReappear);
  }

  // Start the vanish animation
  requestAnimationFrame(vanish);
}

function resetLineLengthAndColor(threeLine) {
  // Reset the color
  threeLine.material.color.set(threeLine.userData.originalColor);

  // Reset the vertices
  const originalPositions = threeLine.userData.originalPositions;
  const positions = threeLine.geometry.attributes.position.array;
  positions[0] = originalPositions[0];
  positions[1] = originalPositions[1];
  positions[2] = originalPositions[2];
  positions[3] = originalPositions[3];
  positions[4] = originalPositions[4];
  positions[5] = originalPositions[5];

  // Notify Three.js that the geometry has changed
  threeLine.geometry.attributes.position.needsUpdate = true;
}


let gridLength;
let gridDepthOccupied;
let gridHeightOccupied;
/**
 * Main App Component
 */
const App = () => {
  const mountRef = useRef(null);
  const [gridWidth, setGridWidth] = useState(3);
  const [gridHeight, setGridHeight] = useState(3);
  const [gridDepth, setGridDepth] = useState(4);
  const [radius, setRadius] = useState(10);
  const [speed, setSpeed] = useState(7);
  const [healingDuration, setHealingDuration] = useState(3);
  const [breakingDuration, setBreakingDuration] = useState(1);
  const [instability, setInstability] = useState(1);
  
  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xfffdd0);
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 100;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true; // Enable shadow maps
    mountRef.current.appendChild(renderer.domElement);

    // Add a directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(50, 50, 50);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Add ambient light for softer shadows
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const renderScene = () => {
      // Clear previous lines and vertices
      allLines.length = 0;
      allVertices.length = 0;
      gridLength = gridWidth * radius;
      gridDepthOccupied = gridDepth * radius;
      gridHeightOccupied = gridHeight * radius * Math.sqrt(3) / 2;
      while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
      }

      // Generate and add lines to the scene
      const allLineCoordinates = getHexagonGridCoordinates(gridWidth, gridHeight, gridDepth, radius);
      createLines(allLineCoordinates);
      allLines.forEach(line => {
        line.castShadow = true;
        line.receiveShadow = true;
        scene.add(line);
      });
      createSpheresOnVertices(allVertices, scene, 0.7);

      // Calculate the center of the hexagon grid
      const centerX = (gridWidth - 1) * radius * 1.5 / 2;
      const centerY = (gridHeight - 1) * radius * Math.sqrt(3) / 2;
      const centerZ = ((gridDepth - 1) * radius) / 2;

      const duration = (healingDuration + breakingDuration) * 1000;

      // Function to randomly update lines
      const updateRandomLines = () => {
        const minLinesToUpdate = Math.floor(allLines.length * 0.1);
        const maxLinesToUpdate = Math.floor(allLines.length * 0.2);
        const numberOfLinesToUpdate = Math.floor(Math.random() * (maxLinesToUpdate - minLinesToUpdate + 1)) + minLinesToUpdate;

        const linesToUpdate = [];
        for (let i = 0; i < numberOfLinesToUpdate; i++) {
          let randomIndex;
          do {
            randomIndex = Math.floor(Math.random() * allLines.length);
          } while (allLines[randomIndex].userData.isAnimating); // Ensure the line is not animating

          linesToUpdate.push(randomIndex);
        }

        linesToUpdate.forEach(index => {
          updateLineLengthAndColor(allLines[index], healingDuration, breakingDuration);
        });

        setTimeout(updateRandomLines, duration + 1000); // 3 seconds duration
      };

      updateRandomLines();

      // Function to animate the camera
      const animateCamera = () => {
        const time = Date.now() * 0.0005;

        // Dynamic camera position
        camera.position.x = Math.cos(time * (speed / 10)) * (gridLength / 2);
        camera.position.y = Math.sin(time * (speed / 10)) * (gridHeightOccupied * 2) + 10;
        camera.position.z = Math.sin(time * (speed / 10)) * (gridDepthOccupied * 2);

        // Dynamic camera target
        const targetX = centerX + Math.sin(time * (instability / 10)) * gridLength;
        const targetY = centerY + Math.sin(time * (instability / 10)) * gridHeightOccupied;
        const targetZ = centerZ + Math.cos(time * (instability / 10)) * (gridDepthOccupied * 0.5);
        camera.lookAt(new THREE.Vector3(targetX, targetY, targetZ));

        console.log("Instability: ", (instability / 10));

        requestAnimationFrame(animateCamera);
      };

      animateCamera();

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };
      animate();
    };

    renderScene();

    // Cleanup
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [gridWidth, gridHeight, gridDepth, radius, speed, healingDuration, breakingDuration, instability]);

  return (
    <div>
      <Controls
        gridWidth={gridWidth}
        gridHeight={gridHeight}
        gridDepth={gridDepth}
        radius={radius}
        speed={speed}
        healingDuration={healingDuration}
        breakingDuration={breakingDuration}
        instability={instability}
        setGridWidth={setGridWidth}
        setGridHeight={setGridHeight}
        setGridDepth={setGridDepth}
        setRadius={setRadius}
        setSpeed={setSpeed}
        setHealingDuration={setHealingDuration}
        setBreakingDuration={setBreakingDuration}
        setInstability={setInstability}
      />
      <div ref={mountRef} />
    </div>
  );
};

export default App;
