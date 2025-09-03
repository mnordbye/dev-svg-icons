import * as React from 'react';

export const DevCube = React.forwardRef(function DevCube(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<path d=\"M12 3l9 5-9 5-9-5 9-5z\"/>\n<path d=\"M3 8v8l9 5 9-5V8\"/>" : "<path d=\"M12 3l9 5-9 5-9-5 9-5z\"/>\n<path d=\"M3 8v8l9 5 9-5V8\"/>";
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
