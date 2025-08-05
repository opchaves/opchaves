type IconProps = {
  width?: number;
  height?: number;
  viewBox?: string;
};

export default function XIcon(props: IconProps) {
  return (
    <svg
      width={props.width || "28"}
      height={props.height || "28"}
      viewBox={props.viewBox || "0 0 24 24"}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M17.53 3H21.25L13.62 10.87L22.5 21H16.08L10.77 14.68L4.77 21H1L9.08 12.56L0.5 3H7.08L11.88 8.74L17.53 3ZM16.38 19.13H18.19L6.72 4.76H4.78L16.38 19.13Z"
        fill="currentColor"
      />
    </svg>
  );
}
