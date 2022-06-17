import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { IUserRegisterForm } from "types";
import classes from "./RegisterForm.module.scss";

interface Iprops {
  onSubmit: SubmitHandler<IUserRegisterForm>;
}

const schema = yup
  .object({
    fName: yup
      .string()
      .required("this field is required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  })
  .required();

const RegisterForm = (props: Iprops) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegisterForm>({
    resolver: yupResolver(schema),
    shouldFocusError: true,
  });

  const onSubmit = async (data: IUserRegisterForm) => {};
  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email Address</label>

      <input {...register("email", { required: true })} id="email" />
      <input {...register("password", { required: true })} />
      <input {...register("confirmPassword", { required: true })} />
    </form>
  );
};

export default RegisterForm;
