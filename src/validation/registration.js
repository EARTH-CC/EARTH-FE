import { string, object } from "yup";

const Registration = object().shape({
  username: string().required("Required"),
  password: string().required("Required"),
  firstname: string().required("Required"),
  lastname: string().required("Required"),
  role: string().required("Required"),
});

export const initialRegistration = {
  username: "",
  password: "",
  firstname: "",
  lastname: "",
  role: "",
};
export default Registration;
