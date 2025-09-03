import * as React from 'react';

export const DevUnlink = React.forwardRef(function DevUnlink(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<path d=\"M10 13a5 5 0 0 1 0-7 5 5 0 0 1 7 0\"/>\n<path d=\"M14 11a5 5 0 0 1 0 7 5 5 0 0 1-7 0\"/>\n<path d=\"M3 3l18 18\"/>" : "<path d=\"M10 13a5 5 0 0 1 0-7 5 5 0 0 1 7 0\"/>\n<path d=\"M14 11a5 5 0 0 1 0 7 5 5 0 0 1-7 0\"/>\n<path d=\"M3 3l18 18\"/>";
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
