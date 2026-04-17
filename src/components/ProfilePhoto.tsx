import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ProfilePhoto() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Basic floating animation for the photo to replace the 3D model's idle motion
    gsap.to(containerRef.current, {
      y: -15,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="character-model" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div 
        ref={containerRef}
        style={{
          width: '35vmin',
          height: '35vmin',
          minWidth: '250px',
          minHeight: '250px',
          maxWidth: '400px',
          maxHeight: '400px',
          borderRadius: '50%',
          overflow: 'hidden',
          border: '4px solid #c481ff',
          boxShadow: '0 0 30px rgba(196, 129, 255, 0.4)',
          zIndex: 10,
          position: 'relative',
          pointerEvents: 'auto'
      }}>
        <img 
          src="https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/714f99bf-9215-4f48-9835-f8a8ecc3e1b7.jpeg" 
          alt="Ayush Tripathi"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 20%'
          }}
        />
      </div>
    </div>
  );
}
