import { useState, useEffect } from "react";

// Define your breakpoints
const breakpoints = {
  xs: 0, // Extra small devices (phones)
  sm: 640, // Small devices (tablets)
  md: 768, // Medium devices (small laptops)
  lg: 1024, // Large devices (desktops)
  xl: 1280, // Extra large devices (large desktops)
};

export const useResponsive = () => {
  const [width, setWidth] = useState<number>(0);

  // Update the width on resize
  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    // Set initial width when the component mounts
    setWidth(window.innerWidth);

    // Add event listener to handle resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Helper functions to check if the viewport matches a specific breakpoint
  const isXs = width >= breakpoints.xs && width < breakpoints.sm;
  const isSm = width >= breakpoints.sm && width < breakpoints.md;
  const isMd = width >= breakpoints.md && width < breakpoints.lg;
  const isLg = width >= breakpoints.lg && width < breakpoints.xl;
  const isXl = width >= breakpoints.xl;

  return { width, isXs, isSm, isMd, isLg, isXl };
};
