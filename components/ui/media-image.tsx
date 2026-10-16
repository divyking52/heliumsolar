import Image, { type ImageProps } from "next/image";

/** Remote Helium assets — some PNGs fail the optimizer; serve originals. */
export function MediaImage(props: ImageProps) {
  return <Image {...props} unoptimized />;
}
