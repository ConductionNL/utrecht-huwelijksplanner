import clsx from "clsx";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import "@utrecht/design-tokens/dist/index.css";
import "@utrecht/component-library-css/dist/index.css";
import "@utrecht/component-library-css/dist/html.css";
import { useEffect } from "react";
import "../styles/globals.scss";
import "./index.css";
import { MarriageOptionsProvider } from "../src/context/MarriageOptionsContext";
import { matomo } from "../src/matomo";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const ClassName = "leiden-theme";
  const OrganisationName = ClassName === "leiden-theme" ? "Gemeente Leiden" : "Gemeente Utrecht";

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_MATOMO_URL) {
      matomo({
        url: process.env.NEXT_PUBLIC_MATOMO_URL,
        siteId: process.env.NEXT_PUBLIC_MATOMO_SITE_ID,
      });
    }
    window.sessionStorage.setItem("NL_DESIGN_THEME_CLASSNAME", ClassName);
    window.sessionStorage.setItem("ORGANISATION_NAME", OrganisationName);
  }, []);

  return (
    <div className={clsx("example-debugging-disabled", ClassName)}>
      <MarriageOptionsProvider>
        <Component {...pageProps} />
      </MarriageOptionsProvider>
    </div>
  );
};

export default appWithTranslation(MyApp);
