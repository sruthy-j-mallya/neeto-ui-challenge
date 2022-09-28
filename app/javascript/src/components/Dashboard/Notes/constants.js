import { buildSelectOptions } from "utils";
import * as yup from "yup";

export const INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  assignee: null,
  tags: [],
};

export const ASSIGNEES = buildSelectOptions([
  "Oliver Smith",
  "Ronald Richards",
  "Jacob Jones",
]);

export const TAGS = buildSelectOptions([
  "Getting Started",
  "Onboarding",
  "User Flow",
  "UX",
  "Bugs",
  "V2",
]);

export const VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  assignee: yup
    .object()
    .nullable()
    .shape({
      label: yup.string().oneOf(ASSIGNEES.map(assignee => assignee.label)),
      value: yup.string().oneOf(ASSIGNEES.map(assignee => assignee.value)),
    })
    .required("Assigned contact is required"),
  tags: yup
    .array()
    .of(
      yup
        .object()
        .nullable()
        .shape({
          label: yup.string().oneOf(TAGS.map(tag => tag.label)),
          value: yup.string().oneOf(TAGS.map(tag => tag.value)),
        })
    )
    .min(1, "At least 1 tag is required")
    .required("Tag is required"),
});

export const COLUMNS = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];

export const CARD_DATA = [
  {
    id: 1,
    title: "How to claim the warranty?",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    status: "Created",
    createdAt: "Wednesday, September 14, 2022 9:02 AM",
  },
  {
    id: 2,
    title: "How to claim the warranty?",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    status: "Drafted",
    createdAt: "Wednesday, September 14, 2022 9:02 AM",
  },
  {
    id: 3,
    title: "How to claim the warranty?",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    status: "Drafted",
    createdAt: "Wednesday, September 14, 2022 9:02 AM",
  },
  {
    id: 4,
    title: "How to claim the warranty?",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    status: "Drafted",
    createdAt: "Wednesday, September 14, 2022 9:02 AM",
  },
];
