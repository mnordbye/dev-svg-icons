import * as React from 'react';

export const DevVideo = React.forwardRef(function DevVideo(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<rect x=\"3\" y=\"6\" width=\"14\" height=\"12\" rx=\"2\"/>\n<path d=\"M17 10l4-2v8l-4-2z\"/>" : "<rect x=\"3\" y=\"6\" width=\"14\" height=\"12\" rx=\"2\"/>\n<path d=\"M17 10l4-2v8l-4-2z\"/>";
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
