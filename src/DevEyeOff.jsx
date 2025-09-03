import * as React from 'react';

export const DevEyeOff = React.forwardRef(function DevEyeOff(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<path d=\"M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z\"/>\n<circle cx=\"12\" cy=\"12\" r=\"3\"/>\n<path d=\"M3 3l18 18\"/>" : "<path d=\"M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z\"/>\n<circle cx=\"12\" cy=\"12\" r=\"3\"/>\n<path d=\"M3 3l18 18\"/>";
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
