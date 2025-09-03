import * as React from 'react';

export const NavDownload = React.forwardRef(function NavDownload(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<path d=\"M12 4v12\"/>\n<path d=\"M7 11l5 5 5-5\"/>\n<path d=\"M4 20h16\"/>" : "<path d=\"M12 4v12\"/>\n<path d=\"M7 11l5 5 5-5\"/>\n<path d=\"M4 20h16\"/>";
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
