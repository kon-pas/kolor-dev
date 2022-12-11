import { getColorBrightness } from "@utils";

interface SpanMonochromeProps {
  color: string;
  children: React.ReactNode;
  breakpoint?: number;
}

const SpanMonochrome: React.FC<SpanMonochromeProps> = (props) => {
  return getColorBrightness(props.color) > (props.breakpoint ?? 0.475) ? (
    <span>{props.children}</span>
  ) : (
    <span style={{ color: "white" }}>{props.children}</span>
  );
};

export default SpanMonochrome;
