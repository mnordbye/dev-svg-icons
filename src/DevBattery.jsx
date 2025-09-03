import * as React from 'react';

export const DevBattery = React.forwardRef(function DevBattery(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<rect x=\"3\" y=\"7\" width=\"16\" height=\"10\" rx=\"2\"/>\n<rect x=\"19\" y=\"10\" width=\"2\" height=\"4\"/>" : "<rect x=\"3\" y=\"7\" width=\"16\" height=\"10\" rx=\"2\"/>\n<rect x=\"19\" y=\"10\" width=\"2\" height=\"4\"/>";
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
