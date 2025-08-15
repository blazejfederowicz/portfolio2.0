"use client"
import { motion, useInView, useAnimation } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { RevealProps } from "./Reveal.interface";

export const Reveal = ({ children, custom = "w-fit overflow-hidden" }:RevealProps) => {
  const [styles, setStyles] = useState(`relative ${custom}`)
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); 
  const controls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible").then(()=>setStyles(''));
      slideControls.start("visible")
    }
  }, [isInView, controls, slideControls]);

  return (
    <div ref={ref} className={styles}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
      <motion.div
            variants={{
            hidden: { left: 0},
            visible: { left:'100%'},
            }}
            initial="hidden"
            animate={slideControls}
            transition={{ duration: 0.5, ease: "easeIn" }}
            style={{
                position:"absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                borderRadius:'5px',
                background: 'oklch(0.828 0.111 230.318)',
                zIndex:20
            }}
        />
    </div>
  );
};
