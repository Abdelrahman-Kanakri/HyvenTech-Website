import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Simple loading bar that appears at the top of the page during route changes.
 * It animates from 0% to 100% over a short duration and then fades out.
 */
const LoadingBar = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Start the bar when location changes
    setVisible(true);
    setWidth(0);
    // Animate to 90% quickly, then to 100% after a short delay
    const start = setTimeout(() => setWidth(90), 50);
    const finish = setTimeout(() => setWidth(100), 300);
    // Hide after animation completes
    const hide = setTimeout(() => {
      setVisible(false);
      setWidth(0);
    }, 800);
    return () => {
      clearTimeout(start);
      clearTimeout(finish);
      clearTimeout(hide);
    };
  }, [location]);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 pointer-events-none">
      <div
        className="h-full bg-primary transition-all duration-300 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

export default LoadingBar;
