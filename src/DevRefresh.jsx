import * as React from 'react';

export const DevRefresh = React.forwardRef(function DevRefresh(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<path d=\"M20 11a8 8 0 1 0-2.3 5.7\"/>\n<path d=\"M20 11v-6\"/>\n<path d=\"M20 11h-6\"/>" : "<path d=\"M20 11a8 8 0 1 0-2.3 5.7\"/>\n<path d=\"M20 11v-6\"/>\n<path d=\"M20 11h-6\"/>";
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
