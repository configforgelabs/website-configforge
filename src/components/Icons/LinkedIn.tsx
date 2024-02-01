import React, { forwardRef } from "react";

import { type SvgIconProps, Icon } from "../Icon";

export const LinkedIn = forwardRef<SVGSVGElement, SvgIconProps>(
  ({ color = "currentColor", ...props }: SvgIconProps, forwardedRef) => {
    return (
      <Icon {...props}>
        <svg
          fill={color}
          height="inherit"
          ref={forwardedRef}
          viewBox="0 0 24 24"
          width="inherit"
          {...props}
        >
          <g clipPath="url(#a)" fill={color}>
            <path d="M12.13 15.58H4.9a1.26 1.26 0 1 0 0 2.52h7.23a1.26 1.26 0 1 0 0-2.52ZM19.1 10.74H4.9a1.26 1.26 0 0 0 0 2.52h14.2a1.26 1.26 0 1 0 0-2.52ZM19.1 5.89H4.9a1.26 1.26 0 0 0 0 2.52h14.2a1.26 1.26 0 1 0 0-2.52Z" />
          </g>
          <defs>
            <clipPath id="a">
              <path d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </svg>
      </Icon>
    );
  }
);
LinkedIn.displayName = "LinkedIn";

export default LinkedIn;
