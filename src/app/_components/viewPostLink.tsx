"use client";

import Image from "next/image";
import Link from "next/link";
import { CursorType, useCursor } from "../CursorContext";

interface Props {
  slug: string;
}

const ViewPostLink = (props: Props) => {
  const { slug } = props;

  const { handleMouseEnter, handleMouseLeave, handleClick } = useCursor(
    CursorType.viewPost
  );

  return (
    <Link
      className="flex gap-[8px] text-[#0000EE] text-[14px] hover:underline w-fit cursor-none relative"
      href={`/posts/${slug}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      View week
      <Image
        src="/icons/arrowRight.svg"
        alt="an arrow pointing right"
        width={20}
        height={20}
      />
    </Link>
  );
};

export default ViewPostLink;
