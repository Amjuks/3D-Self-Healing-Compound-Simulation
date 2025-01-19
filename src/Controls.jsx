// import React from 'react';

const Controls = ({ gridWidth, gridHeight, gridDepth, radius, speed, healingDuration, breakingDuration, instability, setGridWidth, setGridHeight, setGridDepth, setRadius, setSpeed, setHealingDuration, setBreakingDuration, setInstability }) => {
  return (
    <div className="controls">
      <label>
        Width: <span>{gridWidth}</span>
        <input type="range" step="1" min="1" max="10" value={gridWidth} onChange={(e) => setGridWidth(Number(e.target.value))} />
      </label>
      <label>
        Height: <span>{gridHeight}</span>
        <input type="range" step="1" min="1" max="10" value={gridHeight} onChange={(e) => setGridHeight(Number(e.target.value))} />
      </label>
      <label>
        Depth: <span>{gridDepth}</span>
        <input type="range" step="1" min="1" max="10" value={gridDepth} onChange={(e) => setGridDepth(Number(e.target.value))} />
      </label>
      <label>
        Radius: <span>{radius}</span>
        <input type="range" step="1" min="10" max="30" value={radius} onChange={(e) => setRadius(Number(e.target.value))} />
      </label>
      <label>
        Movement Speed: <span>{speed}</span>
        <input type="range" step="1" min="1" max="30" value={speed} onChange={(e) => setSpeed(Number(e.target.value))} />
      </label>
      <label>
        Healing Speed: <span>{healingDuration}</span>
        <input type="range" step="1" min="1" max="30" value={healingDuration} onChange={(e) => setHealingDuration(Number(e.target.value))} />
      </label>
      <label>
        Breaking Speed: <span>{breakingDuration * 10}</span>
        <input type="range" step="0.1" min="0.1" max="5" value={breakingDuration} onChange={(e) => setBreakingDuration(Number(e.target.value))} />
      </label>
      <label>
        Instability: <span>{instability * 10}</span>
        <input type="range" step="0.1" min="0.1" max="5.0" value={instability} onChange={(e) => setInstability(Number(e.target.value))} />
      </label>
    </div>
  );
};

export default Controls;