import * as React from 'react';

export const DevScrewdriver = React.forwardRef(function DevScrewdriver(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<path d=\"M7 17l-4 4\"/>\n<path d=\"M9 15l6-6 2 2-6 6z\"/>\n<path d=\"M15 7l2-2 2 2-2 2z\"/>" : "<path d=\"M7 17l-4 4\"/>\n<path d=\"M9 15l6-6 2 2-6 6z\"/>\n<path d=\"M15 7l2-2 2 2-2 2z\"/>";
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
