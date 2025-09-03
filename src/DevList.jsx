import * as React from 'react';

export const DevList = React.forwardRef(function DevList(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<path d=\"M8 6h12\"/>\n<path d=\"M8 12h12\"/>\n<path d=\"M8 18h12\"/>\n<circle cx=\"4\" cy=\"6\" r=\"1.2\"/>\n<circle cx=\"4\" cy=\"12\" r=\"1.2\"/>\n<circle cx=\"4\" cy=\"18\" r=\"1.2\"/>" : "<path d=\"M8 6h12\"/>\n<path d=\"M8 12h12\"/>\n<path d=\"M8 18h12\"/>\n<circle cx=\"4\" cy=\"6\" r=\"1.2\"/>\n<circle cx=\"4\" cy=\"12\" r=\"1.2\"/>\n<circle cx=\"4\" cy=\"18\" r=\"1.2\"/>";
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
