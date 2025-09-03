import * as React from 'react';

export const NavHeart = React.forwardRef(function NavHeart(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<path d=\"M20.8 8.6c0 5.9-8.8 10.4-8.8 10.4S3.2 14.5 3.2 8.6A4.6 4.6 0 0 1 12 7.2a4.6 4.6 0 0 1 8.8 1.4z\"/>" : "<path d=\"M20.8 8.6c0 5.9-8.8 10.4-8.8 10.4S3.2 14.5 3.2 8.6A4.6 4.6 0 0 1 12 7.2a4.6 4.6 0 0 1 8.8 1.4z\"/>";
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
