import * as React from 'react';

export const DevProgress = React.forwardRef(function DevProgress(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<rect x=\"3\" y=\"10\" width=\"18\" height=\"4\" rx=\"2\"/>\n<rect x=\"3\" y=\"10\" width=\"10\" height=\"4\" rx=\"2\"/>" : "<rect x=\"3\" y=\"10\" width=\"18\" height=\"4\" rx=\"2\"/>\n<rect x=\"3\" y=\"10\" width=\"10\" height=\"4\" rx=\"2\"/>";
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
