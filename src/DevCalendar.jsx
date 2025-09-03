import * as React from 'react';

export const DevCalendar = React.forwardRef(function DevCalendar(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"2\"/>\n<path d=\"M8 3v4\"/>\n<path d=\"M16 3v4\"/>\n<path d=\"M3 10h18\"/>" : "<rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"2\"/>\n<path d=\"M8 3v4\"/>\n<path d=\"M16 3v4\"/>\n<path d=\"M3 10h18\"/>";
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
