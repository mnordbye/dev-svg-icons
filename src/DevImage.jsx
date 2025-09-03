import * as React from 'react';

export const DevImage = React.forwardRef(function DevImage(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\"/>\n<circle cx=\"8.5\" cy=\"10\" r=\"1.5\"/>\n<path d=\"M3 19l7-6 5 4 6-6\"/>" : "<rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\"/>\n<circle cx=\"8.5\" cy=\"10\" r=\"1.5\"/>\n<path d=\"M3 19l7-6 5 4 6-6\"/>";
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
