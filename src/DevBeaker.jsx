import * as React from 'react';

export const DevBeaker = React.forwardRef(function DevBeaker(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<path d=\"M8 3h8\"/>\n<path d=\"M10 3v6l-5 8a2 2 0 0 0 1.7 3h10.6A2 2 0 0 0 19 17l-5-8V3\"/>\n<path d=\"M7 15h10\"/>" : "<path d=\"M8 3h8\"/>\n<path d=\"M10 3v6l-5 8a2 2 0 0 0 1.7 3h10.6A2 2 0 0 0 19 17l-5-8V3\"/>\n<path d=\"M7 15h10\"/>";
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
