import * as React from 'react';

export const DevZoomIn = React.forwardRef(function DevZoomIn(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<circle cx=\"11\" cy=\"11\" r=\"6\"/>\n<path d=\"M20 20l-3.5-3.5\"/>\n<path d=\"M11 8v6\"/>\n<path d=\"M8 11h6\"/>" : "<circle cx=\"11\" cy=\"11\" r=\"6\"/>\n<path d=\"M20 20l-3.5-3.5\"/>\n<path d=\"M11 8v6\"/>\n<path d=\"M8 11h6\"/>";
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
