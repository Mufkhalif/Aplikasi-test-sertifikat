import { TextField } from "../ui/form/text-field";
import { ButtonPrimary } from "../ui/button";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { supabase } from "utils/api";
import { formOptionsSignup } from "./helper/validation-schema";
import { DataSigninProps } from "./form-signin";
import { useRouter } from "next/router";

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
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const isValid = (name: string) => {
    return (
      getValues()[name] != undefined &&
      errors[name] == undefined &&
      getValues()[name] != ""
    );
  };

  const onSubmit = async (data: DataSigninProps) => {
    setLoading(true);

    let { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
    });

    if (!error) {
      setLoading(true);
      router.push("/email-verification");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col mt-2">
        <TextField
          label="Email"
          placeholder="test@gmail.com"
          type="email"
          name="email"
          {...register("email")}
          isValid={isValid("email")}
          message={errors.email && <ErrorText message={errors.email.message} />}
        />

        <TextField
          label="Kata Sandi"
          placeholder="Min 6 Karakter"
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
          placeholder="Min 6 Karakter"
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
        disabled={loading}
        type="submit"
        title="Daftar"
        className="mt-4"
        onClick={() => null}
      />
    </form>
  );
};
