import Script from "next/script";

// Microsoft Clarity project ID (Clarity → Settings → Overview). Public by
// design — it is printed in every page's HTML — so it lives in code, not env.
export const CLARITY_PROJECT_ID = "yytxuevwsv";

/**
 * Microsoft Clarity session recording and heatmaps.
 *
 * Production only, so local `npm run dev` sessions never pollute the
 * dashboard. The hostname check skips Vercel's *.vercel.app deployment URLs,
 * which headless bots load after every deploy. `afterInteractive` loads it
 * once the page is usable rather than delaying first paint.
 */
export default function Clarity() {
  if (process.env.NODE_ENV !== "production") return null;

  return (
    <Script id="microsoft-clarity" strategy="afterInteractive">
      {`/(^|\\.)tiashaaivista\\.com$/.test(location.hostname)&&(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_PROJECT_ID}");`}
    </Script>
  );
}
