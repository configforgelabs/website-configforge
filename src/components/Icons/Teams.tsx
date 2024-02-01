import React, { forwardRef } from "react";

import { type SvgIconProps, Icon } from "../Icon";

export const Teams = forwardRef<SVGSVGElement, SvgIconProps>(
  ({ color = "currentColor", ...props }: SvgIconProps, forwardedRef) => {
    return (
      <Icon {...props}>
        <svg
          fill={color}
          height="inherit"
          ref={forwardedRef}
          viewBox="0 0 26 22"
          width="inherit"
          {...props}
        >
          <path
            d="M13.5471 0.643954V21.3561L0.768345 19.1141V2.8859L13.5471 0.643954Z"
            stroke="white"
            stroke-width="0.535714"
          />
          <path
            d="M16.5943 18.5131C16.0133 18.5131 15.477 18.3247 15.0416 18.0057L15.0415 9.17844H19.2258V15.8816C19.2258 17.3349 18.0476 18.5131 16.5943 18.5131Z"
            stroke="white"
            stroke-width="0.535714"
          />
          <path
            d="M18.6303 5.52256C18.6303 6.64693 17.7188 7.55833 16.5945 7.55833C15.9723 7.55833 15.4156 7.27911 15.0418 6.83821V4.20691C15.4156 3.76607 15.9723 3.48679 16.5945 3.48679C17.7189 3.48679 18.6303 4.39826 18.6303 5.52256Z"
            stroke="white"
            stroke-width="0.535714"
          />
          <path
            d="M20.7151 16.4608V10.6721H25.1887L25.2325 14.6784C25.2401 15.3727 24.9696 16.0412 24.4814 16.5348C23.9931 17.0284 23.3276 17.3062 22.6332 17.3062C21.8743 17.3062 21.191 16.9808 20.7151 16.4608Z"
            stroke="white"
            stroke-width="0.535714"
          />
          <path
            d="M24.5967 7.05293C24.5967 8.16335 23.6965 9.06352 22.5861 9.06352C21.4756 9.06352 20.5755 8.16335 20.5755 7.05293C20.5755 5.94251 21.4756 5.04233 22.5861 5.04233C23.6965 5.04233 24.5967 5.94251 24.5967 7.05293Z"
            stroke="white"
            stroke-width="0.535714"
          />
          <path
            d="M9.78366 8.61288H7.79746V14.4159H6.59875V8.61288H4.61255V7.42078H9.78358L9.78366 8.61288Z"
            fill="white"
          />
        </svg>
      </Icon>
    );
  }
);
Teams.displayName = "Teams";

export default Teams;
