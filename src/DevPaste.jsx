import * as React from 'react';

export const DevPaste = React.forwardRef(function DevPaste(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<rect x=\"8\" y=\"5\" width=\"12\" height=\"14\" rx=\"2\"/>\n<path d=\"M6 9V7a2 2 0 0 1 2-2h2\"/>\n<rect x=\"7\" y=\"3\" width=\"8\" height=\"4\" rx=\"1\"/>" : "<rect x=\"8\" y=\"5\" width=\"12\" height=\"14\" rx=\"2\"/>\n<path d=\"M6 9V7a2 2 0 0 1 2-2h2\"/>\n<rect x=\"7\" y=\"3\" width=\"8\" height=\"4\" rx=\"1\"/>";
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
