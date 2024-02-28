/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import { HeaderDivider, LanguageToggleButtons, Logo } from "../index";

export const PageHeaderTemplate = () => (
  <>
    <Logo layoutClassName="utrecht-page-header__logo" variant="header" />

    <LanguageToggleButtons headingLevel={2} className="utrecht-page-header__alternate-lang-nav" />
    <HeaderDivider />
  </>
);
