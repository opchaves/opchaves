type IconProps = {
  width?: number;
  height?: number;
  viewBox?: string;
};

export default function YoutubeIcon(props: IconProps) {
  return (
    <svg
      width={props.width || "28"}
      height={props.height || "28"}
      viewBox={props.viewBox || "0 0 24 24"}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.12C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.391.566A2.994 2.994 0 0 0 .502 6.186C0 8.36 0 12 0 12s0 3.64.502 5.814a2.994 2.994 0 0 0 2.107 2.12C4.772 20.5 12 20.5 12 20.5s7.228 0 9.391-.566a2.994 2.994 0 0 0 2.107-2.12C24 15.64 24 12 24 12s0-3.64-.502-5.814zM9.545 16.02V7.98l7.273 4.02-7.273 4.02z"
        fill="currentColor"
      />
    </svg>
  );
}
