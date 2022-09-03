import getColorBrightness from '@utils/getColorBrightness';

interface SpanMonochromeProps {
  color: string,
  children: React.ReactNode
}

const SpanMonochrome = ({color, children}: SpanMonochromeProps) => {
  return getColorBrightness(color) > 0.4
    ? <span>{children}</span>
    : <span style={{ color: 'white' }}>{children}</span>
}

export default SpanMonochrome;