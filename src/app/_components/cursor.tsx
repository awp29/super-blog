"use client";

import React, { useState, useEffect, useContext } from "react";
import { CursorContext } from "../CursorContext";
import { motion } from "motion/react";
import Image from "next/image";
import cn from "classnames";

const Cursor: React.FC = () => {
  const { active, icon } = useContext(CursorContext);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const animateState = active ? "animate" : "initial";

  return (
    <motion.div
      animate={animateState}
      style={{ top: position.y, left: position.x }}
      className={cn(
        active ? "z-10" : "z-[-1]",
        "fixed w-[40px] h-[40px] bg-[#F63123] rounded-full pointer-events-none translate-x-[-50%] translate-y-[-50%] flex items-center justify-center"
      )}
      variants={{
        animate: {
          width: 60,
          height: 60,
        },
      }}
    >
      <motion.div
        animate={animateState}
        className="w-0 h-0 cursor-none"
        variants={{
          animate: {
            width: 32,
            height: 32,
          },
        }}
      >
        <Image
          src={icon}
          alt="an arrow pointing right"
          width={32}
          height={32}
        />
      </motion.div>
    </motion.div>
  );
};

export default Cursor;
