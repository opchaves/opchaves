type IconProps = {
  width?: number;
  height?: number;
  viewBox?: string;
};

export default function EmailIcon(props: IconProps) {
  return (
    <svg
      width={props.width || "28"}
      height={props.height || "28"}
      viewBox={props.viewBox || "0 0 24 24"}
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M3 7l9 6 9-6"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
