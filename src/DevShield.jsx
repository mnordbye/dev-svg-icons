import * as React from 'react';

export const DevShield = React.forwardRef(function DevShield(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<path d=\"M12 3l8 3v6c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V6z\"/>" : "<path d=\"M12 3l8 3v6c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V6z\"/>";
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
