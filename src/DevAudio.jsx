import * as React from 'react';

export const DevAudio = React.forwardRef(function DevAudio(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<path d=\"M4 12a8 8 0 0 1 16 0\"/>\n<rect x=\"4\" y=\"12\" width=\"4\" height=\"6\" rx=\"1\"/>\n<rect x=\"16\" y=\"12\" width=\"4\" height=\"6\" rx=\"1\"/>\n<path d=\"M8 15v2\"/>\n<path d=\"M16 15v2\"/>" : "<path d=\"M4 12a8 8 0 0 1 16 0\"/>\n<rect x=\"4\" y=\"12\" width=\"4\" height=\"6\" rx=\"1\"/>\n<rect x=\"16\" y=\"12\" width=\"4\" height=\"6\" rx=\"1\"/>\n<path d=\"M8 15v2\"/>\n<path d=\"M16 15v2\"/>";
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="img"
      fill={isFilled ? color : 'none'}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html: inner }}
      {...rest}
    />
  );
});
