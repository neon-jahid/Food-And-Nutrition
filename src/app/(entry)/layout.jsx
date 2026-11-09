/* Root layout for the bare "/" page, which only sends visitors to their language. */
import "@fontsource-variable/inter";
import "@fontsource-variable/noto-sans-bengali";
import "../../index.css";
import { DEFAULT_LANG } from "../../paths.js";

export const metadata = { icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] } };

export default function EntryLayout({ children }) {
  return (
    <html lang={DEFAULT_LANG} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
