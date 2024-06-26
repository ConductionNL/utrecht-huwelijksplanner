import { Button } from "@utrecht/component-library-react";
import { UtrechtDigidButton, UtrechtIconArrow } from "@utrecht/web-component-library-react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useContext } from "react";
import {
  Aside,
  BackLink,
  ButtonGroup,
  ButtonLink,
  Document,
  Heading1,
  Heading2,
  HeadingGroup,
  Page,
  PageContent,
  PageContentMain,
  PageFooter,
  PageHeader,
  Paragraph,
  ReservationCard,
  SkipLink,
  Surface,
  Link as UtrechtLink,
} from "../../src/components";
import { PageFooterTemplate } from "../../src/components/huwelijksplanner/PageFooterTemplate";
import { PageHeaderTemplate } from "../../src/components/huwelijksplanner/PageHeaderTemplate";
import { MarriageOptionsContext } from "../../src/context/MarriageOptionsContext";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "huwelijksplanner-step-3"])),
  },
});

export default function MultistepForm1() {
  const { t } = useTranslation(["common", "huwelijksplanner-step-3"]);
  const { push, locale = "nl" } = useRouter();
  const [marriageOptions, setMarriageOptions] = useContext(MarriageOptionsContext);

  // FIXME: get slug from state
  const slug = "huwelijk";
  const productName = "Eenvoudig trouwen";

  return (
    <Surface>
      <Document>
        <Head>
          <title>{`${t("common:step-n", { n: 3 })}: ${t("huwelijksplanner-step-3:eenvoudig-trouwen")} - ${
            process.env.NEXT_PUBLIC_ORGANISATION_NAME
          }`}</title>
        </Head>
        <SkipLink href="#main">{t("common:skip-link-main")}</SkipLink>
        <Page>
          <PageHeader>
            <PageHeaderTemplate />
          </PageHeader>
          <PageContent>
            <BackLink href={`/trouw-opties/${slug}`}>← Terug</BackLink>
            <PageContentMain>
              <HeadingGroup>
                <Heading1>{productName}</Heading1>
                <Paragraph lead>
                  {t("common:step-n-of-m", { n: 3, m: 5 })} — {t("huwelijksplanner-step-3:title")}
                </Paragraph>
              </HeadingGroup>
              {marriageOptions?.reservation && (
                <ReservationCard reservation={marriageOptions.reservation} locale={locale} />
              )}
              <section>
                <Heading2>Meld je voorgenomen huwelijk</Heading2>
                <Paragraph>
                  Je logt hier in met DigiD. Zo geef je door aan de gemeente dat je wil gaan trouwen.
                </Paragraph>
                <Paragraph>Na deze stap vragen we ook aan je partner om in te loggen met DigiD.</Paragraph>
                <ButtonGroup>
                  <UtrechtDigidButton>
                    {/* <ButtonLink appearance="primary-action-button" href="/login">
                      Inloggen met DigiD <UtrechtIconArrow />
                    </ButtonLink> */}
                    <Button
                      onClick={() => {
                        setMarriageOptions({
                          ...marriageOptions,
                          id: "",
                        });
                        push("/gateway-login?redirectUrl=/persoonsgegevens/persoon");
                      }}
                    >
                      Testomgeving login
                    </Button>
                  </UtrechtDigidButton>
                </ButtonGroup>
              </section>
              <Aside>
                <Heading2>Meer informatie</Heading2>
                <Paragraph>
                  <UtrechtLink href="https://digid.nl/aanvragen" external target="_blank">
                    DigiD aanvragen
                  </UtrechtLink>
                </Paragraph>
              </Aside>
            </PageContentMain>
          </PageContent>
          <PageFooter>
            <PageFooterTemplate />
          </PageFooter>
        </Page>
      </Document>
    </Surface>
  );
}
