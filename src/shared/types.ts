import type { FormField } from "@/scenes/formBuilder";
import type { JSX } from "react";
import type { FieldErrors, RegisterOptions } from "react-hook-form";

export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}

export type BaseField = {
  /** unique field name used by react-hook-form */
  name: string;
  /** label text (optional) */
  label?: string;
  /** placeholder */
  placeholder?: string;
  /** additional classes per field */
  className?: string;
  /** disable field */
  disabled?: boolean;
  /** react-hook-form validation rules for this field */
  rules?: RegisterOptions;
  /** custom error messages mapped by rule name */
  messages?: Partial<Record<string, string>>;
};

export type InputField = BaseField & {
  type: "input";
  /** input type */
  inputType?: React.HTMLInputTypeAttribute; // "text" | "email" | "number" | etc.
};

export type TextareaField = BaseField & {
  type: "textarea";
  rows?: number;
  cols?: number;
};

export type FormBuilderProps = {
  fields: FormField[];
  /** submit button label */
  submitLabel?: string;
  /** wrapper classes for the whole form */
  className?: string;
  /** default values */
  defaultValues?: Record<string, any>;
  /** handle valid submit in SPA mode */
  onValid?: (data: Record<string, any>) => void;
  /** handle invalid submit (optional) */
  onInvalid?: (errors: FieldErrors) => void;

  /** Native submit support (e.g., formsubmit.co) */
  action?: string;
  method?: React.HTMLAttributeAnchorTarget extends never ? "GET" | "POST" : "GET" | "POST";
  target?: React.HTMLAttributeAnchorTarget;
};