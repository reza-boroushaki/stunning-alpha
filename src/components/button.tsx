import { MouseEventHandler } from "react";
import { cn } from "../../utils/cn";
import ButtonSvg from "../assets/svg/ButtonSvg";

type ButtonProps = {
  children: React.ReactNode;
  borderColor?: string;
  bgColor?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  px?: string;
  href?: string;
  white?: boolean;
};

const Button = ({
  children,
  borderColor,
  bgColor,
  onClick,
  className,
  px,
  href,
  white,
}: ButtonProps) => {
  if (href) {
    return (
      // Button code
      <a
        href={href}
        className={`${
          className ||
          "inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#fefefe,45%,#ccc,55%,#fefefe)] bg-[length:200%_100%] px-6 font-medium text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        }`}
      >
        {children}
      </a>
    );
  } else {
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
  }
};

export default Button;
