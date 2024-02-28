"use client";
import { ComponentProps } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import type { AppPathnames } from "@/src/config";
import { Link } from "../../navigation";

import classnames from "classnames";

export default function NavigationLink<Pathname extends AppPathnames>({
  href,
  ...rest
}: ComponentProps<typeof Link<Pathname>>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;

  return (
    <Link
      className={classnames({
        "nav-link": true,
        "!text-zinc-900": isActive,
      })}
      href={href}
      {...rest}
    />
  );
}
