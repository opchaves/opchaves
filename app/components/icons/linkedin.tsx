type IconProps = {
  width?: number;
  height?: number;
  viewBox?: string;
};

export default function LinkedInIcon(props: IconProps) {
  return (
    <svg
      width={props.width || "28"}
      height={props.height || "28"}
      viewBox={props.viewBox || "0 0 24 24"}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.033-1.85-3.033-1.85 0-2.134 1.445-2.134 2.938v5.664H9.355V9h3.413v1.561h.049c.477-.9 1.64-1.85 3.37-1.85 3.6 0 4.267 2.37 4.267 5.45v6.291zM5.337 7a2.06 2.06 0 1 1 .001-4.121A2.06 2.06 0 0 1 5.337 7zm1.777 13.452H3.56V9h3.554v11.452z"
        fill="currentColor"
      />
    </svg>
  );
}
