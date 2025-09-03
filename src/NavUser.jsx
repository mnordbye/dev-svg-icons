import * as React from 'react';

export const NavUser = React.forwardRef(function NavUser(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<circle cx=\"12\" cy=\"8\" r=\"4\"/>\n<path d=\"M4 20a8 8 0 0 1 16 0\"/>" : "<circle cx=\"12\" cy=\"8\" r=\"4\"/>\n<path d=\"M4 20a8 8 0 0 1 16 0\"/>";
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
