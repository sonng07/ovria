import { cn } from "@/lib/utils";

/** Wraps a raw app screen (no device bezel) in a slim dark phone frame.
 *  The screenshots already carry the iOS status bar / dynamic island, so
 *  the frame stays minimal — bezel + clipped rounded corners only, no
 *  added notch. Used inside the ForWorkers cards where the phone peeks up
 *  from the bottom edge. */
export function PhoneFrame({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[2.1rem] bg-ink p-[6px] shadow-[0_30px_60px_-32px_rgba(26,26,23,0.55)]",
        className,
      )}
    >
      <div className="overflow-hidden rounded-[1.7rem] bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="block w-full select-none"
          draggable={false}
        />
      </div>
    </div>
  );
}
