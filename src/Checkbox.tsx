import { IconCheck } from "./Icons/components";

export const Checkbox = ({
  name,
  checked,
  onChange,
  className,
}: {
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}) => {
  return (
    <div className={className}>
      <label>
        <input
          name={name}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only peer"
        />
        <div className="relative w-5 h-5 bg-password_strength-strong border-none peer-checked:flex hidden">
            <IconCheck size="20" className="absolute top-[5px] left-[3px]"/>
        </div>
        <div className="w-5 h-5 border-2 border-white peer-checked:hidden flex" />
      </label>
    </div>
  );
};
