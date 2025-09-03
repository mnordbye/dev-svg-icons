import * as React from 'react';

export const DevDatabase = React.forwardRef(function DevDatabase(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<ellipse cx=\"12\" cy=\"6\" rx=\"7\" ry=\"3\"/>\n<path d=\"M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6\"/>\n<path d=\"M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6\"/>" : "<ellipse cx=\"12\" cy=\"6\" rx=\"7\" ry=\"3\"/>\n<path d=\"M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6\"/>\n<path d=\"M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6\"/>";
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
