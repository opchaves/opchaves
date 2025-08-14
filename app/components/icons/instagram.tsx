type IconProps = {
  width?: number;
  height?: number;
  viewBox?: string;
};

export default function InstagramIcon(props: IconProps) {
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
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="17" cy="7" r="1.2" fill="currentColor" />
    </svg>
  );
}
