import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const validationSchemaSignIn = Yup.object().shape({
  email: Yup.string()
    .required("Email tidak boleh kosong")
    .email("Email tidak valid"),
  password: Yup.string().required("Kata sandi tidak boleh kosong"),
});

const validationSchemaSignUp = Yup.object().shape({
  email: Yup.string()
    .required("Email tidak boleh kosong")
    .email("Email tidak valid"),
  password: Yup.string()
    .min(6, "Kata sandi minimal 6 karakter")
    .required("Kata sandi tidak boleh kosong"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Kata sandi tidak sama")
    .required("Konfirm kata sandi tidak boleh kosong"),
});

const formOptionsSignin = { resolver: yupResolver(validationSchemaSignIn) };

const formOptionsSignup = { resolver: yupResolver(validationSchemaSignUp) };

export { formOptionsSignin, formOptionsSignup };
