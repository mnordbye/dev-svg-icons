import * as React from 'react';

export const DevKey = React.forwardRef(function DevKey(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<circle cx=\"8\" cy=\"14\" r=\"3\"/>\n<path d=\"M11 14h10\"/>\n<path d=\"M17 12v4\"/>" : "<circle cx=\"8\" cy=\"14\" r=\"3\"/>\n<path d=\"M11 14h10\"/>\n<path d=\"M17 12v4\"/>";
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
