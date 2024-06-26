import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  Address,
  ButtonGroup,
  ButtonLink,
  DataNoTranslate,
  Document,
  Email,
  Heading1,
  Logo,
  Page,
  PageContent,
  PageContentMain,
  Paragraph,
  URLValue,
} from "../../../src/components";
import { exampleState } from "../../../src/data/huwelijksplanner-state";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["huwelijksplanner-step-0", "common"])),
  },
});

export default function ApplicantEmail() {
  const { t } = useTranslation("huwelijksplanner-step-0");

  const partner = exampleState.partners[0];

  return (
    <Email>
      <Document>
        <Head>
          <title>{`Melding Voorgenomen Huwelijk - ${process.env.NEXT_PUBLIC_ORGANISATION_NAME}`}</title>
        </Head>
        <Page>
          <PageContent>
            <PageContentMain>
              <Heading1>Melding Voorgenomen Huwelijk</Heading1>
              <Paragraph>
                Beste <DataNoTranslate>{partner["given-name"]}</DataNoTranslate>,
              </Paragraph>
              <Paragraph>
                Uw partner heeft zojuist succesvol ingelogd met DigiD. Om door te gaan met uw huwelijksaanvraag, klikt u
                op de onderstaande knop:
              </Paragraph>

              <ButtonGroup>
                <ButtonLink appearance="primary-action-button" href="/voorgenomen-huwelijk/getuigen">
                  Doorgaan huwelijksaanvraag
                </ButtonLink>
              </ButtonGroup>
              <Paragraph>Of kopieer het adres hieronder en open het in je browser:</Paragraph>
              <Paragraph>
                <URLValue>https://utrecht.nl/reservering</URLValue>
              </Paragraph>
              <Paragraph>Met vriendelijke groet,</Paragraph>
              <Address translate="no">
                {process.env.NEXT_PUBLIC_ORGANISATION_NAME}
                <br />
                Publiekszaken
                <br />
                Burgerzaken
                <br />
                Stadsplateau 1, 3521 AZ Utrecht
              </Address>

              <Paragraph>
                <Logo />
              </Paragraph>
            </PageContentMain>
          </PageContent>
        </Page>
      </Document>
    </Email>
  );
}
