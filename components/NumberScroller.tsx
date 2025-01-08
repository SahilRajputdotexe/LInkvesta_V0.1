"use client";

import React, { useCallback, useEffect, useRef, useState } from 'react';

interface IncreaseNumberAnimationProps {
  endNumber: number;
  speed?: number;
  text:string // Optional speed parameter with a default value
  suffix?: string; // Optional suffix to append to the number
}

const IncreaseNumberAnimation: React.FC<IncreaseNumberAnimationProps> = ({
  endNumber,
  speed = 10,
  text,
  suffix=' '
}) => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  // Function to handle the animation
  const increaseNumberAnimation = useCallback(() => {
    const element = elementRef.current;
    if (!element) return;

    const animationRunning = JSON.parse(element.dataset.animationRunning ?? 'false');

    if (animationRunning) return;

    element.dataset.animationRunning = 'true'; // Store the running state as a string (for dataset)

    incNbrRec(0, endNumber, element, speed);
  }, [endNumber, speed]);

  // Recursive function to increment the number
  const incNbrRec = (currentNumber: number, endNumber: number, element: HTMLDivElement, speed: number) => {
    if (currentNumber <= endNumber) {
      element.innerHTML = currentNumber.toString();
      setTimeout(() => {
        if(endNumber -currentNumber > 50){
            incNbrRec(currentNumber + 39, endNumber, element, speed);
        }else{
        incNbrRec(currentNumber + 1, endNumber, element, speed);
        }
      }, speed);
    } else {
      element.dataset.animationRunning = 'false'; // Reset the running state
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  // Trigger animation when the element comes into view
  useEffect(() => {
    if (isInView) {
      increaseNumberAnimation();
    }
  }, [isInView,increaseNumberAnimation]);

  return (
    <div className="items-center justify-center flex-col">
  <div className="flex text-3xl lg:text-7xl font-bold items-center justify-center text-transparent bg-clip-text bg-gradient-to-b from-[#35747D] via-cyan-600 to-gray-500">
    <div
      ref={elementRef}
      id="nbr"
      data-animation-running="false"
    >
      0
    </div>
    {suffix !== ' ' && <span>{suffix}</span>}
    <span className="pl-2">+</span>
  </div>
  <div className="pl-10 pt-8 text-transparent bg-clip-text bg-gradient-to-t from-gray-400 to-gray-100">
    {text}
  </div>
</div>

  );
};

export default IncreaseNumberAnimation;
