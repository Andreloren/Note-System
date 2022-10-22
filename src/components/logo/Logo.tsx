import { SVGAttributes } from "react";
import * as React from "react";

import { LogoStyle } from "./LogoStyled";

// interface LogoProps extends SVGAttributes<HTMLOrSVGElement> {}

export function Logo() {
  return <LogoStyle src="../public/images/Bloco.png" alt="Bloco de Notas" />;
}
