import * as React from 'react';

export const DevSync = React.forwardRef(function DevSync(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<path d=\"M6 12a6 6 0 0 1 10-4\"/>\n<path d=\"M6 12H3\"/>\n<path d=\"M18 12a6 6 0 0 1-10 4\"/>\n<path d=\"M21 12h-3\"/>" : "<path d=\"M6 12a6 6 0 0 1 10-4\"/>\n<path d=\"M6 12H3\"/>\n<path d=\"M18 12a6 6 0 0 1-10 4\"/>\n<path d=\"M21 12h-3\"/>";
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
