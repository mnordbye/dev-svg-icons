import * as React from 'react';

export const DevDiff = React.forwardRef(function DevDiff(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<path d=\"M8 4v16\"/>\n<path d=\"M4 8h8\"/>\n<path d=\"M16 4v16\"/>\n<path d=\"M12 16h8\"/>" : "<path d=\"M8 4v16\"/>\n<path d=\"M4 8h8\"/>\n<path d=\"M16 4v16\"/>\n<path d=\"M12 16h8\"/>";
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
