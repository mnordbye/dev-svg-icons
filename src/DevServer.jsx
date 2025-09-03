import * as React from 'react';

export const DevServer = React.forwardRef(function DevServer(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<rect x=\"3\" y=\"5\" width=\"18\" height=\"6\" rx=\"2\"/>\n<rect x=\"3\" y=\"13\" width=\"18\" height=\"6\" rx=\"2\"/>\n<circle cx=\"7\" cy=\"8\" r=\"1\"/>\n<circle cx=\"7\" cy=\"16\" r=\"1\"/>" : "<rect x=\"3\" y=\"5\" width=\"18\" height=\"6\" rx=\"2\"/>\n<rect x=\"3\" y=\"13\" width=\"18\" height=\"6\" rx=\"2\"/>\n<circle cx=\"7\" cy=\"8\" r=\"1\"/>\n<circle cx=\"7\" cy=\"16\" r=\"1\"/>";
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
