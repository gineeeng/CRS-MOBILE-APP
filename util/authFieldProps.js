export const authFields = [
  { key: "name", props: { label: "name" } },
  { key: "email", props: { label: "Email" } },
  { key: "birthday", props: { label: "Birthdate", isEditable: false } },
  { key: "sex", props: { label: "Sex" } },
  {
    key: "address",
    props: {
      label: "Address",
      addressFormat: "(street, house no., barangay, municipality, country)",
      placeholder: "e.g. Arellano, 123, Pantal, Dagupan City, Philippines",
    },
  },
  { key: "contact_no", props: { label: "Contact Number", mode: "numeric" } },
  { key: "password", props: { label: "Password", isPasswordField: true } },
];
