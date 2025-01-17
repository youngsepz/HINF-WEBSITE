import * as React from "react";
import { SVGProps } from "react";
export const TimelineSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 450 100"
    width={props.width || 1100}
    height={props.height || 450}
    fill="none"
    {...props}
  >
    <path
      stroke="#797979"
      d="M16 59.5v-29h78m0 0V7m0 23.5h59m0 0v29m0-29h81m0 0V7m0 23.5h82.5m0 0v28m0-28h64.75V7"
    />
    <circle cx={16.5} cy={30.5} r={8.5} fill="#0059FF" />
    <circle cx={94.5} cy={30.5} r={8.5} fill="#0059FF" />
    <circle cx={153.5} cy={30.5} r={8.5} fill="#0059FF" />
    <circle cx={234.5} cy={30.5} r={8.5} fill="#0059FF" />
    <circle cx={316.5} cy={31.5} r={8.5} fill="#0059FF" />
    <circle cx={381.5} cy={31.5} r={8.5} fill="#0059FF" />
    <text x="0" y="80" fill="white">
      1981
    </text>
    <text x="90" y="0" fill="white">
      1982
    </text>
    <text x="146" y="75" fill="white">
      2001
    </text>
    <text x="227" y="0" fill="white">
      2003
    </text>
    <text x="310" y="75" fill="white">
      2010
    </text>
    <text x="377" y="2" fill="white">
      2017
    </text>
  </svg>
);
