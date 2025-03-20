import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import yup from "yup";

import InputField from "src/shared/ui/Input";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

const validationSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

const SignInForm = () => {
  const [disabled, setDisabled] = useState(false);
  const methods = useForm<Inputs>({ resolver: yupResolver(validationSchema), criteriaMode: "all", disabled });
  const {
    handleSubmit,
    formState: { errors, isValid },
  } = methods;

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setDisabled(true);
    console.log(data, isValid);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField name="email" error={errors.email} />
        <InputField name="password" error={errors.password} />

        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default SignInForm;
