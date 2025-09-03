import * as React from 'react';

export const DevWrench = React.forwardRef(function DevWrench(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<path d=\"M14 7a4 4 0 1 0-5 5l-6 6 2 2 6-6a4 4 0 0 0 3-7z\"/>" : "<path d=\"M14 7a4 4 0 1 0-5 5l-6 6 2 2 6-6a4 4 0 0 0 3-7z\"/>";
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
