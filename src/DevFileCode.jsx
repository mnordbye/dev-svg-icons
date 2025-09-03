import * as React from 'react';

export const DevFileCode = React.forwardRef(function DevFileCode(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<path d=\"M4 4h10l6 6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z\"/>\n<path d=\"M14 4v6h6\"/>\n<path d=\"M10 14l-3 3 3 3\"/>\n<path d=\"M14 20l3-3-3-3\"/>" : "<path d=\"M4 4h10l6 6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z\"/>\n<path d=\"M14 4v6h6\"/>\n<path d=\"M10 14l-3 3 3 3\"/>\n<path d=\"M14 20l3-3-3-3\"/>";
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
