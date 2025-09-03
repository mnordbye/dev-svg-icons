import * as React from 'react';

export const DevHammer = React.forwardRef(function DevHammer(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<path d=\"M17 3l4 4-2 2-4-4z\"/>\n<path d=\"M11 9l-8 8 2 2 8-8z\"/>\n<path d=\"M13 7l4 4\"/>" : "<path d=\"M17 3l4 4-2 2-4-4z\"/>\n<path d=\"M11 9l-8 8 2 2 8-8z\"/>\n<path d=\"M13 7l4 4\"/>";
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
