import * as React from 'react';

export const DevEdit = React.forwardRef(function DevEdit(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<path d=\"M4 20l5-1 10-10a2 2 0 0 0-3-3L6 16l-2 4z\"/>\n<path d=\"M13 7l4 4\"/>" : "<path d=\"M4 20l5-1 10-10a2 2 0 0 0-3-3L6 16l-2 4z\"/>\n<path d=\"M13 7l4 4\"/>";
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
