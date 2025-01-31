"use client";

import { CursorType, useCursor } from "@/app/CursorContext";
import Image from "next/image";
import Link from "next/link";

const BackLink = () => {
  const { handleMouseEnter, handleMouseLeave, handleClick } = useCursor(
    CursorType.backLink
  );

  return (
    <Link
      className="relative left-[-4px] flex gap-[8px] text-[#000933A6] text-[14px] hover:underline w-fit mb-[32px] cursor-none"
      href="/"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <Image
        src="/icons/arrowLeft.svg"
        alt="an arrow pointing right"
        width={20}
        height={20}
      />
      Back
    </Link>
  );
};

export default BackLink;
