import { memo } from "react";
import { useFormContext } from "react-hook-form";
import { FieldError } from "react-hook-form/dist/types";

interface InputFieldProps {
  name: string;
  label?: string;
  error?: FieldError;
}

const InputField = (props: InputFieldProps) => {
  const { name, error, label } = props;

  const { register } = useFormContext();

  return (
    <div>
      {label ? <label htmlFor={name}>{label}</label> : null}
      <input id={name} {...register(name)} aria-invalid={error ? "true" : "false"} />
      {error ? <p role="alert">{error?.message?.toString()}</p> : null}
    </div>
  );
};

export default memo(InputField);
