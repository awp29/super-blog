import { inter } from "@/app/fonts";
import cn from "classnames";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  active?: boolean;
  children: React.ReactNode;
}

const WeekLabel = (props: Props) => {
  const { className, active, children } = props;
  return (
    <p
      className={cn(
        className,
        inter.className,
        "text-[#000626E6] text-[14px] font-semibold w-fit"
      )}
    >
      {children}

      <span
        className={twMerge(
          "relative block h-[4px] w-full bg-[#F6D200] top-[-6px] z-[-1] invisible",
          active && "visible"
        )}
      />
    </p>
  );
};

export default WeekLabel;
