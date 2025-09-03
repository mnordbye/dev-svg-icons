import * as React from 'react';

export const DevTerminal = React.forwardRef(function DevTerminal(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<path d=\"M4 5h16v14H4z\"/>\n<path d=\"M6 9l3 3-3 3\"/>\n<path d=\"M12 15h6\"/>" : "<path d=\"M4 5h16v14H4z\"/>\n<path d=\"M6 9l3 3-3 3\"/>\n<path d=\"M12 15h6\"/>";
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
