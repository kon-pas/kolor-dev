import styles from "./TextGradiented.module.scss";

import type { GradientHue, EightDirections } from "@types";

interface TextGradientedProps {
  colors: GradientHue;
  children: string;
  to?: EightDirections;
}

const TextGradiented: React.FC<TextGradientedProps> = ({
  children: text,
  colors,
  to: direction,
}) => {
  return (
    <span
      className={styles["text-gradiented"]}
      style={{
        backgroundImage: `linear-gradient(to ${
          direction ?? "right"
        }, ${colors.join(", ")})`,
      }}
    >
      {text}
    </span>
  );
};

export default TextGradiented;
