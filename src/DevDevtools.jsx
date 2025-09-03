import * as React from 'react';

export const DevDevtools = React.forwardRef(function DevDevtools(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<rect x=\"3\" y=\"4\" width=\"18\" height=\"14\" rx=\"2\"/>\n<path d=\"M7 8l3 3-3 3\"/>\n<path d=\"M17 14l-3-3 3-3\"/>" : "<rect x=\"3\" y=\"4\" width=\"18\" height=\"14\" rx=\"2\"/>\n<path d=\"M7 8l3 3-3 3\"/>\n<path d=\"M17 14l-3-3 3-3\"/>";
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
