import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 140 28"
      width="140"
      height="28"
      {...props}
    >
      <g>
        <rect
          x="2"
          y="2"
          width="24"
          height="24"
          rx="6"
          className="fill-primary"
        />
        <text
          x="34"
          y="21"
          fontFamily="Inter, sans-serif"
          fontSize="20"
          fontWeight="bold"
          className="fill-foreground"
        >
          NovaAdmin
        </text>
      </g>
    </svg>
  );
}
