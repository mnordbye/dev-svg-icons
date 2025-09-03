import * as React from 'react';

export const NavHome = React.forwardRef(function NavHome(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<path d=\"M3 11.5L12 4l9 7.5\"/>\n<path d=\"M5 10.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9.5\"/>\n<path d=\"M9 21v-6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6\"/>" : "<path d=\"M3 11.5L12 4l9 7.5\"/>\n<path d=\"M5 10.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9.5\"/>\n<path d=\"M9 21v-6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6\"/>";
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
