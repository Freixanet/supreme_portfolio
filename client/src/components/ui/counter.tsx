import { useState, useEffect } from "react";

interface CounterProps {
  target: number;
  duration?: number;
  className?: string;
  "data-testid"?: string;
}

export default function Counter({ 
  target, 
  duration = 2000, 
  className = "",
  "data-testid": testId
}: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCount(Math.floor(current));
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <div className={className} data-testid={testId}>
      {count.toLocaleString()}
    </div>
  );
}
