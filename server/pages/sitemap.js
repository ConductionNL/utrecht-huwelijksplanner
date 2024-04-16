"use strict";
(() => {
var exports = {};
exports.id = 115;
exports.ids = [115];
exports.modules = {

/***/ 8047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ HuwelijksplannerStep0),
  "getServerSideProps": () => (/* reexport */ getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
// EXTERNAL MODULE: ./src/components/index.ts
var components = __webpack_require__(4277);
// EXTERNAL MODULE: ./src/components/huwelijksplanner/PageFooterTemplate.tsx + 1 modules
var PageFooterTemplate = __webpack_require__(6198);
// EXTERNAL MODULE: ./src/components/huwelijksplanner/PageHeaderTemplate.tsx
var PageHeaderTemplate = __webpack_require__(5428);
;// CONCATENATED MODULE: ./pages/sitemap.tsx







const getServerSideProps = async ({ locale  })=>({
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale, [
                "huwelijksplanner-step-0",
                "common"
            ])
        }
    });
function HuwelijksplannerStep0() {
    const { t  } = (0,external_next_i18next_.useTranslation)("huwelijksplanner-step-0");
    return /*#__PURE__*/ jsx_runtime.jsx(components.Surface, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.Document, {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx((head_default()), {
                    children: /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: `${t("huwelijksplanner-step-0:title")} - ${"Gemeente Leiden"}`
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.Page, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(components.PageHeader, {
                            children: /*#__PURE__*/ jsx_runtime.jsx(PageHeaderTemplate/* PageHeaderTemplate */.P, {})
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(components.PageContent, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.PageContentMain, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(components.Heading1, {
                                        children: "Huwelijksplanner sitemap voor development"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(components.ProcessSteps, {
                                        collapsible: false,
                                        steps: [
                                            {
                                                id: "eb18814b-eb1e-4295-866c-145f632f1c2d",
                                                marker: " ",
                                                status: "checked",
                                                title: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                    href: "/",
                                                    children: "Digitaal loket: Regel je huwelijk of geregistreerd partnerschap"
                                                }),
                                                meta: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                    href: "https://frameless.github.io/utrecht-huwelijksplanner-eend/",
                                                    target: "huwelijksplanner-design",
                                                    children: "design"
                                                })
                                            },
                                            {
                                                id: "cd6ac94e-76a0-4862-a523-895f8dc2f87b",
                                                marker: "1",
                                                status: "current",
                                                title: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                    href: "/trouw-opties",
                                                    children: "Stap 1: Kies wat je wil"
                                                }),
                                                meta: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                    href: "https://frameless.github.io/utrecht-huwelijksplanner-eend/01-trouwen-of-partnerschap.html",
                                                    target: "huwelijksplanner-design",
                                                    children: "design"
                                                })
                                            },
                                            {
                                                id: "72ebd58e-f5f4-46eb-8ff8-79bcf245eca8",
                                                marker: "2",
                                                title: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                    href: "/trouw-opties/huwelijk",
                                                    children: "Stap 2: Kies datum en tijd"
                                                }),
                                                meta: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                    href: "https://frameless.github.io/utrecht-huwelijksplanner-eend/02-filter-trouwen-plannen.html",
                                                    target: "huwelijksplanner-design",
                                                    children: "design"
                                                })
                                            },
                                            {
                                                id: "3ef8876f-1ad8-44b4-a5f0-ce118c54f209",
                                                marker: "3",
                                                title: "Stap 3: Inloggen en gegevens controleren",
                                                meta: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                    href: "https://frameless.github.io/utrecht-huwelijksplanner-eend/03-inloggen-digid.html",
                                                    target: "huwelijksplanner-design",
                                                    children: "design"
                                                }),
                                                steps: [
                                                    {
                                                        id: "3ef8876f-1ad8-44b4-a5f0-ce118c54f210",
                                                        title: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                            href: "/voorgenomen-huwelijk",
                                                            children: "Call to action: Inloggen"
                                                        }),
                                                        meta: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                            href: "https://frameless.github.io/utrecht-huwelijksplanner-eend/03-inloggen-digid.html",
                                                            target: "huwelijksplanner-design",
                                                            children: "design"
                                                        })
                                                    },
                                                    {
                                                        id: "3ef8876f-1ad8-44b4-a5f0-ce118c54f309",
                                                        title: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                            href: "/login",
                                                            "aria-label": "Stap 4: Inloggen en gegevens controleren — Inloggen met DigiD",
                                                            children: "Inloggen met DigiD"
                                                        }),
                                                        meta: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                            href: "https://frameless.github.io/utrecht-huwelijksplanner-eend/03b-inloggen-digid.html",
                                                            target: "huwelijksplanner-design",
                                                            children: "design"
                                                        })
                                                    },
                                                    {
                                                        id: "3ef8876f-1ad8-44b4-a5f0-ce118c55f209",
                                                        title: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                            href: "/persoonsgegevens/EC4D6AEF-0E23-4686-8778-71D2C02D7A38",
                                                            children: "Aanvullen persoonsgegevens"
                                                        }),
                                                        meta: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                            href: "https://frameless.github.io/utrecht-huwelijksplanner-eend/04-melding-voorgenomen-huwelijk-anne.html",
                                                            target: "huwelijksplanner-design",
                                                            children: "design"
                                                        })
                                                    }
                                                ]
                                            },
                                            {
                                                id: "cadfeb8d-0408-4efb-8c16-425c7e45eb47",
                                                marker: "4",
                                                title: "Stap 4: Partner gaat inloggen en gegevens controleren",
                                                // (
                                                //   <Link href="/voorgenomen-huwelijk/partner/uitnodigen">
                                                //     Stap 4: Partner gaat inloggen en gegevens controleren
                                                //   </Link>
                                                // ) as any,
                                                meta: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                    href: "https://frameless.github.io/utrecht-huwelijksplanner-eend/05-vraag-sanne.html",
                                                    target: "huwelijksplanner-design",
                                                    children: "design"
                                                }),
                                                steps: [
                                                    {
                                                        id: "cadfeb8d-0408-5efb-8c16-425c7e45eb47",
                                                        title: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                            children: [
                                                                "Partner logt in op zelfde device: ",
                                                                /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                                    href: "/voorgenomen-huwelijk/partner",
                                                                    "aria-label": "Stap 4: Inloggen en gegevens controleren — Nodig je partner uit",
                                                                    children: "Partner inloggen met DigiD"
                                                                })
                                                            ]
                                                        }),
                                                        meta: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                            href: "https://frameless.github.io/utrecht-huwelijksplanner-eend/05a-vraag-sanne.html",
                                                            target: "huwelijksplanner-design",
                                                            children: "design"
                                                        })
                                                    },
                                                    {
                                                        id: "cbdfeb8d-0408-4efb-8c16-425c7e45eb47",
                                                        title: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                            children: [
                                                                "Alternatief: ",
                                                                /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                                    href: "/voorgenomen-huwelijk/partner/uitnodigen",
                                                                    "aria-label": " Stap 4: Partner gaat inloggen en gegevens controleren — uitnodigen",
                                                                    children: "Partner uitnodigen"
                                                                })
                                                            ]
                                                        }),
                                                        meta: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                            href: "https://frameless.github.io/utrecht-huwelijksplanner-eend/05-vraag-sanne.html",
                                                            target: "huwelijksplanner-design",
                                                            children: "design"
                                                        })
                                                    },
                                                    {
                                                        id: "cadfeb8d-0408-4efb-8c16-425c7e66eb47",
                                                        title: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                            children: [
                                                                "Partner krijgt e-mail:",
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                                    href: "/voorgenomen-huwelijk/partner/invitation-email-partner",
                                                                    "aria-label": "Stap 4: Inloggen en gegevens controleren — Bekijk e-mail voor partner",
                                                                    children: "Bekijk e-mail voor partner"
                                                                })
                                                            ]
                                                        })
                                                    },
                                                    {
                                                        id: "cadfeb8d-0408-4aab-8c16-425c7e45eb47",
                                                        title: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                            href: "/voorgenomen-huwelijk/partner/succes",
                                                            "aria-label": "Stap 4: Partner gaat inloggen en gegevens controleren — wachten op bevestiging",
                                                            children: "Wachten op bevestiging van partner"
                                                        }),
                                                        meta: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                            href: "https://frameless.github.io/utrecht-huwelijksplanner-eend/06-wacht-op-sanne.html",
                                                            target: "huwelijksplanner-design",
                                                            children: "design"
                                                        })
                                                    },
                                                    {
                                                        id: "cadaeb8d-0408-4efb-8c16-425c7e45eb47",
                                                        title: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                            href: "/persoonsgegevens/67EEFC1C-A28A-43E7-8950-76C289E905C7",
                                                            "aria-label": "Stap 4: Inloggen en gegevens controleren — Gegevens controleren van partner",
                                                            children: "Gegevens controleren van partner"
                                                        }),
                                                        meta: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                            href: "https://frameless.github.io/utrecht-huwelijksplanner-eend/sanne-a-melding-voorgenomen-huwelijk.html",
                                                            target: "huwelijksplanner-design",
                                                            children: "design"
                                                        })
                                                    },
                                                    {
                                                        id: "cadfeb4d-0408-4efb-8c16-425c7e45eb47",
                                                        title: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                            href: "/persoonsgegevens/succes",
                                                            "aria-label": "Stap 4: Inloggen en gegevens controleren — Gegevens controleren van partner gelukt",
                                                            children: "Gegevens controleren van partner gelukt"
                                                        }),
                                                        meta: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                            href: "https://frameless.github.io/utrecht-huwelijksplanner-eend/sanne-a-klaar.html",
                                                            target: "huwelijksplanner-design",
                                                            children: "design"
                                                        })
                                                    },
                                                    {
                                                        id: "cadfeb8d-0608-4efb-8c16-425c7e45eb47",
                                                        title: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                            children: [
                                                                "Uitnodiger krijgt e-mail als partner heeft bevestigd:",
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                                    href: "/voorgenomen-huwelijk/partner/aanvrager-email",
                                                                    "aria-label": "Stap 4: Inloggen en gegevens controleren — Bekijk e-mail voor aanvrager",
                                                                    children: "Bekijk e-mail voor aanvrager"
                                                                })
                                                            ]
                                                        })
                                                    }
                                                ]
                                            },
                                            {
                                                id: "8ffdfe08-cce4-47d4-9e09-66003be91b63",
                                                marker: "5",
                                                title: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                    href: "/voorgenomen-huwelijk/getuigen",
                                                    children: "Stap 5: Getuigen uitnodigen"
                                                }),
                                                meta: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                    href: "https://frameless.github.io/utrecht-huwelijksplanner-eend/07a-getuigen.html",
                                                    target: "huwelijksplanner-design",
                                                    children: "design"
                                                }),
                                                steps: [
                                                    {
                                                        id: "8fadfe08-cce4-47d4-9e09-66003be91b63",
                                                        title: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                            href: "/voorgenomen-huwelijk/getuigen/succes",
                                                            children: "Gelukt! - Gemeente Gaat Checken - Je kunt daarna betalen"
                                                        }),
                                                        meta: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                            href: "https://frameless.github.io/utrecht-huwelijksplanner-eend/07a-anne-en-sanne.html",
                                                            target: "huwelijksplanner-design",
                                                            children: "design"
                                                        })
                                                    }
                                                ]
                                            },
                                            {
                                                id: "38d590d4-563d-4e5e-b822-d2eb598014c3",
                                                marker: "6",
                                                title: /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.Link, {
                                                    href: "/voorgenomen-huwelijk/checken",
                                                    children: [
                                                        "Stap 6: ",
                                                        "Gemeente Leiden",
                                                        " controleert"
                                                    ]
                                                }),
                                                meta: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                    href: "https://frameless.github.io/utrecht-huwelijksplanner-eend/08-check.html",
                                                    target: "huwelijksplanner-design",
                                                    children: "design"
                                                })
                                            },
                                            {
                                                id: "580e1369-ab6b-4fb0-bee8-73a5f3ecebd3",
                                                marker: "7",
                                                // <Link href="/voorgenomen-huwelijk/betalen">
                                                title: //   Stap 7: Betalen
                                                // </Link>
                                                "Stap 7: Betalen",
                                                meta: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                    href: "https://frameless.github.io/utrecht-huwelijksplanner-eend/09-betaal.html",
                                                    target: "huwelijksplanner-design",
                                                    children: "design"
                                                }),
                                                steps: [
                                                    {
                                                        id: "480e1369-ab6b-4fb0-bee8-73a5f3ecebd3",
                                                        title: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                            children: [
                                                                "Call to action: ",
                                                                /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                                    href: "/voorgenomen-huwelijk/checken",
                                                                    children: "Ga betalen"
                                                                }),
                                                                " (bij bevestiging Stap 6)"
                                                            ]
                                                        }),
                                                        meta: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                            href: "https://frameless.github.io/utrecht-huwelijksplanner-eend/08-check.html",
                                                            target: "huwelijksplanner-design",
                                                            children: "design"
                                                        })
                                                    },
                                                    {
                                                        id: "580e1379-ab6b-4fb0-bee8-73a5f3ecebd3",
                                                        title: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                            href: "/voorgenomen-huwelijk/betalen",
                                                            children: "Betalen — iDEAL"
                                                        }),
                                                        meta: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                            href: "https://frameless.github.io/utrecht-huwelijksplanner-eend/09-betaal.html",
                                                            target: "huwelijksplanner-design",
                                                            children: "design"
                                                        })
                                                    },
                                                    {
                                                        id: "580e1269-ab6b-4fb0-bee8-73a5f3ecebd3",
                                                        title: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                            children: [
                                                                "Feedback: ",
                                                                /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                                    href: "/voorgenomen-huwelijk/betalen/succes",
                                                                    children: "na Stap 7: Je datum is geregeld! — Betaling geslaagd - Overzicht"
                                                                })
                                                            ]
                                                        }),
                                                        meta: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                            href: "https://frameless.github.io/utrecht-huwelijksplanner-eend/10-betaling-geslaagd.html",
                                                            target: "huwelijksplanner-design",
                                                            children: "design"
                                                        })
                                                    },
                                                    {
                                                        id: "580e1369-bb6b-4fb0-bee8-73a5f3ecebd3",
                                                        title: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                            href: "/voorgenomen-huwelijk/betalen/succes",
                                                            children: "na Stap 7: Je datum is geregeld! — Betaling geslaagd - Overzicht"
                                                        }),
                                                        meta: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                            href: "https://frameless.github.io/utrecht-huwelijksplanner-eend/10-betaling-geslaagd.html",
                                                            target: "huwelijksplanner-design",
                                                            children: "design"
                                                        })
                                                    },
                                                    {
                                                        id: "580e1369-abeb-4fb0-bee8-73a5f3ecebd3",
                                                        title: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                            href: "/email-reservation-success",
                                                            children: "E-mail aan alle partners: Melding voorgenomen huwelijk geslaagd"
                                                        }),
                                                        meta: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                            href: "https://frameless.github.io/utrecht-huwelijksplanner-eend/mail-ambtenaar.html",
                                                            target: "huwelijksplanner-design",
                                                            children: "design"
                                                        })
                                                    },
                                                    {
                                                        id: "591e1369-ab6b-4fb0-bee8-73a5f3ecebd3",
                                                        title: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                            href: "/email-data-summary",
                                                            children: "E-mail aan de buitengewoon ambtenaar van de burgerlijke stand (BABS): Melding voorgenomen huwelijk geslaagd"
                                                        }),
                                                        meta: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                            href: "https://frameless.github.io/utrecht-huwelijksplanner-eend/mail-echtpaar.html",
                                                            target: "huwelijksplanner-design",
                                                            children: "design"
                                                        })
                                                    }
                                                ]
                                            },
                                            {
                                                id: "21e36a43-2927-4c28-b650-4fa0bf293e9e",
                                                marker: " ",
                                                title: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                    href: "/voorgenomen-huwelijk/betalen/succes",
                                                    children: "Trouwdatum is geregeld"
                                                }),
                                                meta: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                    href: "https://frameless.github.io/utrecht-huwelijksplanner-eend/07c-extra.html",
                                                    target: "huwelijksplanner-design",
                                                    children: "design"
                                                })
                                            },
                                            {
                                                id: "84e45eb2-418c-4a15-9f6a-37bde0b78be5",
                                                marker: "8",
                                                title: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                    href: "/extra",
                                                    children: "Stap 8: Kies je extra's"
                                                }),
                                                meta: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                    href: "https://frameless.github.io/utrecht-huwelijksplanner-eend/07c-extra.html",
                                                    target: "huwelijksplanner-design",
                                                    children: "design"
                                                })
                                            },
                                            {
                                                id: "415d2c3b-26da-4cfd-a225-2107ac84c6bc",
                                                marker: " ",
                                                title: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                    href: "/huwelijksplanner-cancel",
                                                    children: "Huwelijk annuleren"
                                                }),
                                                status: "warning",
                                                steps: [
                                                    {
                                                        id: "615d2c3b-26da-4cfd-a225-2107ac84c6bc",
                                                        title: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                            href: "/huwelijksplanner-cancelled",
                                                            children: "Feedback: Huwelijk geannuleerd"
                                                        }),
                                                        status: "error"
                                                    }
                                                ]
                                            }
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(components.PageFooter, {
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "todo-page-footer__content",
                                children: /*#__PURE__*/ jsx_runtime.jsx(PageFooterTemplate/* PageFooterTemplate */.O, {})
                            })
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2Fsitemap&absolutePagePath=private-next-pages%2Fsitemap.tsx&preferredRegion=!

        // Next.js Route Loader
        
        
    

/***/ }),

/***/ 5940:
/***/ ((module) => {

module.exports = require("@gemeente-denhaag/process-steps");

/***/ }),

/***/ 1353:
/***/ ((module) => {

module.exports = require("@utrecht/component-library-react");

/***/ }),

/***/ 6694:
/***/ ((module) => {

module.exports = require("@utrecht/web-component-library-stencil/loader");

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,146,277,707], () => (__webpack_exec__(8047)));
module.exports = __webpack_exports__;

})();