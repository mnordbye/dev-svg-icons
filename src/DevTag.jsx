import * as React from 'react';

export const DevTag = React.forwardRef(function DevTag(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<path d=\"M3 12l9 9 9-9-9-9H7z\"/>\n<circle cx=\"9\" cy=\"12\" r=\"1.5\"/>" : "<path d=\"M3 12l9 9 9-9-9-9H7z\"/>\n<circle cx=\"9\" cy=\"12\" r=\"1.5\"/>";
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
