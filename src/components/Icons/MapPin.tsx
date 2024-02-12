import React, { forwardRef } from "react";

import { type SvgIconProps, Icon } from "../Icon";

export const MapPin = forwardRef<SVGSVGElement, SvgIconProps>(
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
            fill-rule="evenodd"
            d="M12 2a8 8 0 0 1 6.6 12.6l-.1.1-.6.7-5.1 6.2a1 1 0 0 1-1.6 0L6 15.3l-.3-.4-.2-.2v-.2A8 8 0 0 1 11.8 2Zm3 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            clip-rule="evenodd"
            fill="#6B7280"
          />
        </svg>
      </Icon>
    );
  }
);
MapPin.displayName = "MapPin";

export default MapPin;
