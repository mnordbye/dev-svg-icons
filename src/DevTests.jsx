import * as React from 'react';

export const DevTests = React.forwardRef(function DevTests(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<rect x=\"4\" y=\"3\" width=\"16\" height=\"10\" rx=\"2\"/>\n<path d=\"M7 7h10\"/>\n<path d=\"M7 10h6\"/>\n<path d=\"M6 17l2 2 4-4\"/>" : "<rect x=\"4\" y=\"3\" width=\"16\" height=\"10\" rx=\"2\"/>\n<path d=\"M7 7h10\"/>\n<path d=\"M7 10h6\"/>\n<path d=\"M6 17l2 2 4-4\"/>";
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
