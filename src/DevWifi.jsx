import * as React from 'react';

export const DevWifi = React.forwardRef(function DevWifi(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<path d=\"M2 8a20 20 0 0 1 20 0\"/>\n<path d=\"M5 12a14 14 0 0 1 14 0\"/>\n<path d=\"M8 16a8 8 0 0 1 8 0\"/>\n<circle cx=\"12\" cy=\"19\" r=\"1\"/>" : "<path d=\"M2 8a20 20 0 0 1 20 0\"/>\n<path d=\"M5 12a14 14 0 0 1 14 0\"/>\n<path d=\"M8 16a8 8 0 0 1 8 0\"/>\n<circle cx=\"12\" cy=\"19\" r=\"1\"/>";
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
