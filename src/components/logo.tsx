import * as React from "react";
import clsx from "clsx";

interface LogoProps {
  variant?: "header" | "footer" | "navbar";
  onClick?: () => any;
  layoutClassName?: string;
}

export const Logo: React.FC<LogoProps> = ({ onClick, layoutClassName, variant = "header" }) => {
  return (
    <div
      className={clsx("utrecht-logo__container", `utrecht-logo__container-${[variant]}`, [
        onClick && "utrecht-logo__container-clickable",
        layoutClassName && layoutClassName,
      ])}
      {...{ onClick }}
    />
  );
};
