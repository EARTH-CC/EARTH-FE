import { string, object } from "yup";

const ProcurementItem = object().shape({
  item_name: string().required("Required"),
  item_type: string().required("Required"),
  item_code: string().required("Required"),
  description: string().required("Required"),
  date: string().required("Required"),
});

export const initialPRItem = {
  item_name: "",
  item_type: "",
  item_code: "",
  description: "",
  date: "",
};
export default ProcurementItem;
