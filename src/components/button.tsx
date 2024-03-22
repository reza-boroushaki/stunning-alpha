import { MouseEventHandler } from "react";
import { cn } from "../../utils/cn";

type ButtonProps = {
  children: React.ReactNode;
  borderColor?: string;
  bgColor?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  px?: string;
};

const Button = ({
  children,
  borderColor,
  bgColor,
  onClick,
  className,
  px,
}: ButtonProps) => {
  return (
    <button className={cn(`p-[3px] relative`, className)} onClick={onClick}>
      <div
        className={`absolute inset-0 bg-gradient-to-r rounded-lg ${
          borderColor || "from-indigo-500 to-purple-500"
        }`}
      />
      <div
        className={`${
          px || "px-8"
        } py-2  rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent ${
          bgColor || "bg-black"
        }`}
      >
        {children}
      </div>
    </button>
  );
};

export default Button;
