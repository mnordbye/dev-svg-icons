import * as React from 'react';

export const DevFolderOpen = React.forwardRef(function DevFolderOpen(props, ref) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
  const isFilled = variant === 'filled';
  const inner = isFilled ? "<path d=\"M3 7h6l2 2h10v2H7l-4 8H20a2 2 0 0 0 2-2V9H11l-2-2H3z\"/>" : "<path d=\"M3 7h6l2 2h10v2H7l-4 8H20a2 2 0 0 0 2-2V9H11l-2-2H3z\"/>";
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
