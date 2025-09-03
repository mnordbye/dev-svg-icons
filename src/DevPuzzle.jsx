import * as React from 'react';

export const DevPuzzle = React.forwardRef(function DevPuzzle(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<path d=\"M6 14h2a2 2 0 1 1 0 4H6v-2H4a2 2 0 1 1 0-4h2z\"/>\n<path d=\"M10 10V6h2a2 2 0 1 1 4 0h2v2h-2v2z\"/>" : "<path d=\"M6 14h2a2 2 0 1 1 0 4H6v-2H4a2 2 0 1 1 0-4h2z\"/>\n<path d=\"M10 10V6h2a2 2 0 1 1 4 0h2v2h-2v2z\"/>";
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
