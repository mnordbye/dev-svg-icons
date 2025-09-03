import * as React from 'react';

export const NavUsers = React.forwardRef(function NavUsers(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<circle cx=\"9\" cy=\"8\" r=\"3.5\"/>\n<path d=\"M2 20a7 7 0 0 1 14 0\"/>\n<path d=\"M17 9a3.5 3.5 0 1 0 0-7\"/>\n<path d=\"M17 9c1.9 0 5 1.2 5 4v2\"/>" : "<circle cx=\"9\" cy=\"8\" r=\"3.5\"/>\n<path d=\"M2 20a7 7 0 0 1 14 0\"/>\n<path d=\"M17 9a3.5 3.5 0 1 0 0-7\"/>\n<path d=\"M17 9c1.9 0 5 1.2 5 4v2\"/>";
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
