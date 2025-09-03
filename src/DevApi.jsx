import * as React from 'react';

export const DevApi = React.forwardRef(function DevApi(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<rect x=\"3\" y=\"5\" width=\"6\" height=\"14\" rx=\"1\"/>\n<rect x=\"15\" y=\"5\" width=\"6\" height=\"14\" rx=\"1\"/>\n<path d=\"M9 12h6\"/>" : "<rect x=\"3\" y=\"5\" width=\"6\" height=\"14\" rx=\"1\"/>\n<rect x=\"15\" y=\"5\" width=\"6\" height=\"14\" rx=\"1\"/>\n<path d=\"M9 12h6\"/>";
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
