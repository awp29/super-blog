import Image from "next/image";
import Link from "next/link";

const BackLink = () => {
  return (
    <Link className="flex gap-[8px] text-[#000933A6] text-[14px]" href="/">
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
