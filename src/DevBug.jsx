import * as React from 'react';

export const DevBug = React.forwardRef(function DevBug(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<circle cx=\"12\" cy=\"12\" r=\"3\"/>\n<path d=\"M12 5v2\"/>\n<path d=\"M12 17v2\"/>\n<path d=\"M7 8l-2-2\"/>\n<path d=\"M17 8l2-2\"/>\n<path d=\"M7 16l-2 2\"/>\n<path d=\"M17 16l2 2\"/>\n<path d=\"M4 12h4\"/>\n<path d=\"M16 12h4\"/>" : "<circle cx=\"12\" cy=\"12\" r=\"3\"/>\n<path d=\"M12 5v2\"/>\n<path d=\"M12 17v2\"/>\n<path d=\"M7 8l-2-2\"/>\n<path d=\"M17 8l2-2\"/>\n<path d=\"M7 16l-2 2\"/>\n<path d=\"M17 16l2 2\"/>\n<path d=\"M4 12h4\"/>\n<path d=\"M16 12h4\"/>";
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
