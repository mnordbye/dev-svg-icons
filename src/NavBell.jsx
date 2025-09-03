import * as React from 'react';

export const NavBell = React.forwardRef(function NavBell(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<path d=\"M18 16v-4a6 6 0 1 0-12 0v4\"/>\n<path d=\"M5 16h14\"/>\n<path d=\"M10 20a2 2 0 0 0 4 0\"/>" : "<path d=\"M18 16v-4a6 6 0 1 0-12 0v4\"/>\n<path d=\"M5 16h14\"/>\n<path d=\"M10 20a2 2 0 0 0 4 0\"/>";
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
