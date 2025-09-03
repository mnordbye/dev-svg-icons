import * as React from 'react';

export const DevGear = React.forwardRef(function DevGear(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<circle cx=\"12\" cy=\"12\" r=\"3\"/>\n<path d=\"M12 2v3\"/>\n<path d=\"M12 19v3\"/>\n<path d=\"M4.9 4.9l2.1 2.1\"/>\n<path d=\"M16.9 16.9l2.1 2.1\"/>\n<path d=\"M2 12h3\"/>\n<path d=\"M19 12h3\"/>\n<path d=\"M4.9 19.1l2.1-2.1\"/>\n<path d=\"M16.9 7.1l2.1-2.1\"/>" : "<circle cx=\"12\" cy=\"12\" r=\"3\"/>\n<path d=\"M12 2v3\"/>\n<path d=\"M12 19v3\"/>\n<path d=\"M4.9 4.9l2.1 2.1\"/>\n<path d=\"M16.9 16.9l2.1 2.1\"/>\n<path d=\"M2 12h3\"/>\n<path d=\"M19 12h3\"/>\n<path d=\"M4.9 19.1l2.1-2.1\"/>\n<path d=\"M16.9 7.1l2.1-2.1\"/>";
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
