import * as React from 'react';

export const DevCut = React.forwardRef(function DevCut(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<circle cx=\"6\" cy=\"18\" r=\"2\"/>\n<circle cx=\"6\" cy=\"6\" r=\"2\"/>\n<path d=\"M20 4L8 16\"/>\n<path d=\"M20 20L4 4\"/>" : "<circle cx=\"6\" cy=\"18\" r=\"2\"/>\n<circle cx=\"6\" cy=\"6\" r=\"2\"/>\n<path d=\"M20 4L8 16\"/>\n<path d=\"M20 20L4 4\"/>";
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
