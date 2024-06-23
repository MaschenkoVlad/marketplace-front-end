import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
};

const EMAIL_PATTERN =
  /^(?![_.-])((?![_.-][_.-])[a-zA-Zd_.-]){0,63}[a-zA-Zd]@((?!-)((?!--)[a-zA-Zd-]){0,63}[a-zA-Zd].){1,2}([a-zA-Z]{2,14}.)?[a-zA-Z]{2,14}$/;

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("firstName")); // watch input value by passing the name of it

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName", { required: true })} />
        <input {...register("lastName", { required: true })} />
        <input
          {...register("email", {
            required: true,
            pattern: EMAIL_PATTERN,
          })}
        />
        <input {...register("phoneNumber")} />
        <input {...register("password", { required: true, minLength: 8 })} />
        <input {...register("confirmPassword", { required: true })} />

        {errors.email && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default SignUpForm;
