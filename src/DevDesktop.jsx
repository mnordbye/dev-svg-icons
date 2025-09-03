import * as React from 'react';

export const DevDesktop = React.forwardRef(function DevDesktop(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<rect x=\"3\" y=\"4\" width=\"18\" height=\"12\" rx=\"2\"/>\n<path d=\"M8 20h8\"/>\n<path d=\"M12 16v4\"/>" : "<rect x=\"3\" y=\"4\" width=\"18\" height=\"12\" rx=\"2\"/>\n<path d=\"M8 20h8\"/>\n<path d=\"M12 16v4\"/>";
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
