import * as React from 'react';

export const DevRocket = React.forwardRef(function DevRocket(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<path d=\"M12 2c4 1 6 3 8 7-4 2-6 4-7 8-4-2-6-4-8-8 3-2 5-4 7-7z\"/>\n<path d=\"M9 15l-3 3\"/>\n<circle cx=\"14\" cy=\"8\" r=\"1.5\"/>" : "<path d=\"M12 2c4 1 6 3 8 7-4 2-6 4-7 8-4-2-6-4-8-8 3-2 5-4 7-7z\"/>\n<path d=\"M9 15l-3 3\"/>\n<circle cx=\"14\" cy=\"8\" r=\"1.5\"/>";
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
