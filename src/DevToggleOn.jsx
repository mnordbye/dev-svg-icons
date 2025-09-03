import * as React from 'react';

export const DevToggleOn = React.forwardRef(function DevToggleOn(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<rect x=\"2\" y=\"8\" width=\"20\" height=\"8\" rx=\"4\"/>\n<circle cx=\"16\" cy=\"12\" r=\"3\"/>" : "<rect x=\"2\" y=\"8\" width=\"20\" height=\"8\" rx=\"4\"/>\n<circle cx=\"16\" cy=\"12\" r=\"3\"/>";
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
