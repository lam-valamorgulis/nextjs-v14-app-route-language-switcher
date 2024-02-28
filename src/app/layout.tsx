import { ReactNode } from "react";
import "./styles.css";
import "@radix-ui/themes/styles.css";
import "./theme-config.css";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return children;
}
