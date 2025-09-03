import * as React from 'react';

export const NavSettings = React.forwardRef(function NavSettings(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<path d=\"M4 7h16\"/>\n<path d=\"M4 12h16\"/>\n<path d=\"M4 17h16\"/>\n<circle cx=\"9\" cy=\"7\" r=\"2\"/>\n<circle cx=\"15\" cy=\"12\" r=\"2\"/>\n<circle cx=\"7\" cy=\"17\" r=\"2\"/>" : "<path d=\"M4 7h16\"/>\n<path d=\"M4 12h16\"/>\n<path d=\"M4 17h16\"/>\n<circle cx=\"9\" cy=\"7\" r=\"2\"/>\n<circle cx=\"15\" cy=\"12\" r=\"2\"/>\n<circle cx=\"7\" cy=\"17\" r=\"2\"/>";
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
