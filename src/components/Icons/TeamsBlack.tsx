import React, { forwardRef } from "react";

import { type SvgIconProps, Icon } from "../Icon";

export const TeamsBlack = forwardRef<SVGSVGElement, SvgIconProps>(
  ({ color = "currentColor", ...props }: SvgIconProps, forwardedRef) => {
    return (
      <Icon {...props}>
        <svg
          fill="none"
          height="inherit"
          ref={forwardedRef}
          viewBox="0 0 26 22"
          width="inherit"
          {...props}
        >
          <path
            d="M13.5378 0.644137V21.3562L0.759068 19.1143V2.88609L13.5378 0.644137Z"
            stroke="#111928"
            stroke-width="0.535714"
          />
          <path
            d="M16.5851 18.5132C16.004 18.5132 15.4677 18.3248 15.0323 18.0058L15.0323 9.1785H19.2165V15.8817C19.2165 17.335 18.0384 18.5132 16.5851 18.5132Z"
            stroke="#111928"
            stroke-width="0.535714"
          />
          <path
            d="M18.621 5.52287C18.621 6.64723 17.7095 7.55863 16.5852 7.55863C15.963 7.55863 15.4063 7.27942 15.0325 6.83851V4.20722C15.4063 3.76638 15.963 3.4871 16.5852 3.4871C17.7096 3.4871 18.621 4.39856 18.621 5.52287Z"
            stroke="#111928"
            stroke-width="0.535714"
          />
          <path
            d="M20.7058 16.4608V10.6722H25.1794L25.2232 14.6785C25.2308 15.3727 24.9604 16.0412 24.4721 16.5349C23.9838 17.0285 23.3184 17.3063 22.6239 17.3063C21.865 17.3063 21.1818 16.9809 20.7058 16.4608Z"
            stroke="#111928"
            stroke-width="0.535714"
          />
          <path
            d="M24.5874 7.05287C24.5874 8.16329 23.6872 9.06346 22.5768 9.06346C21.4664 9.06346 20.5662 8.16329 20.5662 7.05287C20.5662 5.94245 21.4664 5.04227 22.5768 5.04227C23.6872 5.04227 24.5874 5.94245 24.5874 7.05287Z"
            stroke="#111928"
            stroke-width="0.535714"
          />
          <path
            d="M9.77438 8.613H7.78818V14.416H6.58947V8.613H4.60327V7.4209H9.77431L9.77438 8.613Z"
            fill="#111928"
          />
        </svg>
      </Icon>
    );
  }
);
TeamsBlack.displayName = "TeamsBlack";

export default TeamsBlack;
