import { inter } from "@/app/fonts";
import cn from "classnames";

interface Props {
  children: React.ReactNode;
}

const SectionTitle = (props: Props) => {
  const { children } = props;
  return (
    <h2
      className={cn(
        inter.className,
        "text-[#000626E6] text-[32px] font-semibold mt-[58px]"
      )}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
