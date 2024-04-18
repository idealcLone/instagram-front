import { FC, ReactNode } from "react";
import { cls } from "@/utils/common";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary";
  classNames?: string;
  type?: "button" | "submit";
};

const Button: FC<Props> = ({
  children,
  onClick,
  disabled = false,
  variant = "primary",
  classNames = "",
  type = "button",
}) => {
  return (
    <button
      className={cls(
        classNames,
        disabled
          ? "bg-gray-400"
          : variant === "primary"
          ? "border-neutral-100 border-[1px]"
          : "bg-white text-black",
        "p-2 rounded-md"
      )}
      type={type}
      onClick={onClick}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
