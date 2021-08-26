import { TextField } from "@/components/ui/form/text-field";
import { ReminderRow } from "./reminder-row";
import { ButtonPrimary } from "../ui/button";
import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { supabase } from "utils/api";
import { formOptionsSignin } from "./helper/validation-schema";

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

  useEffect(() => {
    fetchProfile();
  }, []);

  async function fetchProfile() {
    const profileData = await supabase.auth.user();
    // console.log("profileData: ", profileData);
    // if (!profileData) {
    //   router.push('/sign-in')
    // } else {
    //   setProfile(profileData)
    // }
  }

  const isValid = (name) => {
    return (
      getValues()[name] != undefined &&
      errors[name] == undefined &&
      getValues()[name] != ""
    );
  };

  const onSubmit = async (data) => {
    let { user } = await supabase.auth.signIn({
      email: data.email,
      password: data.password,
    });

    console.log({ login: user });
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
      <ButtonPrimary type="submit" title="Masuk" onClick={() => null} />
    </form>
  );
};
