import { FunctionComponent, useRef } from "react";

interface InputProps {
  textLabel?: string;
  required?: boolean;
  type: string;
  requiredValid?: boolean;
  value?: string;
  warningText?: string;
  onBlur?(): void;
  handleChange?(value: string): void;
}

const Input: FunctionComponent<InputProps> = ({
  textLabel,
  required,
  type,
  value,
  requiredValid,
  warningText,
  onBlur,
  handleChange,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="text-[#023535]">
      <p  > {required ? `${textLabel} *` : textLabel} </p>
      {type === "textarea" ? (
        <textarea
          value={value}
          onChange={(event) => handleChange(event.currentTarget.value)}
          onBlur={onBlur}
          id={textLabel}
          className="w-full resize-none h-[200px] py-[10px] px-[10px]  border-[2px] border-[#0FC2C0] rounded-2xl focus:border-[#0FC2C0] focus:outline-none "
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(event) => handleChange(event.currentTarget.value)}
          onBlur={onBlur}
          id={textLabel}
          className="w-full h-[40px] px-[10px]  border-[2px] border-[#0FC2C0] rounded-2xl focus:border-[#0FC2C0] focus:outline-none "
          ref={inputRef}
        />
      )}
      {!requiredValid && value.length === 0 && <p>{"Campo Obligatorio"}</p>}
      {!requiredValid && value.length > 0 && <p> {warningText} </p>}
    </div>
  );
};

export default Input;
