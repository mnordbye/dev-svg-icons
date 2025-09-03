import * as React from 'react';

export const DevQuestion = React.forwardRef(function DevQuestion(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<circle cx=\"12\" cy=\"12\" r=\"9\"/>\n<path d=\"M9 9a3 3 0 1 1 5 2 3 3 0 0 0-2 3\"/>\n<path d=\"M12 17h.01\"/>" : "<circle cx=\"12\" cy=\"12\" r=\"9\"/>\n<path d=\"M9 9a3 3 0 1 1 5 2 3 3 0 0 0-2 3\"/>\n<path d=\"M12 17h.01\"/>";
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
