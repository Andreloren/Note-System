export type textVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "caption"
  | "button"
  | "overline"
  | "inherit"
  | undefined;

export type inputLabelColor =
  | "error"
  | "info"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | string;

export type textFieldColor =
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning"
  | undefined;

export type buttonColor =
  | "inherit"
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "warning"
  | undefined;

export type buttonVariant = "contained" | "outlined" | "text" | undefined;

export type buttonType = "submit" | "button" | "reset";

export type buttonSize = "small" | "medium" | "large" | undefined;

export type linkStyle = "none" | "always" | "hover" | undefined;
