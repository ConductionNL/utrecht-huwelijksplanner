/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import { footerData } from "../../data/footer-data";

export const PageFooterTemplate = () => {
  const data =
    typeof window !== "undefined" &&
    footerData.find(
      (data) => data.theme === window.sessionStorage.getItem("NL_DESIGN_THEME_CLASSNAME") ?? "utrecht-theme"
    );

  return (
    <>
      <address className="utrecht-page-footer__address utrecht-page-footer__address--reset-address">
        <h2 className="utrecht-heading-2 utrecht-heading-2--reset-h2">
          {typeof window !== "undefined" && window.sessionStorage.getItem("ORGANISATION_NAME")}
        </h2>

        {data &&
          data?.content.map((item: any, idx: number) => (
            <section>
              <h3 className="utrecht-heading-3 utrecht-heading-3--distanced">{item.title}</h3>
              <p className="utrecht-paragraph utrecht-paragraph--distanced">
                {item.title === "Telefoon" && (
                  <a href={`tel:+31${item.value}`} className="utrecht-link utrecht-link--telephone">
                    {item.value}
                  </a>
                )}
                {item.title !== "Telefoon" && !item.subItems && <span>{item.value}</span>}
                {item.title !== "Telefoon" &&
                  item.subItems &&
                  item.subItems.map((subItem: any, idx: number) => (
                    <>
                      <strong>{subItem.title}</strong>
                      <br />
                      {subItem.value}
                    </>
                  ))}
              </p>
            </section>
          ))}
      </address>
      <div className="utrecht-page-footer__navigation">
        <ul className="utrecht-link-list utrecht-link-list--chevron">
          <li className="utrecht-link-list__item">
            <a href="/contact/" className="utrecht-link">
              Meer contactinformatie
            </a>
          </li>
          <li className="utrecht-link-list__item">
            <a href="/over-deze-website" className="utrecht-link">
              Over deze website
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
