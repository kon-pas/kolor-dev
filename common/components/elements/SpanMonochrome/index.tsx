import { getColorBrightness } from "@utils";
import type { HexColor } from "@types";

interface SpanMonochromeProps {
  color: HexColor;
  children: React.ReactNode;
}

const SpanMonochrome: React.FC<SpanMonochromeProps> = ({ color, children }) => {
  return getColorBrightness(color) > 0.45 ? (
    <span>{children}</span>
  ) : (
    <span style={{ color: "white" }}>{children}</span>
  );
};

export default SpanMonochrome;
