import * as React from 'react';

export const DevLocation = React.forwardRef(function DevLocation(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<path d=\"M12 22s8-9 8-14a8 8 0 1 0-16 0c0 5 8 14 8 14z\"/>\n<circle cx=\"12\" cy=\"8\" r=\"3\"/>" : "<path d=\"M12 22s8-9 8-14a8 8 0 1 0-16 0c0 5 8 14 8 14z\"/>\n<circle cx=\"12\" cy=\"8\" r=\"3\"/>";
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
