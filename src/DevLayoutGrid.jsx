import * as React from 'react';

export const DevLayoutGrid = React.forwardRef(function DevLayoutGrid(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<rect x=\"3\" y=\"3\" width=\"8\" height=\"8\"/>\n<rect x=\"13\" y=\"3\" width=\"8\" height=\"8\"/>\n<rect x=\"3\" y=\"13\" width=\"8\" height=\"8\"/>\n<rect x=\"13\" y=\"13\" width=\"8\" height=\"8\"/>" : "<rect x=\"3\" y=\"3\" width=\"8\" height=\"8\"/>\n<rect x=\"13\" y=\"3\" width=\"8\" height=\"8\"/>\n<rect x=\"3\" y=\"13\" width=\"8\" height=\"8\"/>\n<rect x=\"13\" y=\"13\" width=\"8\" height=\"8\"/>";
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
