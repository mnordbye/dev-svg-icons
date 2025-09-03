import * as React from 'react';

export const DevLayers = React.forwardRef(function DevLayers(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<path d=\"M12 3l9 5-9 5-9-5z\"/>\n<path d=\"M3 13l9 5 9-5\"/>\n<path d=\"M3 18l9 5 9-5\"/>" : "<path d=\"M12 3l9 5-9 5-9-5z\"/>\n<path d=\"M3 13l9 5 9-5\"/>\n<path d=\"M3 18l9 5 9-5\"/>";
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
