import React, { forwardRef } from "react";

import { type SvgIconProps, Icon } from "../Icon";

export const Video = forwardRef<SVGSVGElement, SvgIconProps>(
  ({ color = "currentColor", ...props }: SvgIconProps, forwardedRef) => {
    return (
      <Icon {...props}>
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill={color}
          viewBox="0 0 24 24"
          {...props}
        >
          <path
            fillRule="evenodd"
            d="M14 7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V7Zm2 9.4 4.7 1.5A1 1 0 0 0 22 17V7a1 1 0 0 0-1.3-1L16 7.7v8.8Z"
            clipRule="evenodd"
            fill={color}
          />
        </svg>
      </Icon>
    );
  }
);
Video.displayName = "Video";

export default Video;
