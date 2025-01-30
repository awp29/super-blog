import { inter } from "@/app/fonts";
import cn from "classnames";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const WeekLabel = (props: Props) => {
  const { className, children } = props;
  return (
    <p
      className={cn(
        className,
        inter.className,
        "text-[#000626E6] text-[14px] font-semibold w-fit"
      )}
    >
      {children}
      <span className="relative block h-[4px] w-full bg-[#F6D200] top-[-6px] z-[-1]" />
    </p>
  );
};

export default WeekLabel;
