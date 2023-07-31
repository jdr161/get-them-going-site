export default function DownArrowIcon({
  className,
  width,
  height,
  color
}: {
  className?: string
  width: string
  height: string
  color: string
}) {
  return (
    // <?xml version="1.0" encoding="utf-8"?>

    // <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
    <svg
      width={width}
      height={height}
      viewBox="0 0 1024 1024"
      className={'icon ' + className}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
        fill={color}
      />
    </svg>
  )
}
