import { FC } from "react";
import { cls } from "@/utils/common";

type Props = {
  placeholder?: string;
  value: string;
  onChange: (text: string) => void;
  classNames?: string;
};

const Textarea: FC<Props> = ({
  placeholder = "",
  value,
  onChange,
  classNames = "",
}) => {
  return (
    <textarea
      placeholder={placeholder}
      className={cls(classNames, "default-border p-2 no-resize bg-black")}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Textarea;
