'use client'

import React, { useEffect, useRef, useState, ReactNode } from 'react';

type InViewWrapperProps = {
  children: ReactNode;
  onInView?: () => void; // Optional callback when element comes into view
  threshold?: number; // Optional threshold for IntersectionObserver
  className?: string; // Optional class to apply to the wrapper
  style?: React.CSSProperties & { [key: string]: string | number };
};

const InViewWrapper: React.FC<InViewWrapperProps> = ({ children, className, style }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${isInView ? 'in-view' : ''}`}
      style={style} // Apply the style prop here
    >
      {children}
    </div>
  );
};

export default InViewWrapper;
