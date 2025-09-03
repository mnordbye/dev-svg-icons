import * as React from 'react';

export const NavStar = React.forwardRef(function NavStar(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<path d=\"M12 3l2.8 5.7 6.2.9-4.5 4.3 1.1 6.1L12 17.8 6.4 20l1.1-6.1L3 9.6l6.2-.9z\"/>" : "<path d=\"M12 3l2.8 5.7 6.2.9-4.5 4.3 1.1 6.1L12 17.8 6.4 20l1.1-6.1L3 9.6l6.2-.9z\"/>";
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
