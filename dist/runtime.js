import * as React from 'react';
export function createIconComponent(name, outline, filled) {
  return React.forwardRef(function Icon(props, ref) {
    const { size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline', className, style, ...rest } = props;
    const isFilled = variant === 'filled';
    const inner = isFilled ? filled : outline;
    return React.createElement('svg', {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      role: 'img',
      fill: isFilled ? color : 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className,
      style,
      dangerouslySetInnerHTML: { __html: inner },
      ...rest
    });
  });
}
