import * as React from 'react';

export const DevMap = React.forwardRef(function DevMap(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<path d=\"M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z\"/>\n<path d=\"M9 4v14\"/>\n<path d=\"M15 6v14\"/>" : "<path d=\"M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z\"/>\n<path d=\"M9 4v14\"/>\n<path d=\"M15 6v14\"/>";
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
