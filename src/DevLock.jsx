import * as React from 'react';

export const DevLock = React.forwardRef(function DevLock(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<rect x=\"5\" y=\"11\" width=\"14\" height=\"10\" rx=\"2\"/>\n<path d=\"M8 11V8a4 4 0 0 1 8 0v3\"/>" : "<rect x=\"5\" y=\"11\" width=\"14\" height=\"10\" rx=\"2\"/>\n<path d=\"M8 11V8a4 4 0 0 1 8 0v3\"/>";
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
