import Link from "next/link";
import Image from "next/image";
import logoDark from "../../../public/brand/logo-dark.png";
import logoLight from "../../../public/brand/logo-light.png";

export function Logo({
  className = "",
  onDark = true,
  priority = false,
}: {
  className?: string;
  onDark?: boolean;
  priority?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Connexxion Group — home"
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src={onDark ? logoDark : logoLight}
        alt="Connexxion Group"
        priority={priority}
        className="h-8 w-auto md:h-9"
        sizes="180px"
      />
    </Link>
  );
}
