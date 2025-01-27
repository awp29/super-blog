import { inter } from "@/app/fonts";
import cn from "classnames";

interface Props {
  children: React.ReactNode;
}

const WeekLabel = (props: Props) => {
  const { children } = props;
  return (
    <p
      className={cn(
        inter.className,
        "text-[#000626E6] text-[14px] font-semibold"
      )}
    >
      {children}
    </p>
  );
};

export default WeekLabel;
