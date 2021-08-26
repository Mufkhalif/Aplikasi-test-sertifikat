import { TextField } from "../ui/form/text-field";
import { ButtonPrimary } from "../ui/button";
import { useForm } from "react-hook-form";
import React from "react";
import { supabase } from "utils/api";
import { formOptionsSignup } from "./helper/validation-schema";

const ErrorText = ({ message }) => (
  <span className="text-sm text-red-500 mt-2">{message}</span>
);

export const FormSignup = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm(formOptionsSignup);

  const isValid = (name) => {
    return (
      getValues()[name] != undefined &&
      errors[name] == undefined &&
      getValues()[name] != ""
    );
  };

  const onSubmit = async (data) => {
    let { user, error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
    });

    console.log(user);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col mt-2">
        {/* <TextField
          label="Nama Lengkap"
          placeholder="isi nama disini"
          name="name"
          {...register("name")}
          isValid={isValid("name")}
          message={errors.name && <ErrorText message={errors.name.message} />}
        /> */}
        <TextField
          label="Email"
          placeholder="test@gamil.com"
          type="email"
          name="email"
          {...register("email")}
          isValid={isValid("email")}
          message={errors.email && <ErrorText message={errors.email.message} />}
        />
        {/* <TextField
          label="Nomor Handphone"
          placeholder="0811111"
          name="phone"
          {...register("phone")}
          isValid={isValid("phone")}
          message={errors.phone && <ErrorText message={errors.phone.message} />}
        /> */}
        <TextField
          label="Kata Sandi"
          placeholder="Min 8 Karakter"
          type="password"
          name="password"
          {...register("password")}
          isValid={isValid("password")}
          message={
            errors.password && <ErrorText message={errors.password.message} />
          }
        />

        <TextField
          label="Ketik Ulang Kata sandi "
          placeholder="Min 8 Karakter"
          type="password"
          name="confirmPassword"
          {...register("confirmPassword")}
          isValid={isValid("confirmPassword")}
          message={
            errors.confirmPassword && (
              <ErrorText message={errors.confirmPassword.message} />
            )
          }
        />
      </div>
      <ButtonPrimary
        type="submit"
        title="Daftar"
        className="mt-4"
        onClick={() => null}
      />
    </form>
  );
};
