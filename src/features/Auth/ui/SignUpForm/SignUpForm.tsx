import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import yup from "yup";

import InputField from "src/shared/ui/Input";
import { memo } from "react";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
};

const PHONE_NUMBER_PATTERN = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    password: yup.string().min(8, "Must be exactly 8 digits").required(),
    confirmPassword: yup.string().required(),
    email: yup.string().email().required(),
    phoneNumber: yup.string().matches(PHONE_NUMBER_PATTERN, "Phone number is not valid").required(),
  })
  .required();

const SignUpForm = memo(() => {
  const methods = useForm<Inputs>({ resolver: yupResolver(schema) });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <InputField name="firstName" error={errors.firstName} />
          <InputField name="lastName" error={errors.lastName} />
        </div>

        <InputField name="email" error={errors.email} />

        <InputField name="phoneNumber" error={errors.phoneNumber} />
        <InputField name="password" error={errors.password} />
        <InputField name="confirmPassword" error={errors.confirmPassword} />

        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
});

export default SignUpForm;
