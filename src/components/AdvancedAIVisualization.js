'use client';

import Orb from "@/components/orb";

const AdvancedAIVisualization = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center relative w-full pt-12">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
       
      </div>
  );
};

export default AdvancedAIVisualization;
