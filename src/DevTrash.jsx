import * as React from 'react';

export const DevTrash = React.forwardRef(function DevTrash(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<path d=\"M4 7h16\"/>\n<path d=\"M6 7l1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13\"/>\n<path d=\"M9 7V4h6v3\"/>" : "<path d=\"M4 7h16\"/>\n<path d=\"M6 7l1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13\"/>\n<path d=\"M9 7V4h6v3\"/>";
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
