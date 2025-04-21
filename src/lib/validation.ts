
// Simple validation functions
export const isRequired = (value: string) => {
  return value.trim() !== "";
};

export const isEmail = (value: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};

export const isPhone = (value: string) => {
  // Allow empty or valid phone numbers
  if (!value.trim()) return true;
  const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  return phoneRegex.test(value);
};

export const minLength = (value: string, length: number) => {
  return value.trim().length >= length;
};

export const maxLength = (value: string, length: number) => {
  return value.trim().length <= length;
};
