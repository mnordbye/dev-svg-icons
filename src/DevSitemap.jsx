import * as React from 'react';

export const DevSitemap = React.forwardRef(function DevSitemap(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<rect x=\"10\" y=\"3\" width=\"4\" height=\"4\" rx=\"1\"/>\n<rect x=\"4\" y=\"17\" width=\"4\" height=\"4\" rx=\"1\"/>\n<rect x=\"16\" y=\"17\" width=\"4\" height=\"4\" rx=\"1\"/>\n<path d=\"M12 7v6\"/>\n<path d=\"M12 13H6v4\"/>\n<path d=\"M12 13h6v4\"/>" : "<rect x=\"10\" y=\"3\" width=\"4\" height=\"4\" rx=\"1\"/>\n<rect x=\"4\" y=\"17\" width=\"4\" height=\"4\" rx=\"1\"/>\n<rect x=\"16\" y=\"17\" width=\"4\" height=\"4\" rx=\"1\"/>\n<path d=\"M12 7v6\"/>\n<path d=\"M12 13H6v4\"/>\n<path d=\"M12 13h6v4\"/>";
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
