
import React, { useEffect, useRef, useState } from 'react';

interface MatrixRainProps {
  onComplete?: () => void;
  duration?: number; // how long to show before triggering onComplete
}

const MatrixRain: React.FC<MatrixRainProps> = ({ onComplete, duration = 6000 }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isComplete, setIsComplete] = useState(false);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to fill the parent container
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Characters to use (mix of katakana, numbers and special characters)
    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789<>?/!@#$%^&*(){}[]+-=_';
    
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Array to track y position of each column
    const drops: number[] = Array(columns).fill(0);
    
    // Array to track alpha (brightness) of each column
    const alphas: number[] = Array(columns).fill(0.05);
    
    // Start with partial intensity
    let globalOpacity = 0.1;
    let animationIntensity = 1;
    let completionStarted = false;
    
    // Animation effect timing
    const startTime = Date.now();
    
    // Animation function
    const draw = () => {
      const elapsed = Date.now() - startTime;
      
      // Increase global opacity over time up to a point
      if (elapsed < 3000) {
        globalOpacity = Math.min(0.9, 0.1 + (elapsed / 3000) * 0.8);
      }
      
      // Intensify animation after 3 seconds
      if (elapsed > 3000 && elapsed < 4500) {
        animationIntensity = 1 + ((elapsed - 3000) / 1500) * 2;
      }
      
      // Start fade out to white effect for completion
      if (elapsed > 5000 && !completionStarted) {
        completionStarted = true;
      }
      
      // Fade to white transition
      if (completionStarted) {
        const fadeElapsed = elapsed - 5000;
        const fadeProgress = Math.min(1, fadeElapsed / 1000);
        
        // Fill with increasingly white background
        ctx.fillStyle = `rgba(255, 255, 255, ${fadeProgress * 0.95})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        if (fadeProgress === 1 && !isComplete) {
          setIsComplete(true);
          if (onComplete) {
            // Small delay before calling onComplete
            setTimeout(onComplete, 200);
          }
        }
      } else {
        // Semi-transparent black background for trail effect
        ctx.fillStyle = `rgba(0, 0, 0, 0.05)`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Set text properties
        ctx.font = `${fontSize}px monospace`;
        
        // Draw characters
        for (let i = 0; i < drops.length; i++) {
          // Random character
          const char = chars[Math.floor(Math.random() * chars.length)];
          
          // Random brightness for this character
          const charBrightness = 0.7 + Math.random() * 0.3;
          
          // Calculate combined opacity
          const opacity = alphas[i] * globalOpacity * charBrightness;
          
          // Use our primary color (based on the tailwind config)
          // Add slight glow effect
          ctx.shadowBlur = 5;
          ctx.shadowColor = `rgba(110, 116, 175, ${opacity * 0.6})`;
          ctx.fillStyle = `rgba(110, 116, 175, ${opacity})`;
          
          // Draw the character
          ctx.fillText(char, i * fontSize, drops[i] * fontSize);
          
          // Move drop position
          drops[i] += (Math.random() * 1.5 * animationIntensity);
          
          // Increase alpha over time with some randomness
          alphas[i] = Math.min(1, alphas[i] + 0.002 * (Math.random() + 0.5) * animationIntensity);
          
          // Reset drop when it reaches the bottom
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
            // Slightly reduce alpha when resetting
            alphas[i] *= 0.6;
          }
        }
      }
      
      // Schedule the next frame
      if (!isComplete) {
        requestAnimationFrame(draw);
      }
    };
    
    // Auto-trigger completion after specified duration
    const completionTimer = setTimeout(() => {
      if (!isComplete && onComplete) {
        setIsComplete(true);
        onComplete();
      }
    }, duration);
    
    // Start the animation
    const animFrame = requestAnimationFrame(draw);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animFrame);
      clearTimeout(completionTimer);
    };
  }, [onComplete, duration]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full z-10"
      style={{ backgroundColor: 'transparent' }}
    />
  );
};

export default MatrixRain;
