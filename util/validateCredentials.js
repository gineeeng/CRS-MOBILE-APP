import { parse, isValid } from "date-fns";

function isValidDate(dateString) {
  const parsedDate = parse(dateString, "dd/MM/yyyy", new Date());
  return isValid(parsedDate);
}

export const validateSignupCredentials = (values, setErrors) => {
  const errors = {};
  const validDate = isValidDate(values.birthday);
  const validateInputs = {};
  Object.keys(values).forEach((key) => {
    validateInputs[key] = values[key].trim();
  });
  const arrAddress = values.address.split(", ");
  validateInputs.address = {
    street: arrAddress[0],
    houseNumber: arrAddress[1],
    barangay: arrAddress[2],
    municipality: arrAddress[3],
    country: arrAddress[4],
  };

  if (!values.name.trim()) {
    errors.name = "Name is required";
  }
  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Invalid email format";
  }
  if (!validDate) {
    errors.birthday = "Date is required";
  }
  if (!values.address.trim()) {
    errors.address = "Address is required";
  }
  if (!values.sex.trim()) {
    errors.sex = "Sex is required";
  }
  if (!values.contact_no.trim()) {
    errors.contactNum = "Contact Number is required";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters long";
  }

  setErrors(errors);
  return { valid: Object.keys(errors).length === 0, validateInputs };
};

export const authError = (errorCode) => {
  switch (errorCode) {
    case "auth/invalid-credential":
      return "Invalid login credential";
    case "auth/invalid-email":
      return "Invalid Email";
    case "auth/missing-password":
      return "Missing password";
    case "auth/email-already-in-use":
      return "Email already in use";
  }
};
