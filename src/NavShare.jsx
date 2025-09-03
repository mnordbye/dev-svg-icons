import * as React from 'react';

export const NavShare = React.forwardRef(function NavShare(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<path d=\"M12 16V4\"/>\n<path d=\"M8 8l4-4 4 4\"/>\n<path d=\"M5 12v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7\"/>" : "<path d=\"M12 16V4\"/>\n<path d=\"M8 8l4-4 4 4\"/>\n<path d=\"M5 12v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7\"/>";
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
