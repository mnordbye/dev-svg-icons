import * as React from 'react';

export const DevAlert = React.forwardRef(function DevAlert(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<path d=\"M12 3l10 18H2L12 3z\"/>\n<path d=\"M12 10v5\"/>\n<path d=\"M12 18h.01\"/>" : "<path d=\"M12 3l10 18H2L12 3z\"/>\n<path d=\"M12 10v5\"/>\n<path d=\"M12 18h.01\"/>";
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
