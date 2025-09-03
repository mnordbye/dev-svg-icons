import * as React from 'react';

export const DevTablet = React.forwardRef(function DevTablet(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<rect x=\"5\" y=\"3\" width=\"14\" height=\"18\" rx=\"2\"/>\n<circle cx=\"12\" cy=\"17\" r=\"1\"/>" : "<rect x=\"5\" y=\"3\" width=\"14\" height=\"18\" rx=\"2\"/>\n<circle cx=\"12\" cy=\"17\" r=\"1\"/>";
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
