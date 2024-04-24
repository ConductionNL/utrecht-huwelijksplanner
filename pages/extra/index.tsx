import { ButtonGroup, FormField, FormLabel } from "@utrecht/component-library-react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useContext, useId, useState } from "react";
import { useForm } from "react-hook-form";
import Skeleton from "react-loading-skeleton";
import {
  Button,
  Document,
  Fieldset,
  FieldsetLegend,
  Heading1,
  Heading2,
  HeadingGroup,
  Page,
  PageContent,
  PageContentMain,
  PageFooter,
  PageHeader,
  Paragraph,
  RadioButton2,
  ReservationCard,
  Surface,
} from "../../src/components";
import { PageFooterTemplate } from "../../src/components/huwelijksplanner/PageFooterTemplate";
import { PageHeaderTemplate } from "../../src/components/huwelijksplanner/PageHeaderTemplate";
import { MarriageOptionsContext } from "../../src/context/MarriageOptionsContext";
import { HuwelijkService } from "../../src/generated";
import { useSdgProductGetCollection } from "../../src/hooks/useSdgProductGetCollection";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "huwelijksplanner-step-5", "form"])),
  },
});

type FormData = {
  "marriage-certificate-kind": string;
};

export default function MultistepForm1() {
  const { t } = useTranslation(["common", "huwelijksplanner-step-5", "form"]);
  const [marriageOptions, setMarriageOptions] = useContext(MarriageOptionsContext);
  const { locale = "nl", push } = useRouter();
  const [certificate, productLoading] = useSdgProductGetCollection("trouwboekje");
  const { register, handleSubmit } = useForm<FormData>();
  const reservation = marriageOptions.reservation;
  const [saving, setSaving] = useState(false);

  const certificateRadioName = "marriage-certificate-kind";
  const noCertificateId = useId();

  const getCosts = (id: any) => {
    switch (id) {
      case "998206bc-d530-4291-89eb-02ebe21a7289":
        return parseFloat(marriageOptions.reservation?.["ceremony-price-amount"] ?? "0") + 32.5;
      case "22f40941-72ff-4825-87f4-1a67d6daf7f2":
        return parseFloat(marriageOptions.reservation?.["ceremony-price-amount"] ?? "0") + 32.5;
      case "c8c733e1-13c8-4d96-a388-de30d787f15b":
        return parseFloat(marriageOptions.reservation?.["ceremony-price-amount"] ?? "0") + 30;
      default:
        return parseFloat(marriageOptions.reservation?.["ceremony-price-amount"] ?? "0") + 0;
    }
  };

  const onMarriageCertificateKindSubmit = (formData: FormData) => {
    if (formData["marriage-certificate-kind"] === "none") {
      push("/voorgenomen-huwelijk/checken");
      return;
    }

    if (!reservation) return;

    setSaving(true);

    if (marriageOptions.id) {
      HuwelijkService.huwelijkGet({ id: marriageOptions.id.toString() }).then(() => {
        // Kosten
        HuwelijkService.huwelijkPostEigenschap({
          requestBody: {
            zaak: `https://api.huwelijksplanner.online/api/zrc/v1/zaken/${marriageOptions.id ?? ""}`,
            eigenschap:
              "https://api.huwelijksplanner.online/api/ztc/v1/eigenschappen/416de8b8-d5d1-4f44-9a1e-1846d552292c",
            waarde: `EUR ${getCosts(formData["marriage-certificate-kind"]).toString()}` ?? "",
          },
        }).finally(() => {
          setMarriageOptions({
            ...marriageOptions,
            reservation: {
              ...reservation,
              "ceremony-price-amount": getCosts(formData["marriage-certificate-kind"]).toString(),
            },
          });
          setSaving(false);
          push("/voorgenomen-huwelijk/checken");
        });
      });
    }
  };

  return (
    <Surface>
      <Document>
        <Head>
          <title>{`${t("huwelijksplanner-step-5:title")} -  ${process.env.NEXT_PUBLIC_ORGANISATION_NAME}`}</title>
        </Head>
        <Page>
          <PageHeader>
            <PageHeaderTemplate />
          </PageHeader>
          <PageContent>
            <PageContentMain>
              <form onSubmit={handleSubmit(onMarriageCertificateKindSubmit)}>
                <HeadingGroup>
                  <Heading1>{t("huwelijksplanner-step-5:heading-1")}</Heading1>
                  <Paragraph lead>Stap 3 — Meld je voorgenomen huwelijk</Paragraph>
                </HeadingGroup>
                {marriageOptions.reservation && (
                  <ReservationCard reservation={marriageOptions.reservation} locale={locale} />
                )}
                <section>
                  <Heading2>Kies je extra’s</Heading2>
                  <Paragraph>
                    Een trouwboekje hoort niet meer standaard bij een huwelijk. Je kunt het wel bestellen als extra -
                    dan is het een mooie aandenken aan jullie trouwdag.
                  </Paragraph>
                  {productLoading ? (
                    <Skeleton height={"250px"} />
                  ) : (
                    <Fieldset style={{ width: "fit-content" }}>
                      <FieldsetLegend>Trouwboekje</FieldsetLegend>
                      <Paragraph>
                        <Image src="/img/voorbeeld-trouwboekjes.jpg" width={600} height={385} alt="trouwboekjes" />
                      </Paragraph>
                      <FormField type="radio">
                        <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
                          <FormLabel htmlFor={noCertificateId} type="radio">
                            <RadioButton2
                              className="utrecht-form-field__input"
                              id={noCertificateId}
                              defaultChecked={true}
                              value={"none"}
                              {...register(certificateRadioName)}
                            />
                            Nee, wij willen geen trouwboekje
                          </FormLabel>
                        </Paragraph>
                      </FormField>
                      {certificate &&
                        certificate.vertalingen.map(
                          (vertaling: { id: string; specifiekeTekst: string; kosten: string }) => (
                            <FormField key={vertaling.id} type="radio">
                              <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
                                <FormLabel htmlFor={vertaling.id} type="radio">
                                  <RadioButton2
                                    className="utrecht-form-field__input"
                                    id={vertaling.id}
                                    value={vertaling.id}
                                    {...register(certificateRadioName)}
                                  />
                                  {vertaling.specifiekeTekst} ({vertaling.kosten})
                                </FormLabel>
                              </Paragraph>
                            </FormField>
                          )
                        )}
                    </Fieldset>
                  )}
                </section>
                <ButtonGroup>
                  <Button
                    disabled={saving || productLoading}
                    type="submit"
                    name="type"
                    appearance="primary-action-button"
                  >
                    Bevestigen
                  </Button>
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
