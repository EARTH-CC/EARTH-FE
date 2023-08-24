import { string, object } from "yup";

const ProcurementItem = object().shape({
  name: string().required("Required"),
  type: string().required("Required"),
  description: string().required("Required"),
  qty: string().required("Required"),
  unit: string().required("Required"),
});

export const initialPRItem = {
  name: "",
  type: "",
  description: "",
  qty: "",
  unit: "",
};
export default ProcurementItem;
