import { TextField } from "@/components/ui/form/text-field";
import { ReminderRow } from "./reminder-row";
import { ButtonPrimary } from "../ui/button";
import { useForm } from "react-hook-form";
import React from "react";
import { supabase } from "utils/api";
import { formOptionsSignin } from "./helper/validation-schema";
import { toast } from "react-toastify";
import { useState } from "react";
import { useRouter } from "next/router";

const ErrorText = ({ message }) => (
  <span className="text-sm text-red-500 mt-2">{message}</span>
);

export const FormSignin = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm(formOptionsSignin);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const isValid = (name) => {
    return (
      getValues()[name] != undefined &&
      errors[name] == undefined &&
      getValues()[name] != ""
    );
  };

  const onSubmit = async (data) => {
    setLoading(true);

    let { user, error } = await supabase.auth.signIn({
      email: data.email,
      password: data.password,
    });

    if (user != null) {
      toast.success("Proses login berhasil", {
        position: toast.POSITION.BOTTOM_CENTER,
        hideProgressBar: true,
      });
      setLoading(false);
      router.push("/");
    } else {
      toast.error(error.message, {
        position: toast.POSITION.BOTTOM_CENTER,
        hideProgressBar: true,
      });
      setLoading(false);
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
          placeholder="Min 8 Karakter"
          type="password"
          name="password"
          {...register("password")}
          isValid={isValid("password")}
          message={
            errors.password && <ErrorText message={errors.password.message} />
          }
        />
      </div>
      <ReminderRow />
      <ButtonPrimary disabled={loading} type="submit" title="Masuk" />
    </form>
  );
};
