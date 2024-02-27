/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import { HeaderDivider, LanguageToggleButtons, Link, Logo, Paragraph, UtrechtLogo } from "../index";

export const PageHeaderTemplate = () => (
  <>
    {typeof window !== "undefined" && window.sessionStorage.getItem("NL_DESIGN_THEME_CLASSNAME") === "utrecht-theme" ? (
      <Paragraph className="utrecht-page-header__logo">
        <Link href="/" sameURL="no-link" boxContent>
          <UtrechtLogo />
        </Link>
      </Paragraph>
    ) : (
      <Logo layoutClassName="utrecht-page-header__logo" variant="header" />
    )}

    <LanguageToggleButtons headingLevel={2} className="utrecht-page-header__alternate-lang-nav" />
    <HeaderDivider />
  </>
);
