import * as React from 'react';

export const DevCloud = React.forwardRef(function DevCloud(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<path d=\"M7 18a4 4 0 1 1 1-7.9A5 5 0 0 1 19 12a3 3 0 0 1 0 6z\"/>" : "<path d=\"M7 18a4 4 0 1 1 1-7.9A5 5 0 0 1 19 12a3 3 0 0 1 0 6z\"/>";
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
