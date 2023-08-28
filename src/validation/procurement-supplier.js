import { string, object } from "yup";

const ProcurementSupplier = object().shape({
  company_name: string().required("Required"),
  address: string().required("Required"),
  phone_no: string().required("Required"),
  mobile_no: string().required("Required"),
});

export const initialPRSupplier = {
  company_name: "",
  address: "",
  phone_no: "",
  mobile_no: "",
};
export default ProcurementSupplier;
