import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  Button,
  ButtonGroup,
  ButtonLink,
  Document,
  Heading1,
  Page,
  PageContent,
  PageContentMain,
  PageFooter,
  PageHeader,
  Paragraph,
  Surface,
} from "../src/components";
import { PageFooterTemplate } from "../src/components/huwelijksplanner/PageFooterTemplate";
import { PageHeaderTemplate } from "../src/components/huwelijksplanner/PageHeaderTemplate";
import { exampleState } from "../src/data/huwelijksplanner-state";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "huwelijksplanner-cancel", "form"])),
  },
});

export default function MultistepForm1() {
  const { t } = useTranslation(["common", "huwelijksplanner-cancel", "form"]);
  const data = { ...exampleState };

  if (!data.cancelable) {
    return (
      <Paragraph>
        Huwelijk kan niet on-line geannuleerd worden. Neem contact op met {process.env.NEXT_PUBLIC_ORGANISATION_NAME}.
      </Paragraph>
    );
  }
  return (
    <Surface>
      <Document>
        <Head>
          <title>{`${t("huwelijksplanner-cancel:title")} - ${process.env.NEXT_PUBLIC_ORGANISATION_NAME}`}</title>
        </Head>
        <Page>
          <PageHeader>
            <PageHeaderTemplate />
          </PageHeader>
          <PageContent>
            <PageContentMain>
              <form method="POST" action="/api/huwelijksplanner-cancel">
                <Heading1>{t("huwelijksplanner-cancel:heading-1")}</Heading1>
                <Paragraph>
                  De {process.env.NEXT_PUBLIC_ORGANISATION_NAME} brengt geen kosten in rekening: je krijgt het volledige
                  bedrag voor de reservering teruggestort op je rekening.
                </Paragraph>
                <Paragraph id="cancel-warning">Weet je zeker dat je het voorgenomen huwelijk wil annuleren?</Paragraph>
                <ButtonGroup>
                  <Button
                    type="submit"
                    appearance="primary-action-button"
                    name="cancel"
                    value="1"
                    aria-describedby="cancel-warning"
                  >
                    {t("huwelijksplanner-cancel:submit-button")}
                  </Button>
                  <ButtonLink href="/">{t("huwelijksplanner-cancel:back-button")}</ButtonLink>
                </ButtonGroup>
              </form>
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
