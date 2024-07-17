import { memo } from "react";
import { useFormContext } from "react-hook-form";
import { FieldError } from "react-hook-form/dist/types";

interface IInputFieldProps {
  name: string;
  label?: string;
  error?: FieldError;
}

const InputField = memo((props: IInputFieldProps) => {
  const { name, error, label } = props;

  const { register } = useFormContext();

  return (
    <div>
      {label ? <label htmlFor={name}>{label}</label> : null}
      <input id={name} {...register(name)} aria-invalid={error ? "true" : "false"} />
      {error ? <span role="alert">{error?.message?.toString()}</span> : null}
    </div>
  );
});

export default InputField;
