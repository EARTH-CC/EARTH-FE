import { string, object } from "yup";

const ProcurementItem = object().shape({
  name: string().required("Required"),
  brand_id: string().required("Required"),
  category_id: string().required("Required"),
  supplier_id: string().required("Required"),
  description: string().required("Required"),
});

export const initialPRItem = {
  name: "",
  brand_id: "",
  category_id: "",
  supplier_id: "",
  description: "",
};

export default ProcurementItem;
