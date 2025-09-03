import * as React from 'react';

export const DevMergeArrows = React.forwardRef(function DevMergeArrows(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<path d=\"M7 7v5a5 5 0 0 0 5 5h5\"/>\n<path d=\"M3 7h4v4\"/>\n<path d=\"M17 17v4h4\"/>" : "<path d=\"M7 7v5a5 5 0 0 0 5 5h5\"/>\n<path d=\"M3 7h4v4\"/>\n<path d=\"M17 17v4h4\"/>";
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
