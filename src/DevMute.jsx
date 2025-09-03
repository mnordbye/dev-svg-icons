import * as React from 'react';

export const DevMute = React.forwardRef(function DevMute(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<path d=\"M4 10v4h4l6 4V6l-6 4z\"/>\n<path d=\"M16 8l4 8\"/>\n<path d=\"M20 8l-4 8\"/>" : "<path d=\"M4 10v4h4l6 4V6l-6 4z\"/>\n<path d=\"M16 8l4 8\"/>\n<path d=\"M20 8l-4 8\"/>";
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
