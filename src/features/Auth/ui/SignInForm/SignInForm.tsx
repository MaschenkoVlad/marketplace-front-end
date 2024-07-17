import { yupResolver } from "@hookform/resolvers/yup";
import yup from "yup";

import InputField from "src/shared/ui/Input";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

const SignInForm = () => {
  const methods = useForm<Inputs>({ resolver: yupResolver(schema) });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
