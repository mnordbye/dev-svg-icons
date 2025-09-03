import * as React from 'react';

export const DevClipboardList = React.forwardRef(function DevClipboardList(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<rect x=\"7\" y=\"3\" width=\"10\" height=\"4\" rx=\"1\"/>\n<rect x=\"5\" y=\"7\" width=\"14\" height=\"14\" rx=\"2\"/>\n<path d=\"M9 12h6\"/>\n<path d=\"M9 16h6\"/>" : "<rect x=\"7\" y=\"3\" width=\"10\" height=\"4\" rx=\"1\"/>\n<rect x=\"5\" y=\"7\" width=\"14\" height=\"14\" rx=\"2\"/>\n<path d=\"M9 12h6\"/>\n<path d=\"M9 16h6\"/>";
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
