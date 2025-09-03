import * as React from 'react';

export const DevVolume = React.forwardRef(function DevVolume(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<path d=\"M4 10v4h4l6 4V6l-6 4z\"/>\n<path d=\"M18 9a3 3 0 0 1 0 6\"/>\n<path d=\"M20 7a6 6 0 0 1 0 10\"/>" : "<path d=\"M4 10v4h4l6 4V6l-6 4z\"/>\n<path d=\"M18 9a3 3 0 0 1 0 6\"/>\n<path d=\"M20 7a6 6 0 0 1 0 10\"/>";
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
