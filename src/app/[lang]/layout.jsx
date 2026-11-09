/* Root layout for every /en and /bn page. */
import "@fontsource-variable/inter";
import "@fontsource-variable/noto-sans-bengali";
import "../../index.css";
import AppShell from "../../components/AppShell.jsx";
import { LANGS } from "../../paths.js";
import { GOOGLE_SITE_VERIFICATION, GTM_ID } from "../../site.js";

// Runs before first paint: applies the saved theme so there is no light/dark flash.
const THEME_SCRIPT = `try{var t=JSON.parse(localStorage.getItem("nutribase.theme"));if(t==="dark"||(t==="system"&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark");var a=JSON.parse(localStorage.getItem("nutribase.accent"));if(a&&a!=="fresh")document.documentElement.dataset.accent=a}catch(e){}`;

// Google tag. Not loaded on localhost, so development and test runs don't count as visits.
const ANALYTICS_SCRIPT = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date());if(!/^(localhost|127\\.0\\.0\\.1)$/.test(location.hostname)){var s=document.createElement("script");s.async=true;s.src="https://www.googletagmanager.com/gtm.js?id=${GTM_ID}";document.head.appendChild(s)}`;

export const dynamicParams = false;
export const generateStaticParams = () => LANGS.map(lang => ({ lang }));

export const viewport = { themeColor: "#ffffff" };
export const metadata = {
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] },
  ...(GOOGLE_SITE_VERIFICATION ? { verification: { google: GOOGLE_SITE_VERIFICATION } } : {}),
};

export default async function LangLayout({ children, params }) {
  const { lang } = await params;
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <script dangerouslySetInnerHTML={{ __html: ANALYTICS_SCRIPT }} />
      </head>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
