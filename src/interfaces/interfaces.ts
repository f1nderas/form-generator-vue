export interface IFormField {
  name: string;
  label: string;
  type: "input" | "select" | "checkbox" | "textarea";
  attributes?: Record<string, any>;
  options?: { value: string; label: string }[];
}
