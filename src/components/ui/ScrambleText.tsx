import { useEffect, useRef, useState } from "react";

interface ScrambleTextProps {
  text: string;
  className?: string;
  speed?: number;
  scrambleSpeed?: number;
  characters?: string;
}

export function ScrambleText({ 
  text, 
  className = "",
  speed = 50,
  scrambleSpeed = 30,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*"
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState("");
  const frameRef = useRef<number>();
  const iterationRef = useRef(0);

  useEffect(() => {
    let currentIteration = 0;
    const totalIterations = text.length;

    const scramble = () => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            // If we've revealed this character, show it
            if (index < currentIteration) {
              return text[index];
            }
            
            // If it's a space, show space
            if (char === " ") return " ";
            
            // Otherwise show random character
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      currentIteration += 1 / (scrambleSpeed / speed);
      iterationRef.current = currentIteration;

      if (currentIteration < totalIterations) {
        frameRef.current = requestAnimationFrame(scramble);
      } else {
        setDisplayText(text);
      }
    };

    // Start animation after a brief delay
    const timeout = setTimeout(() => {
      frameRef.current = requestAnimationFrame(scramble);
    }, 200);

    return () => {
      clearTimeout(timeout);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [text, speed, scrambleSpeed, characters]);

  return <span className={className}>{displayText}</span>;
}
