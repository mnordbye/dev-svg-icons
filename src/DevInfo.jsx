import * as React from 'react';

export const DevInfo = React.forwardRef(function DevInfo(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<circle cx=\"12\" cy=\"12\" r=\"9\"/>\n<path d=\"M12 10v6\"/>\n<path d=\"M12 7h.01\"/>" : "<circle cx=\"12\" cy=\"12\" r=\"9\"/>\n<path d=\"M12 10v6\"/>\n<path d=\"M12 7h.01\"/>";
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
