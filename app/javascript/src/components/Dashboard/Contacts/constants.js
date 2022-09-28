import { buildSelectOptions } from "utils";
import * as yup from "yup";

const CONTACTS = [
  {
    user: {
      name: "Ronald Richards",
      role: "Owner",
    },
    email: "alber@borer.com",
    createdAt: "Feb 5, 2021",
  },
  {
    user: {
      name: "Jacob Jones",
      role: "Owner",
    },
    email: "alber@borer.com",
    createdAt: "Feb 5, 2021",
  },
];

export const DUMMY_DATA = Array(10).fill(CONTACTS).flat();

export const INITIAL_FORM_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: null,
};

export const ROLES = buildSelectOptions(["Owner", "Admin", "Developer"]);

export const VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email address is required"),
  role: yup
    .object()
    .nullable()
    .shape({
      label: yup.string().oneOf(ROLES.map(role => role.label)),
      value: yup.string().oneOf(ROLES.map(role => role.value)),
    })
    .required("Role is required"),
});
