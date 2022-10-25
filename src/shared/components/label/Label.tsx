import * as React from "react";
import { LabelStyled } from "./LabelStyled";

interface LabelProps {
  texto: string;
  htmlFor: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({ texto }) => {
  return (
    <>
      <LabelStyled htmlFor="">{texto}</LabelStyled>
    </>
  );
};
