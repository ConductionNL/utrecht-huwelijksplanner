"use strict";
exports.id = 850;
exports.ids = [850];
exports.modules = {

/***/ 8885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ ApiError)
/* harmony export */ });
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ class ApiError extends Error {
    constructor(request, response, message){
        super(message);
        this.name = "ApiError";
        this.url = response.url;
        this.status = response.status;
        this.statusText = response.statusText;
        this.body = response.body;
        this.request = request;
    }
}


/***/ }),

/***/ 5202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ CancelablePromise)
/* harmony export */ });
/* unused harmony export CancelError */
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ class CancelError extends Error {
    constructor(message){
        super(message);
        this.name = "CancelError";
    }
    get isCancelled() {
        return true;
    }
}
let prop;
class CancelablePromise {
    static{
        prop = Symbol.toStringTag;
    }
    constructor(executor){
        this._isResolved = false;
        this._isRejected = false;
        this._isCancelled = false;
        this._cancelHandlers = [];
        this._promise = new Promise((resolve, reject)=>{
            this._resolve = resolve;
            this._reject = reject;
            const onResolve = (value)=>{
                if (this._isResolved || this._isRejected || this._isCancelled) {
                    return;
                }
                this._isResolved = true;
                this._resolve?.(value);
            };
            const onReject = (reason)=>{
                if (this._isResolved || this._isRejected || this._isCancelled) {
                    return;
                }
                this._isRejected = true;
                this._reject?.(reason);
            };
            const onCancel = (cancelHandler)=>{
                if (this._isResolved || this._isRejected || this._isCancelled) {
                    return;
                }
                this._cancelHandlers.push(cancelHandler);
            };
            Object.defineProperty(onCancel, "isResolved", {
                get: ()=>this._isResolved
            });
            Object.defineProperty(onCancel, "isRejected", {
                get: ()=>this._isRejected
            });
            Object.defineProperty(onCancel, "isCancelled", {
                get: ()=>this._isCancelled
            });
            return executor(onResolve, onReject, onCancel);
        });
    }
    then(onFulfilled, onRejected) {
        return this._promise.then(onFulfilled, onRejected);
    }
    catch(onRejected) {
        return this._promise.catch(onRejected);
    }
    finally(onFinally) {
        return this._promise.finally(onFinally);
    }
    cancel() {
        if (this._isResolved || this._isRejected || this._isCancelled) {
            return;
        }
        this._isCancelled = true;
        if (this._cancelHandlers.length) {
            try {
                for (const cancelHandler of this._cancelHandlers){
                    cancelHandler();
                }
            } catch (error) {
                console.warn("Cancellation threw an error", error);
                return;
            }
        }
        this._cancelHandlers.length = 0;
        this._reject?.(new CancelError("Request aborted"));
    }
    get isCancelled() {
        return this._isCancelled;
    }
}


/***/ }),

/***/ 9413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ request)
/* harmony export */ });
/* unused harmony export sendRequest */
/* harmony import */ var _ApiError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8885);
/* harmony import */ var _CancelablePromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5202);
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

const isDefined = (value)=>{
    return value !== undefined && value !== null;
};
const isString = (value)=>{
    return typeof value === "string";
};
const isStringWithValue = (value)=>{
    return isString(value) && value !== "";
};
const isBlob = (value)=>{
    return typeof value === "object" && typeof value.type === "string" && typeof value.stream === "function" && typeof value.arrayBuffer === "function" && typeof value.constructor === "function" && typeof value.constructor.name === "string" && /^(Blob|File)$/.test(value.constructor.name) && /^(Blob|File)$/.test(value[Symbol.toStringTag]);
};
const isFormData = (value)=>{
    return value instanceof FormData;
};
const base64 = (str)=>{
    try {
        return btoa(str);
    } catch (err) {
        // @ts-ignore
        return Buffer.from(str).toString("base64");
    }
};
const getQueryString = (params)=>{
    const qs = [];
    const append = (key, value)=>{
        qs.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
    };
    const process = (key, value)=>{
        if (isDefined(value)) {
            if (Array.isArray(value)) {
                value.forEach((v)=>{
                    process(key, v);
                });
            } else if (typeof value === "object") {
                Object.entries(value).forEach(([k, v])=>{
                    process(`${key}[${k}]`, v);
                });
            } else {
                append(key, value);
            }
        }
    };
    Object.entries(params).forEach(([key, value])=>{
        process(key, value);
    });
    if (qs.length > 0) {
        return `?${qs.join("&")}`;
    }
    return "";
};
const getUrl = (config, options)=>{
    const encoder = config.ENCODE_PATH || encodeURI;
    const path = options.url.replace("{api-version}", config.VERSION).replace(/{(.*?)}/g, (substring, group)=>{
        if (options.path?.hasOwnProperty(group)) {
            return encoder(String(options.path[group]));
        }
        return substring;
    });
    const url = `${config.BASE}${path}`;
    if (options.query) {
        return `${url}${getQueryString(options.query)}`;
    }
    return url;
};
const getFormData = (options)=>{
    if (options.formData) {
        const formData = new FormData();
        const process = (key, value)=>{
            if (isString(value) || isBlob(value)) {
                formData.append(key, value);
            } else {
                formData.append(key, JSON.stringify(value));
            }
        };
        Object.entries(options.formData).filter(([_, value])=>isDefined(value)).forEach(([key, value])=>{
            if (Array.isArray(value)) {
                value.forEach((v)=>process(key, v));
            } else {
                process(key, value);
            }
        });
        return formData;
    }
    return undefined;
};
const resolve = async (options, resolver)=>{
    if (typeof resolver === "function") {
        return resolver(options);
    }
    return resolver;
};
const getHeaders = async (config, options)=>{
    const token = await resolve(options, config.TOKEN);
    const username = await resolve(options, config.USERNAME);
    const password = await resolve(options, config.PASSWORD);
    const additionalHeaders = await resolve(options, config.HEADERS);
    const headers = Object.entries({
        Accept: "application/json",
        ...additionalHeaders,
        ...options.headers
    }).filter(([_, value])=>isDefined(value)).reduce((headers, [key, value])=>({
            ...headers,
            [key]: String(value)
        }), {});
    if (isStringWithValue(token)) {
        headers["Authorization"] = `Bearer ${token}`;
    }
    if (isStringWithValue(username) && isStringWithValue(password)) {
        const credentials = base64(`${username}:${password}`);
        headers["Authorization"] = `Basic ${credentials}`;
    }
    if (options.body) {
        if (options.mediaType) {
            headers["Content-Type"] = options.mediaType;
        } else if (isBlob(options.body)) {
            headers["Content-Type"] = options.body.type || "application/octet-stream";
        } else if (isString(options.body)) {
            headers["Content-Type"] = "text/plain";
        } else if (!isFormData(options.body)) {
            headers["Content-Type"] = "application/json";
        }
    }
    return new Headers(headers);
};
const getRequestBody = (options)=>{
    if (options.body) {
        if (options.mediaType?.includes("/json")) {
            return JSON.stringify(options.body);
        } else if (isString(options.body) || isBlob(options.body) || isFormData(options.body)) {
            return options.body;
        } else {
            return JSON.stringify(options.body);
        }
    }
    return undefined;
};
const sendRequest = async (config, options, url, body, formData, headers, onCancel)=>{
    const controller = new AbortController();
    const request = {
        headers,
        body: body ?? formData,
        method: options.method,
        signal: controller.signal
    };
    if (config.WITH_CREDENTIALS) {
        request.credentials = config.CREDENTIALS;
    }
    onCancel(()=>controller.abort());
    return await fetch(url, request);
};
const getResponseHeader = (response, responseHeader)=>{
    if (responseHeader) {
        const content = response.headers.get(responseHeader);
        if (isString(content)) {
            return content;
        }
    }
    return undefined;
};
const getResponseBody = async (response)=>{
    if (response.status !== 204) {
        try {
            const contentType = response.headers.get("Content-Type");
            if (contentType) {
                const isJSON = contentType.toLowerCase().startsWith("application/json");
                if (isJSON) {
                    return await response.json();
                } else {
                    return await response.text();
                }
            }
        } catch (error) {
            console.error(error);
        }
    }
    return undefined;
};
const catchErrorCodes = (options, result)=>{
    const errors = {
        400: "Bad Request",
        401: "Unauthorized",
        403: "Forbidden",
        404: "Not Found",
        500: "Internal Server Error",
        502: "Bad Gateway",
        503: "Service Unavailable",
        ...options.errors
    };
    const error = errors[result.status];
    if (error) {
        throw new _ApiError__WEBPACK_IMPORTED_MODULE_0__/* .ApiError */ .M(options, result, error);
    }
    if (!result.ok) {
        throw new _ApiError__WEBPACK_IMPORTED_MODULE_0__/* .ApiError */ .M(options, result, "Generic Error");
    }
};
/**
 * Request method
 * @param config The OpenAPI configuration object
 * @param options The request options from the service
 * @returns CancelablePromise<T>
 * @throws ApiError
 */ const request = (config, options)=>{
    return new _CancelablePromise__WEBPACK_IMPORTED_MODULE_1__/* .CancelablePromise */ .O(async (resolve, reject, onCancel)=>{
        try {
            const url = getUrl(config, options);
            const formData = getFormData(options);
            const body = getRequestBody(options);
            const headers = await getHeaders(config, options);
            if (!onCancel.isCancelled) {
                const response = await sendRequest(config, options, url, body, formData, headers, onCancel);
                const responseBody = await getResponseBody(response);
                const responseHeader = getResponseHeader(response, options.responseHeader);
                const result = {
                    url,
                    ok: response.ok,
                    status: response.status,
                    statusText: response.statusText,
                    body: responseHeader ?? responseBody
                };
                catchErrorCodes(options, result);
                resolve(result.body);
            }
        } catch (error) {
            reject(error);
        }
    });
};


/***/ }),

/***/ 8690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "SY": () => (/* reexport */ AvailabilitycheckService),
  "_H": () => (/* reexport */ HuwelijkService),
  "$Q": () => (/* reexport */ IngeschrevenpersoonService),
  "fC": () => (/* reexport */ OpenAPI_OpenAPI),
  "ZD": () => (/* reexport */ SdgproductService)
});

// UNUSED EXPORTS: AccommodationService, ApiError, Assent, AssentService, AvailabilityService, Besluit, BesluitService, BesluitinformatieobjectService, BesluittypePublishService, BesluittypeService, BestandsdeelService, CalendarService, CancelError, CancelablePromise, CatalogusService, CommunicatiekanaalService, Contactmoment, ContactmomentService, EigenschapPublishService, EigenschapService, EnkelvoudiginformatieobjectDownloadService, EnkelvoudiginformatieobjectLockService, EnkelvoudiginformatieobjectReleaseService, EnkelvoudiginformatieobjectService, GebruiksrechtService, Huwelijk, InformatieObjectType, InformatieobjecttypePublishService, InformatieobjecttypeService, IngeschrevenPersoon, KlantContactmoment, KlantService, KlantadresService, KlantcontactService, KlantcontactmomentService, KlantemailService, KlanttelefoonService, MedewerkerService, MessageService, MollieService, MolliewebhookService, ObjectContactmoment, ObjectcontactmomentService, ObjectinformatieobjectService, ProcestypeService, ResultaatService, ResultaatType, ResultaattypePublishService, ResultaattypeService, ResultaattypeomschrijvinggeneriekService, Rol, RolService, RolType, RoltypePublishService, RoltypeService, SendlistService, ServiceService, StatusService, StatustypePublishService, StatustypeService, SubjectIdentificatie, SubjectidentificatieService, SubscriberService, SubverblijfbuitenlandService, VerblijfadresService, VerzendingService, Zaak, ZaakBesluitenService, ZaakInformatieObject, ZaakObject, ZaakService, ZaakType, ZaakTypeInformatieObjectType, ZaakZaakeigenschappenService, ZaakbesluitService, ZaakeigenschapService, ZaakinformatieobjectService, ZaakobjectService, ZaaktypePublishService, ZaaktypeService, ZaaktypeinformatieobjecttypePublishService, ZaaktypeinformatieobjecttypeService

// EXTERNAL MODULE: ./src/generated/core/ApiError.ts
var ApiError = __webpack_require__(8885);
// EXTERNAL MODULE: ./src/generated/core/CancelablePromise.ts
var CancelablePromise = __webpack_require__(5202);
;// CONCATENATED MODULE: ./src/generated/core/OpenAPI.ts
/* istanbul ignore file */ /* tslint:disable */ const OpenAPI_OpenAPI = {
    BASE: "https://api.huwelijksplanner.online" ?? 0,
    VERSION: "1.0",
    WITH_CREDENTIALS: false,
    CREDENTIALS: "include",
    TOKEN: undefined,
    USERNAME: undefined,
    PASSWORD: undefined,
    ENCODE_PATH: undefined
};

;// CONCATENATED MODULE: ./src/generated/models/Assent.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ var Assent;
(function(Assent) {
    let status;
    (function(status) {
        status["REQUESTED"] = "requested";
        status["GRANTED"] = "granted";
        status["SUBMITTED"] = "submitted";
        status["DECLINED"] = "declined";
        status["CANCELLED"] = "cancelled";
        status["WITHDRAWN"] = "withdrawn";
    })(status = Assent.status || (Assent.status = {}));
})(Assent || (Assent = {}));

;// CONCATENATED MODULE: ./src/generated/models/Besluit.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ var Besluit;
(function(Besluit) {
    let vervalreden;
    (function(vervalreden) {
        vervalreden["TIJDELIJK"] = "tijdelijk";
        vervalreden["INGETROKKEN_OVERHEID"] = "ingetrokken_overheid";
        vervalreden["INGETROKKEN_BELANGHEBBENDE"] = "ingetrokken_belanghebbende";
    })(vervalreden = Besluit.vervalreden || (Besluit.vervalreden = {}));
})(Besluit || (Besluit = {}));

;// CONCATENATED MODULE: ./src/generated/models/Contactmoment.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ var Contactmoment;
(function(Contactmoment) {
    let initiatiefnemer;
    (function(initiatiefnemer) {
        initiatiefnemer["GEMEENTE"] = "gemeente";
        initiatiefnemer["KLANT"] = "klant";
    })(initiatiefnemer = Contactmoment.initiatiefnemer || (Contactmoment.initiatiefnemer = {}));
})(Contactmoment || (Contactmoment = {}));

;// CONCATENATED MODULE: ./src/generated/models/Huwelijk.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ var Huwelijk;
(function(Huwelijk) {
    let status;
    (function(status) {
        status["CONCEPT"] = "concept";
        status["REPORTED"] = "reported";
        status["CONFIRMED"] = "confirmed";
        status["EXECUTED"] = "executed";
        status["CANCELLED"] = "cancelled";
    })(status = Huwelijk.status || (Huwelijk.status = {}));
})(Huwelijk || (Huwelijk = {}));

;// CONCATENATED MODULE: ./src/generated/models/InformatieObjectType.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ var InformatieObjectType;
(function(InformatieObjectType) {
    let vertrouwelijkheidaanduiding;
    (function(vertrouwelijkheidaanduiding) {
        vertrouwelijkheidaanduiding["OPENBAAR"] = "openbaar";
        vertrouwelijkheidaanduiding["BEPERKT_OPENBAAR"] = "beperkt_openbaar";
        vertrouwelijkheidaanduiding["INTERN"] = "intern";
        vertrouwelijkheidaanduiding["ZAAKVERTROUWELIJK"] = "zaakvertrouwelijk";
        vertrouwelijkheidaanduiding["VERTROUWELIJK"] = "vertrouwelijk";
        vertrouwelijkheidaanduiding["CONFIDENTIEEL"] = "confidentieel";
        vertrouwelijkheidaanduiding["GEHEIM"] = "geheim";
        vertrouwelijkheidaanduiding["ZEER_GEHEIM"] = "zeer_geheim";
    })(vertrouwelijkheidaanduiding = InformatieObjectType.vertrouwelijkheidaanduiding || (InformatieObjectType.vertrouwelijkheidaanduiding = {}));
})(InformatieObjectType || (InformatieObjectType = {}));

;// CONCATENATED MODULE: ./src/generated/models/IngeschrevenPersoon.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ var IngeschrevenPersoon;
(function(IngeschrevenPersoon) {
    let geslachtsaanduiding;
    (function(geslachtsaanduiding) {
        geslachtsaanduiding["MAN"] = "man";
        geslachtsaanduiding["VROUW"] = "vrouw";
        geslachtsaanduiding["ONBEKEND"] = "onbekend";
    })(geslachtsaanduiding = IngeschrevenPersoon.geslachtsaanduiding || (IngeschrevenPersoon.geslachtsaanduiding = {}));
})(IngeschrevenPersoon || (IngeschrevenPersoon = {}));

;// CONCATENATED MODULE: ./src/generated/models/KlantContactmoment.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ var KlantContactmoment;
(function(KlantContactmoment) {
    let rol;
    (function(rol) {
        rol["BELANGHEBBENDE"] = "belanghebbende";
        rol["GESPREKSPARTNER"] = "gesprekspartner";
    })(rol = KlantContactmoment.rol || (KlantContactmoment.rol = {}));
})(KlantContactmoment || (KlantContactmoment = {}));

;// CONCATENATED MODULE: ./src/generated/models/ObjectContactmoment.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ var ObjectContactmoment;
(function(ObjectContactmoment) {
    let objectType;
    (function(objectType) {
        objectType["ZAAK"] = "zaak";
    })(objectType = ObjectContactmoment.objectType || (ObjectContactmoment.objectType = {}));
})(ObjectContactmoment || (ObjectContactmoment = {}));

;// CONCATENATED MODULE: ./src/generated/models/ResultaatType.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ var ResultaatType;
(function(ResultaatType) {
    let archiefnominatie;
    (function(archiefnominatie) {
        archiefnominatie["BLIJVEND_BEWAREN"] = "blijvend_bewaren";
        archiefnominatie["VERNIETIGEN"] = "vernietigen";
    })(archiefnominatie = ResultaatType.archiefnominatie || (ResultaatType.archiefnominatie = {}));
})(ResultaatType || (ResultaatType = {}));

;// CONCATENATED MODULE: ./src/generated/models/Rol.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ var Rol;
(function(Rol) {
    let indicatieMachtiging;
    (function(indicatieMachtiging) {
        indicatieMachtiging["GEMACHTIGDE"] = "gemachtigde";
        indicatieMachtiging["MACHTIGINGGEVER"] = "machtiginggever";
    })(indicatieMachtiging = Rol.indicatieMachtiging || (Rol.indicatieMachtiging = {}));
    let betrokkeneType;
    (function(betrokkeneType) {
        betrokkeneType["NATUURLIJK_PERSOON"] = "natuurlijk_persoon";
        betrokkeneType["NIET_NATUURLIJK_PERSOON"] = "niet_natuurlijk_persoon";
        betrokkeneType["VESTIGING"] = "vestiging";
        betrokkeneType["ORGANISATORISCHE_EENHEID"] = "organisatorische_eenheid";
        betrokkeneType["MEDEWERKER"] = "medewerker";
    })(betrokkeneType = Rol.betrokkeneType || (Rol.betrokkeneType = {}));
})(Rol || (Rol = {}));

;// CONCATENATED MODULE: ./src/generated/models/RolType.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ var RolType;
(function(RolType) {
    let omschrijvingGeneriek;
    (function(omschrijvingGeneriek) {
        omschrijvingGeneriek["ADVISEUR"] = "adviseur";
        omschrijvingGeneriek["BEHANDELAAR"] = "behandelaar";
        omschrijvingGeneriek["BELANGHEBBENDE"] = "belanghebbende";
        omschrijvingGeneriek["BESLISSER"] = "beslisser";
        omschrijvingGeneriek["INITIATOR"] = "initiator";
        omschrijvingGeneriek["KLANTCONTACTER"] = "klantcontacter";
        omschrijvingGeneriek["ZAAKCOORDINATOR"] = "zaakcoordinator";
        omschrijvingGeneriek["MEDE_INITIATOR"] = "mede_initiator";
    })(omschrijvingGeneriek = RolType.omschrijvingGeneriek || (RolType.omschrijvingGeneriek = {}));
})(RolType || (RolType = {}));

;// CONCATENATED MODULE: ./src/generated/models/SubjectIdentificatie.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ var SubjectIdentificatie;
(function(SubjectIdentificatie) {
    let geslachtsaanduiding;
    (function(geslachtsaanduiding) {
        geslachtsaanduiding["M"] = "m";
        geslachtsaanduiding["V"] = "v";
        geslachtsaanduiding["O"] = "o";
    })(geslachtsaanduiding = SubjectIdentificatie.geslachtsaanduiding || (SubjectIdentificatie.geslachtsaanduiding = {}));
})(SubjectIdentificatie || (SubjectIdentificatie = {}));

;// CONCATENATED MODULE: ./src/generated/models/Zaak.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ var Zaak;
(function(Zaak) {
    let vertrouwelijkheidaanduiding;
    (function(vertrouwelijkheidaanduiding) {
        vertrouwelijkheidaanduiding["OPENBAAR"] = "openbaar";
        vertrouwelijkheidaanduiding["BEPERKT_OPENBAAR"] = "beperkt_openbaar";
        vertrouwelijkheidaanduiding["INTERN"] = "intern";
        vertrouwelijkheidaanduiding["ZAAKVERTROUWELIJK"] = "zaakvertrouwelijk";
        vertrouwelijkheidaanduiding["VERTROUWELIJK"] = "vertrouwelijk";
        vertrouwelijkheidaanduiding["CONFIDENTIEEL"] = "confidentieel";
        vertrouwelijkheidaanduiding["GEHEIM"] = "geheim";
        vertrouwelijkheidaanduiding["ZEER_GEHEIM"] = "zeer_geheim";
    })(vertrouwelijkheidaanduiding = Zaak.vertrouwelijkheidaanduiding || (Zaak.vertrouwelijkheidaanduiding = {}));
    let betalingsindicatie;
    (function(betalingsindicatie) {
        betalingsindicatie["NVT"] = "nvt";
        betalingsindicatie["NOG_NIET"] = "nog_niet";
        betalingsindicatie["GEDEELTELIJK"] = "gedeeltelijk";
        betalingsindicatie["GEHEEL"] = "geheel";
    })(betalingsindicatie = Zaak.betalingsindicatie || (Zaak.betalingsindicatie = {}));
    let archiefnominatie;
    (function(archiefnominatie) {
        archiefnominatie["BLIJVEND_BEWAREN"] = "blijvend_bewaren";
        archiefnominatie["VERNIETIGEN"] = "vernietigen";
    })(archiefnominatie = Zaak.archiefnominatie || (Zaak.archiefnominatie = {}));
    let archiefstatus;
    (function(archiefstatus) {
        archiefstatus["NOG_TE_ARCHIVEREN"] = "nog_te_archiveren";
        archiefstatus["GEARCHIVEERD"] = "gearchiveerd";
        archiefstatus["GEARCHIVEERD_PROCESTERMIJN_ONBEKEND"] = "gearchiveerd_procestermijn_onbekend";
        archiefstatus["OVERGEDRAGEN"] = "overgedragen";
    })(archiefstatus = Zaak.archiefstatus || (Zaak.archiefstatus = {}));
})(Zaak || (Zaak = {}));

;// CONCATENATED MODULE: ./src/generated/models/ZaakInformatieObject.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ var ZaakInformatieObject;
(function(ZaakInformatieObject) {
    let aardRelatieWeergave;
    (function(aardRelatieWeergave) {
        aardRelatieWeergave["HOORT_BIJ_OMGEKEERD_KENT"] = "Hoort bij, omgekeerd: kent";
        aardRelatieWeergave["LEGT_VAST_OMGEKEERD_KAN_VASTGELEGD_ZIJN_ALS"] = "Legt vast, omgekeerd: kan vastgelegd zijn als";
    })(aardRelatieWeergave = ZaakInformatieObject.aardRelatieWeergave || (ZaakInformatieObject.aardRelatieWeergave = {}));
})(ZaakInformatieObject || (ZaakInformatieObject = {}));

;// CONCATENATED MODULE: ./src/generated/models/ZaakObject.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ var ZaakObject;
(function(ZaakObject) {
    let objectType;
    (function(objectType) {
        objectType["ADRES"] = "adres";
        objectType["BESLUIT"] = "besluit";
        objectType["BUURT"] = "buurt";
        objectType["ENKELVOUDIG_DOCUMENT"] = "enkelvoudig_document";
        objectType["GEMEENTE"] = "gemeente";
        objectType["GEMEENTELIJKE_OPENBARE_RUIMTE"] = "gemeentelijke_openbare_ruimte";
        objectType["HUISHOUDEN"] = "huishouden";
        objectType["INRICHTINGSELEMENT"] = "inrichtingselement";
        objectType["KADASTRALE_ONROERENDE_ZAAK"] = "kadastrale_onroerende_zaak";
        objectType["KUNSTWERKDEEL"] = "kunstwerkdeel";
        objectType["MAATSCHAPPELIJKE_ACTIVITEIT"] = "maatschappelijke_activiteit";
        objectType["MEDEWERKER"] = "medewerker";
        objectType["NATUURLIJK_PERSOON"] = "natuurlijk_persoon";
        objectType["NIET_NATUURLIJK_PERSOON"] = "niet_natuurlijk_persoon";
        objectType["OPENBARE_RUIMTE"] = "openbare_ruimte";
        objectType["ORGANISATORISCHE_EENHEID"] = "organisatorische_eenheid";
        objectType["PAND"] = "pand";
        objectType["SPOORBAANDEEL"] = "spoorbaandeel";
        objectType["STATUS"] = "status";
        objectType["TERREINDEEL"] = "terreindeel";
        objectType["TERREIN_GEBOUWD_OBJECT"] = "terrein_gebouwd_object";
        objectType["VESTIGING"] = "vestiging";
        objectType["WATERDEEL"] = "waterdeel";
        objectType["WEGDEEL"] = "wegdeel";
        objectType["WIJK"] = "wijk";
        objectType["WOONPLAATS"] = "woonplaats";
        objectType["WOZ_DEELOBJECT"] = "woz_deelobject";
        objectType["WOZ_OBJECT"] = "woz_object";
        objectType["WOZ_WAARDE"] = "woz_waarde";
        objectType["ZAKELIJK_RECHT"] = "zakelijk_recht";
        objectType["OVERIGE"] = "overige";
    })(objectType = ZaakObject.objectType || (ZaakObject.objectType = {}));
})(ZaakObject || (ZaakObject = {}));

;// CONCATENATED MODULE: ./src/generated/models/ZaakType.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ var ZaakType;
(function(ZaakType) {
    let indicatieInternOfExtern;
    (function(indicatieInternOfExtern) {
        indicatieInternOfExtern["INTERN"] = "intern";
        indicatieInternOfExtern["EXTERN"] = "extern";
    })(indicatieInternOfExtern = ZaakType.indicatieInternOfExtern || (ZaakType.indicatieInternOfExtern = {}));
    let vertrouwelijkheidaanduiding;
    (function(vertrouwelijkheidaanduiding) {
        vertrouwelijkheidaanduiding["OPENBAAR"] = "openbaar";
        vertrouwelijkheidaanduiding["BEPERKT_OPENBAAR"] = "beperkt_openbaar";
        vertrouwelijkheidaanduiding["INTERN"] = "intern";
        vertrouwelijkheidaanduiding["ZAAKVERTROUWELIJK"] = "zaakvertrouwelijk";
        vertrouwelijkheidaanduiding["VERTROUWELIJK"] = "vertrouwelijk";
        vertrouwelijkheidaanduiding["CONFIDENTIEEL"] = "confidentieel";
        vertrouwelijkheidaanduiding["GEHEIM"] = "geheim";
        vertrouwelijkheidaanduiding["ZEER_GEHEIM"] = "zeer_geheim";
    })(vertrouwelijkheidaanduiding = ZaakType.vertrouwelijkheidaanduiding || (ZaakType.vertrouwelijkheidaanduiding = {}));
})(ZaakType || (ZaakType = {}));

;// CONCATENATED MODULE: ./src/generated/models/ZaakTypeInformatieObjectType.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ var ZaakTypeInformatieObjectType;
(function(ZaakTypeInformatieObjectType) {
    let richting;
    (function(richting) {
        richting["INKOMEND"] = "inkomend";
        richting["INTERN"] = "intern";
        richting["UITGAAND"] = "uitgaand";
    })(richting = ZaakTypeInformatieObjectType.richting || (ZaakTypeInformatieObjectType.richting = {}));
})(ZaakTypeInformatieObjectType || (ZaakTypeInformatieObjectType = {}));

// EXTERNAL MODULE: ./src/generated/core/request.ts
var request = __webpack_require__(9413);
;// CONCATENATED MODULE: ./src/generated/services/AccommodationService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class AccommodationService {
    /**
     * Accommodation
     * A room or other accommodation that can facilitate people.
     * @returns Accommodation A room or other accommodation that can facilitate people.
     * @throws ApiError
     */ static accommodationGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/hp/accommodations/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Accommodation
     * A room or other accommodation that can facilitate people.
     * @returns Accommodation A room or other accommodation that can facilitate people.
     * @throws ApiError
     */ static accommodationPutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/hp/accommodations/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * Accommodation
     * A room or other accommodation that can facilitate people.
     * @returns Accommodation A room or other accommodation that can facilitate people.
     * @throws ApiError
     */ static accommodationPatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/hp/accommodations/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * Accommodation
     * A room or other accommodation that can facilitate people.
     * @returns string A room or other accommodation that can facilitate people.
     * @throws ApiError
     */ static accommodationDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/hp/accommodations/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Accommodation
     * A room or other accommodation that can facilitate people.
     * @returns any OK
     * @throws ApiError
     */ static accommodationGetCollection({ name , accommodationProperties , place , product , maximumAttendeeCapacity , floorLevel , numberOfBathroomsTotal , wheelchairAccessible , petsAllowed , floorSize , accommodationCategory , description , id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/hp/accommodations",
            query: {
                "accommodationProperties": accommodationProperties,
                "place": place,
                "product": product,
                "maximumAttendeeCapacity": maximumAttendeeCapacity,
                "floorLevel": floorLevel,
                "numberOfBathroomsTotal": numberOfBathroomsTotal,
                "wheelchairAccessible": wheelchairAccessible,
                "petsAllowed": petsAllowed,
                "floorSize": floorSize,
                "accommodationCategory": accommodationCategory,
                "description": description,
                "name": name,
                "id": id
            }
        });
    }
    /**
     * Accommodation
     * A room or other accommodation that can facilitate people.
     * @returns Accommodation A room or other accommodation that can facilitate people.
     * @throws ApiError
     */ static accommodationPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/hp/accommodations",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/AssentService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class AssentService {
    /**
     * Assent
     * @returns Assent
     * @throws ApiError
     */ static assentGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/hp/assents/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Assent
     * @returns Assent
     * @throws ApiError
     */ static assentPutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/hp/assents/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * Assent
     * @returns Assent
     * @throws ApiError
     */ static assentPatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/hp/assents/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * Assent
     * @returns string
     * @throws ApiError
     */ static assentDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/hp/assents/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Assent
     * @returns any OK
     * @throws ApiError
     */ static assentGetCollection({ requester , name , contact , huwelijk , results , revocable , status , process , property , forwardUrl , request , description , token , id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/hp/assents",
            query: {
                "contact": contact,
                "huwelijk": huwelijk,
                "results": results,
                "revocable": revocable,
                "requester": requester,
                "status": status,
                "process": process,
                "property": property,
                "forwardUrl": forwardUrl,
                "request": request,
                "description": description,
                "name": name,
                "token": token,
                "id": id
            }
        });
    }
    /**
     * Assent
     * @returns Assent
     * @throws ApiError
     */ static assentPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/hp/assents",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/AvailabilityService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class AvailabilityService {
    /**
     * Availability
     * @returns Availability
     * @throws ApiError
     */ static availabilityGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/hp/availabilities/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Availability
     * @returns Availability
     * @throws ApiError
     */ static availabilityPutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/hp/availabilities/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * Availability
     * @returns Availability
     * @throws ApiError
     */ static availabilityPatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/hp/availabilities/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * Availability
     * @returns string
     * @throws ApiError
     */ static availabilityDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/hp/availabilities/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Availability
     * @returns any OK
     * @throws ApiError
     */ static availabilityGetCollection({ id , startDate , endDate , available , resource , calendar  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/hp/availabilities",
            query: {
                "id": id,
                "startDate": startDate,
                "endDate": endDate,
                "available": available,
                "resource": resource,
                "calendar": calendar
            }
        });
    }
    /**
     * Availability
     * @returns Availability
     * @throws ApiError
     */ static availabilityPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/hp/availabilities",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/AvailabilitycheckService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class AvailabilitycheckService {
    /**
     * AvailabilityCheck
     * @returns AvailabilityCheck
     * @throws ApiError
     */ static availabilitycheckGetItem({ id  }) {
        return (0,request/* request */.W)(OpenAPI_OpenAPI, {
            method: "GET",
            url: "/hp/calendar/availabilitycheck/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * AvailabilityCheck
     * @returns any OK
     * @throws ApiError
     */ static availabilitycheckGetCollection({ resourcesCould , interval , stop , start , id  }) {
        return (0,request/* request */.W)(OpenAPI_OpenAPI, {
            method: "GET",
            url: "/api/hp/calendar/availabilitycheck",
            query: {
                "resources_could[]": resourcesCould,
                "interval": interval,
                "stop": stop,
                "start": start,
                "id": id
            }
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/BesluitService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class BesluitService {
    /**
     * Besluit
     * @returns Besluit
     * @throws ApiError
     */ static besluitGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/brc/v1/besluiten/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Besluit
     * @returns Besluit
     * @throws ApiError
     */ static besluitPutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/brc/v1/besluiten/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * Besluit
     * @returns Besluit
     * @throws ApiError
     */ static besluitPatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/brc/v1/besluiten/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * Besluit
     * @returns string
     * @throws ApiError
     */ static besluitDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/brc/v1/besluiten/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Besluit
     * @returns any OK
     * @throws ApiError
     */ static besluitGetCollection({ ingangsdatum , datum , besluittype , verantwoordelijkeOrganisatie , uiterlijkeReactiedatum , verzenddatum , publicatiedatum , vervalredenWeergave , vervalreden , vervaldatum , bestuursorgaan , toelichting , zaak , identificatie , url , id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/brc/v1/besluiten",
            query: {
                "uiterlijkeReactiedatum": uiterlijkeReactiedatum,
                "verzenddatum": verzenddatum,
                "publicatiedatum": publicatiedatum,
                "vervalredenWeergave": vervalredenWeergave,
                "vervalreden": vervalreden,
                "vervaldatum": vervaldatum,
                "ingangsdatum": ingangsdatum,
                "bestuursorgaan": bestuursorgaan,
                "toelichting": toelichting,
                "datum": datum,
                "zaak": zaak,
                "besluittype": besluittype,
                "verantwoordelijkeOrganisatie": verantwoordelijkeOrganisatie,
                "identificatie": identificatie,
                "url": url,
                "id": id
            }
        });
    }
    /**
     * Besluit
     * @returns Besluit
     * @throws ApiError
     */ static besluitPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/brc/v1/besluiten",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/BesluitinformatieobjectService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class BesluitinformatieobjectService {
    /**
     * BesluitInformatieObject
     * @returns BesluitInformatieObject
     * @throws ApiError
     */ static besluitinformatieobjectGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/brc/v1/besluitinformatieobjecten/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * BesluitInformatieObject
     * @returns string
     * @throws ApiError
     */ static besluitinformatieobjectDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/brc/v1/besluitinformatieobjecten/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * BesluitInformatieObject
     * @returns any OK
     * @throws ApiError
     */ static besluitinformatieobjectGetCollection({ besluit , informatieobject , url , id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/brc/v1/besluitinformatieobjecten",
            query: {
                "besluit": besluit,
                "informatieobject": informatieobject,
                "url": url,
                "id": id
            }
        });
    }
    /**
     * BesluitInformatieObject
     * @returns BesluitInformatieObject
     * @throws ApiError
     */ static besluitinformatieobjectPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/brc/v1/besluitinformatieobjecten",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/BesluittypeService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class BesluittypeService {
    /**
     * BesluitType
     * @returns BesluitType
     * @throws ApiError
     */ static besluittypeGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/ztc/v1/besluittypen/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * BesluitType
     * @returns BesluitType
     * @throws ApiError
     */ static besluittypePutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/ztc/v1/besluittypen/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * BesluitType
     * @returns BesluitType
     * @throws ApiError
     */ static besluittypePatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/ztc/v1/besluittypen/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * BesluitType
     * @returns string
     * @throws ApiError
     */ static besluittypeDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/ztc/v1/besluittypen/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * BesluitType
     * @returns any OK
     * @throws ApiError
     */ static besluittypeGetCollection({ informatieobjecttypen , catalogus , beginGeldigheid , publicatieIndicatie , zaaktypes , concept , eindeGeldigheid , toelichting , publicatietermijn , publicatietekst , reactietermijn , besluitcategorie , omschrijvingGeneriek , omschrijving , url , id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/ztc/v1/besluittypen",
            query: {
                "informatieobjecttypen": informatieobjecttypen,
                "catalogus": catalogus,
                "concept": concept,
                "eindeGeldigheid": eindeGeldigheid,
                "beginGeldigheid": beginGeldigheid,
                "toelichting": toelichting,
                "publicatietermijn": publicatietermijn,
                "publicatietekst": publicatietekst,
                "publicatieIndicatie": publicatieIndicatie,
                "reactietermijn": reactietermijn,
                "besluitcategorie": besluitcategorie,
                "omschrijvingGeneriek": omschrijvingGeneriek,
                "omschrijving": omschrijving,
                "zaaktypes[]": zaaktypes,
                "url": url,
                "id": id
            }
        });
    }
    /**
     * BesluitType
     * @returns BesluitType
     * @throws ApiError
     */ static besluittypePostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/ztc/v1/besluittypen",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/BesluittypePublishService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class BesluittypePublishService {
    /**
     * BesluitType Publish
     * @returns BesluitType
     * @throws ApiError
     */ static besluittypePublishGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/ztc/v1/besluittypen/id/publish/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * BesluitType Publish
     * @returns BesluitType
     * @throws ApiError
     */ static besluittypePublishPutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/ztc/v1/besluittypen/id/publish/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * BesluitType Publish
     * @returns BesluitType
     * @throws ApiError
     */ static besluittypePublishPatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/ztc/v1/besluittypen/id/publish/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * BesluitType Publish
     * @returns string
     * @throws ApiError
     */ static besluittypePublishDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/ztc/v1/besluittypen/id/publish/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * BesluitType Publish
     * @returns any OK
     * @throws ApiError
     */ static besluittypePublishGetCollection({ informatieobjecttypen , catalogus , beginGeldigheid , publicatieIndicatie , zaaktypes , concept , eindeGeldigheid , toelichting , publicatietermijn , publicatietekst , reactietermijn , besluitcategorie , omschrijvingGeneriek , omschrijving , url , id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/ztc/v1/besluittypen/id/publish",
            query: {
                "informatieobjecttypen": informatieobjecttypen,
                "catalogus": catalogus,
                "concept": concept,
                "eindeGeldigheid": eindeGeldigheid,
                "beginGeldigheid": beginGeldigheid,
                "toelichting": toelichting,
                "publicatietermijn": publicatietermijn,
                "publicatietekst": publicatietekst,
                "publicatieIndicatie": publicatieIndicatie,
                "reactietermijn": reactietermijn,
                "besluitcategorie": besluitcategorie,
                "omschrijvingGeneriek": omschrijvingGeneriek,
                "omschrijving": omschrijving,
                "zaaktypes[]": zaaktypes,
                "url": url,
                "id": id
            }
        });
    }
    /**
     * BesluitType Publish
     * @returns BesluitType
     * @throws ApiError
     */ static besluittypePublishPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/ztc/v1/besluittypen/id/publish",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/BestandsdeelService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class BestandsdeelService {
    /**
     * BestandsDeel
     * @returns BestandsDeel
     * @throws ApiError
     */ static bestandsdeelPutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/drc/v1/bestandsdelen/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/CalendarService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class CalendarService {
    /**
     * Calendar
     * A Calendar is a collection of event ties to an unque person or resource.
     * @returns Calendar A Calendar is a collection of event ties to an unque person or resource.
     * @throws ApiError
     */ static calendarGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/hp/calendars/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Calendar
     * A Calendar is a collection of event ties to an unque person or resource.
     * @returns Calendar A Calendar is a collection of event ties to an unque person or resource.
     * @throws ApiError
     */ static calendarPutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/hp/calendars/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * Calendar
     * A Calendar is a collection of event ties to an unque person or resource.
     * @returns Calendar A Calendar is a collection of event ties to an unque person or resource.
     * @throws ApiError
     */ static calendarPatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/hp/calendars/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * Calendar
     * A Calendar is a collection of event ties to an unque person or resource.
     * @returns string A Calendar is a collection of event ties to an unque person or resource.
     * @throws ApiError
     */ static calendarDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/hp/calendars/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Calendar
     * A Calendar is a collection of event ties to an unque person or resource.
     * @returns any OK
     * @throws ApiError
     */ static calendarGetCollection({ availabilities , journals , freebusies , schedules , events , timeZone , todos , resource , person , organization , description , name , id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/hp/calendars",
            query: {
                "availabilities": availabilities,
                "journals": journals,
                "freebusies": freebusies,
                "schedules": schedules,
                "events": events,
                "timeZone": timeZone,
                "todos[]": todos,
                "resource": resource,
                "person": person,
                "organization": organization,
                "description": description,
                "name": name,
                "id": id
            }
        });
    }
    /**
     * Calendar
     * A Calendar is a collection of event ties to an unque person or resource.
     * @returns Calendar A Calendar is a collection of event ties to an unque person or resource.
     * @throws ApiError
     */ static calendarPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/hp/calendars",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/CatalogusService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class CatalogusService {
    /**
     * Catalogus
     * @returns Catalogus
     * @throws ApiError
     */ static catalogusGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/ztc/v1/catalogussen/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Catalogus
     * @returns any OK
     * @throws ApiError
     */ static catalogusGetCollection({ contactpersoonBeheerNaam , rsin , domein , informatieobjecttypen , besluittypen , zaaktypen , contactpersoonBeheerEmailadres , contactpersoonBeheerTelefoonnummer , url , id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/ztc/v1/catalogussen",
            query: {
                "informatieobjecttypen": informatieobjecttypen,
                "besluittypen": besluittypen,
                "zaaktypen": zaaktypen,
                "contactpersoonBeheerEmailadres": contactpersoonBeheerEmailadres,
                "contactpersoonBeheerTelefoonnummer": contactpersoonBeheerTelefoonnummer,
                "contactpersoonBeheerNaam": contactpersoonBeheerNaam,
                "rsin": rsin,
                "domein": domein,
                "url": url,
                "id": id
            }
        });
    }
    /**
     * Catalogus
     * @returns Catalogus
     * @throws ApiError
     */ static catalogusPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/ztc/v1/catalogussen",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/CommunicatiekanaalService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class CommunicatiekanaalService {
    /**
     * CommunicatieKanaal
     * @returns CommunicatieKanaal
     * @throws ApiError
     */ static communicatiekanaalGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/referentielijsten/v1/communicatiekanalen/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * CommunicatieKanaal
     * @returns any OK
     * @throws ApiError
     */ static communicatiekanaalGetCollection({ omschrijving , naam , url  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/referentielijsten/v1/communicatiekanalen",
            query: {
                "omschrijving": omschrijving,
                "naam": naam,
                "url": url
            }
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/ContactmomentService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class ContactmomentService {
    /**
     * Contactmoment
     * @returns Contactmoment
     * @throws ApiError
     */ static contactmomentGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/contactmomenten/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Contactmoment
     * @returns Contactmoment
     * @throws ApiError
     */ static contactmomentPutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/contactmomenten/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * Contactmoment
     * @returns Contactmoment
     * @throws ApiError
     */ static contactmomentPatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/contactmomenten/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * Contactmoment
     * @returns string
     * @throws ApiError
     */ static contactmomentDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/contactmomenten/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Contactmoment
     * @returns any OK
     * @throws ApiError
     */ static contactmomentGetCollection({ todo , klantcontactmomenten , objectcontactmomenten , medewerkerIdentificatie , volgendContactmoment , vorigContactmoment , primaireVraagWeergave , primaireVraag , afwijkendOnderwerp , medewerker , initiatiefnemer , onderwerpLinks , tekst , voorkeurstaal , voorkeurskanaal , kanaal , gespreksId , resultaat , einddatum , startdatum , registratiedatum , bronorganisatie , url , id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/contactmomenten",
            query: {
                "todo": todo,
                "klantcontactmomenten": klantcontactmomenten,
                "objectcontactmomenten": objectcontactmomenten,
                "medewerkerIdentificatie": medewerkerIdentificatie,
                "volgendContactmoment": volgendContactmoment,
                "vorigContactmoment": vorigContactmoment,
                "primaireVraagWeergave": primaireVraagWeergave,
                "primaireVraag": primaireVraag,
                "afwijkendOnderwerp": afwijkendOnderwerp,
                "medewerker": medewerker,
                "initiatiefnemer": initiatiefnemer,
                "onderwerpLinks[]": onderwerpLinks,
                "tekst": tekst,
                "voorkeurstaal": voorkeurstaal,
                "voorkeurskanaal": voorkeurskanaal,
                "kanaal": kanaal,
                "gespreksId": gespreksId,
                "resultaat": resultaat,
                "einddatum": einddatum,
                "startdatum": startdatum,
                "registratiedatum": registratiedatum,
                "bronorganisatie": bronorganisatie,
                "url": url,
                "id": id
            }
        });
    }
    /**
     * Contactmoment
     * @returns Contactmoment
     * @throws ApiError
     */ static contactmomentPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/contactmomenten",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/EigenschapService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class EigenschapService {
    /**
     * Eigenschap
     * @returns Eigenschap
     * @throws ApiError
     */ static eigenschapGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/ztc/v1/eigenschappen/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Eigenschap
     * @returns Eigenschap
     * @throws ApiError
     */ static eigenschapPutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/ztc/v1/eigenschappen/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * Eigenschap
     * @returns Eigenschap
     * @throws ApiError
     */ static eigenschapPatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/ztc/v1/eigenschappen/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * Eigenschap
     * @returns string
     * @throws ApiError
     */ static eigenschapDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/ztc/v1/eigenschappen/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Eigenschap
     * @returns any OK
     * @throws ApiError
     */ static eigenschapGetCollection({ definitie , naam , specificatie , zaaktype , toelichting , url , id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/ztc/v1/eigenschappen",
            query: {
                "specificatie": specificatie,
                "zaaktype": zaaktype,
                "toelichting": toelichting,
                "definitie": definitie,
                "naam": naam,
                "url": url,
                "id": id
            }
        });
    }
    /**
     * Eigenschap
     * @returns Eigenschap
     * @throws ApiError
     */ static eigenschapPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/ztc/v1/eigenschappen",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/EigenschapPublishService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class EigenschapPublishService {
    /**
     * Eigenschap Publish
     * @returns Eigenschap
     * @throws ApiError
     */ static eigenschapPublishGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/ztc/v1/eigenschappen/id/publish/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Eigenschap Publish
     * @returns Eigenschap
     * @throws ApiError
     */ static eigenschapPublishPutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/ztc/v1/eigenschappen/id/publish/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * Eigenschap Publish
     * @returns Eigenschap
     * @throws ApiError
     */ static eigenschapPublishPatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/ztc/v1/eigenschappen/id/publish/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * Eigenschap Publish
     * @returns string
     * @throws ApiError
     */ static eigenschapPublishDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/ztc/v1/eigenschappen/id/publish/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Eigenschap Publish
     * @returns any OK
     * @throws ApiError
     */ static eigenschapPublishGetCollection({ definitie , naam , specificatie , zaaktype , toelichting , url , id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/ztc/v1/eigenschappen/id/publish",
            query: {
                "specificatie": specificatie,
                "zaaktype": zaaktype,
                "toelichting": toelichting,
                "definitie": definitie,
                "naam": naam,
                "url": url,
                "id": id
            }
        });
    }
    /**
     * Eigenschap Publish
     * @returns Eigenschap
     * @throws ApiError
     */ static eigenschapPublishPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/ztc/v1/eigenschappen/id/publish",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/EnkelvoudiginformatieobjectService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class EnkelvoudiginformatieobjectService {
    /**
     * EnkelvoudigInformatieObject
     * Serializer for the EnkelvoudigInformatieObject model
     * @returns EnkelvoudigInformatieObject Serializer for the EnkelvoudigInformatieObject model
     * @throws ApiError
     */ static enkelvoudiginformatieobjectGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/drc/v1/enkelvoudiginformatieobjecten/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * EnkelvoudigInformatieObject
     * Serializer for the EnkelvoudigInformatieObject model
     * @returns EnkelvoudigInformatieObject Serializer for the EnkelvoudigInformatieObject model
     * @throws ApiError
     */ static enkelvoudiginformatieobjectPutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/drc/v1/enkelvoudiginformatieobjecten/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * EnkelvoudigInformatieObject
     * Serializer for the EnkelvoudigInformatieObject model
     * @returns EnkelvoudigInformatieObject Serializer for the EnkelvoudigInformatieObject model
     * @throws ApiError
     */ static enkelvoudiginformatieobjectPatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/drc/v1/enkelvoudiginformatieobjecten/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * EnkelvoudigInformatieObject
     * Serializer for the EnkelvoudigInformatieObject model
     * @returns string Serializer for the EnkelvoudigInformatieObject model
     * @throws ApiError
     */ static enkelvoudiginformatieobjectDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/drc/v1/enkelvoudiginformatieobjecten/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * EnkelvoudigInformatieObject
     * Serializer for the EnkelvoudigInformatieObject model
     * @returns any OK
     * @throws ApiError
     */ static enkelvoudiginformatieobjectGetCollection({ bestandsdelen , locked , informatieobjecttype , beginRegistratie , versie , taal , auteur , titel , creatiedatum , bronorganisatie , url , lock , integriteit , ondertekening , verschijningsvorm , indicatieGebruiksrecht , verzenddatum , ontvangstdatum , beschrijving , link , bestandsomvang , inhoud , bestandsnaam , formaat , status , vertrouwelijkheidaanduiding , identificatie , id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/drc/v1/enkelvoudiginformatieobjecten",
            query: {
                "bestandsdelen": bestandsdelen,
                "locked": locked,
                "lock": lock,
                "informatieobjecttype": informatieobjecttype,
                "integriteit": integriteit,
                "ondertekening": ondertekening,
                "verschijningsvorm": verschijningsvorm,
                "indicatieGebruiksrecht": indicatieGebruiksrecht,
                "verzenddatum": verzenddatum,
                "ontvangstdatum": ontvangstdatum,
                "beschrijving": beschrijving,
                "link": link,
                "bestandsomvang": bestandsomvang,
                "inhoud": inhoud,
                "bestandsnaam": bestandsnaam,
                "beginRegistratie": beginRegistratie,
                "versie": versie,
                "taal": taal,
                "formaat": formaat,
                "status": status,
                "auteur": auteur,
                "vertrouwelijkheidaanduiding": vertrouwelijkheidaanduiding,
                "titel": titel,
                "creatiedatum": creatiedatum,
                "bronorganisatie": bronorganisatie,
                "identificatie": identificatie,
                "url": url,
                "id": id
            }
        });
    }
    /**
     * EnkelvoudigInformatieObject
     * Serializer for the EnkelvoudigInformatieObject model
     * @returns EnkelvoudigInformatieObject Serializer for the EnkelvoudigInformatieObject model
     * @throws ApiError
     */ static enkelvoudiginformatieobjectPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/drc/v1/enkelvoudiginformatieobjecten",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/EnkelvoudiginformatieobjectDownloadService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class EnkelvoudiginformatieobjectDownloadService {
    /**
     * EnkelvoudigInformatieObject Download
     * Serializer for the EnkelvoudigInformatieObject model
     * @returns EnkelvoudigInformatieObject Serializer for the EnkelvoudigInformatieObject model
     * @throws ApiError
     */ static enkelvoudiginformatieobjectDownloadGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/drc/v1/enkelvoudiginformatieobjecten/id/download/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * EnkelvoudigInformatieObject Download
     * Serializer for the EnkelvoudigInformatieObject model
     * @returns EnkelvoudigInformatieObject Serializer for the EnkelvoudigInformatieObject model
     * @throws ApiError
     */ static enkelvoudiginformatieobjectDownloadPutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/drc/v1/enkelvoudiginformatieobjecten/id/download/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * EnkelvoudigInformatieObject Download
     * Serializer for the EnkelvoudigInformatieObject model
     * @returns EnkelvoudigInformatieObject Serializer for the EnkelvoudigInformatieObject model
     * @throws ApiError
     */ static enkelvoudiginformatieobjectDownloadPatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/drc/v1/enkelvoudiginformatieobjecten/id/download/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * EnkelvoudigInformatieObject Download
     * Serializer for the EnkelvoudigInformatieObject model
     * @returns string Serializer for the EnkelvoudigInformatieObject model
     * @throws ApiError
     */ static enkelvoudiginformatieobjectDownloadDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/drc/v1/enkelvoudiginformatieobjecten/id/download/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * EnkelvoudigInformatieObject Download
     * Serializer for the EnkelvoudigInformatieObject model
     * @returns any OK
     * @throws ApiError
     */ static enkelvoudiginformatieobjectDownloadGetCollection({ bestandsdelen , locked , informatieobjecttype , beginRegistratie , versie , taal , auteur , titel , creatiedatum , bronorganisatie , url , lock , integriteit , ondertekening , verschijningsvorm , indicatieGebruiksrecht , verzenddatum , ontvangstdatum , beschrijving , link , bestandsomvang , inhoud , bestandsnaam , formaat , status , vertrouwelijkheidaanduiding , identificatie , id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/drc/v1/enkelvoudiginformatieobjecten/id/download",
            query: {
                "bestandsdelen": bestandsdelen,
                "locked": locked,
                "lock": lock,
                "informatieobjecttype": informatieobjecttype,
                "integriteit": integriteit,
                "ondertekening": ondertekening,
                "verschijningsvorm": verschijningsvorm,
                "indicatieGebruiksrecht": indicatieGebruiksrecht,
                "verzenddatum": verzenddatum,
                "ontvangstdatum": ontvangstdatum,
                "beschrijving": beschrijving,
                "link": link,
                "bestandsomvang": bestandsomvang,
                "inhoud": inhoud,
                "bestandsnaam": bestandsnaam,
                "beginRegistratie": beginRegistratie,
                "versie": versie,
                "taal": taal,
                "formaat": formaat,
                "status": status,
                "auteur": auteur,
                "vertrouwelijkheidaanduiding": vertrouwelijkheidaanduiding,
                "titel": titel,
                "creatiedatum": creatiedatum,
                "bronorganisatie": bronorganisatie,
                "identificatie": identificatie,
                "url": url,
                "id": id
            }
        });
    }
    /**
     * EnkelvoudigInformatieObject Download
     * Serializer for the EnkelvoudigInformatieObject model
     * @returns EnkelvoudigInformatieObject Serializer for the EnkelvoudigInformatieObject model
     * @throws ApiError
     */ static enkelvoudiginformatieobjectDownloadPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/drc/v1/enkelvoudiginformatieobjecten/id/download",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/EnkelvoudiginformatieobjectLockService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class EnkelvoudiginformatieobjectLockService {
    /**
     * EnkelvoudigInformatieObject Lock
     * Serializer for the EnkelvoudigInformatieObject model
     * @returns EnkelvoudigInformatieObject Serializer for the EnkelvoudigInformatieObject model
     * @throws ApiError
     */ static enkelvoudiginformatieobjectLockGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/drc/v1/enkelvoudiginformatieobjecten/id/lock/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * EnkelvoudigInformatieObject Lock
     * Serializer for the EnkelvoudigInformatieObject model
     * @returns EnkelvoudigInformatieObject Serializer for the EnkelvoudigInformatieObject model
     * @throws ApiError
     */ static enkelvoudiginformatieobjectLockPutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/drc/v1/enkelvoudiginformatieobjecten/id/lock/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * EnkelvoudigInformatieObject Lock
     * Serializer for the EnkelvoudigInformatieObject model
     * @returns EnkelvoudigInformatieObject Serializer for the EnkelvoudigInformatieObject model
     * @throws ApiError
     */ static enkelvoudiginformatieobjectLockPatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/drc/v1/enkelvoudiginformatieobjecten/id/lock/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * EnkelvoudigInformatieObject Lock
     * Serializer for the EnkelvoudigInformatieObject model
     * @returns string Serializer for the EnkelvoudigInformatieObject model
     * @throws ApiError
     */ static enkelvoudiginformatieobjectLockDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/drc/v1/enkelvoudiginformatieobjecten/id/lock/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * EnkelvoudigInformatieObject Lock
     * Serializer for the EnkelvoudigInformatieObject model
     * @returns any OK
     * @throws ApiError
     */ static enkelvoudiginformatieobjectLockGetCollection({ bestandsdelen , locked , informatieobjecttype , beginRegistratie , versie , taal , auteur , titel , creatiedatum , bronorganisatie , url , lock , integriteit , ondertekening , verschijningsvorm , indicatieGebruiksrecht , verzenddatum , ontvangstdatum , beschrijving , link , bestandsomvang , inhoud , bestandsnaam , formaat , status , vertrouwelijkheidaanduiding , identificatie , id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/drc/v1/enkelvoudiginformatieobjecten/id/lock",
            query: {
                "bestandsdelen": bestandsdelen,
                "locked": locked,
                "lock": lock,
                "informatieobjecttype": informatieobjecttype,
                "integriteit": integriteit,
                "ondertekening": ondertekening,
                "verschijningsvorm": verschijningsvorm,
                "indicatieGebruiksrecht": indicatieGebruiksrecht,
                "verzenddatum": verzenddatum,
                "ontvangstdatum": ontvangstdatum,
                "beschrijving": beschrijving,
                "link": link,
                "bestandsomvang": bestandsomvang,
                "inhoud": inhoud,
                "bestandsnaam": bestandsnaam,
                "beginRegistratie": beginRegistratie,
                "versie": versie,
                "taal": taal,
                "formaat": formaat,
                "status": status,
                "auteur": auteur,
                "vertrouwelijkheidaanduiding": vertrouwelijkheidaanduiding,
                "titel": titel,
                "creatiedatum": creatiedatum,
                "bronorganisatie": bronorganisatie,
                "identificatie": identificatie,
                "url": url,
                "id": id
            }
        });
    }
    /**
     * EnkelvoudigInformatieObject Lock
     * Serializer for the EnkelvoudigInformatieObject model
     * @returns EnkelvoudigInformatieObject Serializer for the EnkelvoudigInformatieObject model
     * @throws ApiError
     */ static enkelvoudiginformatieobjectLockPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/drc/v1/enkelvoudiginformatieobjecten/id/lock",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/EnkelvoudiginformatieobjectReleaseService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class EnkelvoudiginformatieobjectReleaseService {
    /**
     * EnkelvoudigInformatieObject Release
     * Serializer for the EnkelvoudigInformatieObject model
     * @returns EnkelvoudigInformatieObject Serializer for the EnkelvoudigInformatieObject model
     * @throws ApiError
     */ static enkelvoudiginformatieobjectReleaseGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/drc/v1/enkelvoudiginformatieobjecten/id/release/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * EnkelvoudigInformatieObject Release
     * Serializer for the EnkelvoudigInformatieObject model
     * @returns EnkelvoudigInformatieObject Serializer for the EnkelvoudigInformatieObject model
     * @throws ApiError
     */ static enkelvoudiginformatieobjectReleasePutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/drc/v1/enkelvoudiginformatieobjecten/id/release/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * EnkelvoudigInformatieObject Release
     * Serializer for the EnkelvoudigInformatieObject model
     * @returns EnkelvoudigInformatieObject Serializer for the EnkelvoudigInformatieObject model
     * @throws ApiError
     */ static enkelvoudiginformatieobjectReleasePatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/drc/v1/enkelvoudiginformatieobjecten/id/release/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * EnkelvoudigInformatieObject Release
     * Serializer for the EnkelvoudigInformatieObject model
     * @returns string Serializer for the EnkelvoudigInformatieObject model
     * @throws ApiError
     */ static enkelvoudiginformatieobjectReleaseDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/drc/v1/enkelvoudiginformatieobjecten/id/release/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * EnkelvoudigInformatieObject Release
     * Serializer for the EnkelvoudigInformatieObject model
     * @returns any OK
     * @throws ApiError
     */ static enkelvoudiginformatieobjectReleaseGetCollection({ bestandsdelen , locked , informatieobjecttype , beginRegistratie , versie , taal , auteur , titel , creatiedatum , bronorganisatie , url , lock , integriteit , ondertekening , verschijningsvorm , indicatieGebruiksrecht , verzenddatum , ontvangstdatum , beschrijving , link , bestandsomvang , inhoud , bestandsnaam , formaat , status , vertrouwelijkheidaanduiding , identificatie , id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/drc/v1/enkelvoudiginformatieobjecten/id/release",
            query: {
                "bestandsdelen": bestandsdelen,
                "locked": locked,
                "lock": lock,
                "informatieobjecttype": informatieobjecttype,
                "integriteit": integriteit,
                "ondertekening": ondertekening,
                "verschijningsvorm": verschijningsvorm,
                "indicatieGebruiksrecht": indicatieGebruiksrecht,
                "verzenddatum": verzenddatum,
                "ontvangstdatum": ontvangstdatum,
                "beschrijving": beschrijving,
                "link": link,
                "bestandsomvang": bestandsomvang,
                "inhoud": inhoud,
                "bestandsnaam": bestandsnaam,
                "beginRegistratie": beginRegistratie,
                "versie": versie,
                "taal": taal,
                "formaat": formaat,
                "status": status,
                "auteur": auteur,
                "vertrouwelijkheidaanduiding": vertrouwelijkheidaanduiding,
                "titel": titel,
                "creatiedatum": creatiedatum,
                "bronorganisatie": bronorganisatie,
                "identificatie": identificatie,
                "url": url,
                "id": id
            }
        });
    }
    /**
     * EnkelvoudigInformatieObject Release
     * Serializer for the EnkelvoudigInformatieObject model
     * @returns EnkelvoudigInformatieObject Serializer for the EnkelvoudigInformatieObject model
     * @throws ApiError
     */ static enkelvoudiginformatieobjectReleasePostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/drc/v1/enkelvoudiginformatieobjecten/id/release",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/GebruiksrechtService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class GebruiksrechtService {
    /**
     * Gebruiksrecht
     * @returns Gebruiksrecht
     * @throws ApiError
     */ static gebruiksrechtGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/drc/v1/gebruiksrechten/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Gebruiksrecht
     * @returns Gebruiksrecht
     * @throws ApiError
     */ static gebruiksrechtPutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/drc/v1/gebruiksrechten/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * Gebruiksrecht
     * @returns Gebruiksrecht
     * @throws ApiError
     */ static gebruiksrechtPatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/drc/v1/gebruiksrechten/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * Gebruiksrecht
     * @returns string
     * @throws ApiError
     */ static gebruiksrechtDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/drc/v1/gebruiksrechten/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Gebruiksrecht
     * @returns any OK
     * @throws ApiError
     */ static gebruiksrechtGetCollection({ informatieobject , omschrijvingVoorwaarden , startdatum , url , einddatum , id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/drc/v1/gebruiksrechten",
            query: {
                "informatieobject": informatieobject,
                "omschrijvingVoorwaarden": omschrijvingVoorwaarden,
                "einddatum": einddatum,
                "startdatum": startdatum,
                "url": url,
                "id": id
            }
        });
    }
    /**
     * Gebruiksrecht
     * @returns Gebruiksrecht
     * @throws ApiError
     */ static gebruiksrechtPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/drc/v1/gebruiksrechten",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/HuwelijkService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class HuwelijkService {
    /**
     * Huwelijk
     * @returns Huwelijk
     * @throws ApiError
     */ static huwelijkGetItem({ id  }) {
        return (0,request/* request */.W)(OpenAPI_OpenAPI, {
            method: "GET",
            url: "/hp/huwelijk/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Huwelijk
     * @returns Huwelijk
     * @throws ApiError
     */ static huwelijkPutItem({ id , requestBody  }) {
        return (0,request/* request */.W)(OpenAPI_OpenAPI, {
            method: "PUT",
            url: "/hp/huwelijk/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * Huwelijk
     * @returns Huwelijk
     * @throws ApiError
     */ static huwelijkPatchItem({ id , requestBody  }) {
        return (0,request/* request */.W)(OpenAPI_OpenAPI, {
            method: "PATCH",
            url: "/hp/huwelijk/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * Huwelijk
     * @returns string
     * @throws ApiError
     */ static huwelijkDeleteItem({ id  }) {
        return (0,request/* request */.W)(OpenAPI_OpenAPI, {
            method: "DELETE",
            url: "/hp/huwelijk/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Huwelijk
     * @returns Huwelijk
     * @throws ApiError
     */ static huwelijkCreate({ requestBody  }) {
        return (0,request/* request */.W)(OpenAPI_OpenAPI, {
            method: "POST",
            url: "/api/zrc/v1/zaken",
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * Huwelijk
     * @returns Huwelijk
     * @throws ApiError
     */ static huwelijkGet({ id  }) {
        return (0,request/* request */.W)(OpenAPI_OpenAPI, {
            method: "GET",
            url: "/api/zrc/v1/zaakeigenschappen?zaak=https://api.huwelijksplanner.online/api/zrc/v1/zaken/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Huwelijk
     * @returns Huwelijk
     * @throws ApiError
     */ static huwelijkPostEigenschap({ requestBody  }) {
        return (0,request/* request */.W)(OpenAPI_OpenAPI, {
            method: "POST",
            url: "/api/zrc/v1/zaakeigenschappen",
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * Huwelijk
     * @returns Huwelijk
     * @throws ApiError
     */ static huwelijkPatchEigenschap({ id , requestBody  }) {
        return (0,request/* request */.W)(OpenAPI_OpenAPI, {
            method: "PATCH",
            url: "/api/zrc/v1/zaakeigenschappen/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * Huwelijk
     * @returns any OK
     * @throws ApiError
     */ static huwelijkGetCollection({ id , status , moment , order , kosten , melding , partners , getuigen , type , ceremonie , locatie , ambtenaar , producten , checklist , instemmingGemeente , assents , zaak  }) {
        return (0,request/* request */.W)(OpenAPI_OpenAPI, {
            method: "GET",
            url: "/hp/huwelijk",
            query: {
                "id": id,
                "status": status,
                "moment": moment,
                "order": order,
                "kosten": kosten,
                "melding": melding,
                "partners": partners,
                "getuigen": getuigen,
                "type": type,
                "ceremonie": ceremonie,
                "locatie": locatie,
                "ambtenaar": ambtenaar,
                "producten": producten,
                "checklist": checklist,
                "instemmingGemeente": instemmingGemeente,
                "assents": assents,
                "zaak": zaak
            }
        });
    }
    /**
     * Huwelijk
     * @returns Huwelijk
     * @throws ApiError
     */ static huwelijkPostItem({ requestBody  }) {
        return (0,request/* request */.W)(OpenAPI_OpenAPI, {
            method: "POST",
            url: "/hp/huwelijk",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/InformatieobjecttypeService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class InformatieobjecttypeService {
    /**
     * InformatieObjectType
     * @returns InformatieObjectType
     * @throws ApiError
     */ static informatieobjecttypeGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/ztc/v1/informatieobjecttypen/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * InformatieObjectType
     * @returns InformatieObjectType
     * @throws ApiError
     */ static informatieobjecttypePutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/ztc/v1/informatieobjecttypen/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * InformatieObjectType
     * @returns InformatieObjectType
     * @throws ApiError
     */ static informatieobjecttypePatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/ztc/v1/informatieobjecttypen/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * InformatieObjectType
     * @returns string
     * @throws ApiError
     */ static informatieobjecttypeDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/ztc/v1/informatieobjecttypen/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * InformatieObjectType
     * @returns any OK
     * @throws ApiError
     */ static informatieobjecttypeGetCollection({ beginGeldigheid , vertrouwelijkheidaanduiding , omschrijving , catalogus , concept , url , id , eindeGeldigheid  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/ztc/v1/informatieobjecttypen",
            query: {
                "concept": concept,
                "beginGeldigheid": beginGeldigheid,
                "vertrouwelijkheidaanduiding": vertrouwelijkheidaanduiding,
                "omschrijving": omschrijving,
                "catalogus": catalogus,
                "url": url,
                "id": id,
                "eindeGeldigheid": eindeGeldigheid
            }
        });
    }
    /**
     * InformatieObjectType
     * @returns InformatieObjectType
     * @throws ApiError
     */ static informatieobjecttypePostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/ztc/v1/informatieobjecttypen",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/InformatieobjecttypePublishService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class InformatieobjecttypePublishService {
    /**
     * InformatieObjectType Publish
     * @returns InformatieObjectType
     * @throws ApiError
     */ static informatieobjecttypePublishGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/ztc/v1/informatieobjecttypen/id/publish/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * InformatieObjectType Publish
     * @returns InformatieObjectType
     * @throws ApiError
     */ static informatieobjecttypePublishPutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/ztc/v1/informatieobjecttypen/id/publish/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * InformatieObjectType Publish
     * @returns InformatieObjectType
     * @throws ApiError
     */ static informatieobjecttypePublishPatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/ztc/v1/informatieobjecttypen/id/publish/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * InformatieObjectType Publish
     * @returns string
     * @throws ApiError
     */ static informatieobjecttypePublishDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/ztc/v1/informatieobjecttypen/id/publish/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * InformatieObjectType Publish
     * @returns any OK
     * @throws ApiError
     */ static informatieobjecttypePublishGetCollection({ beginGeldigheid , vertrouwelijkheidaanduiding , omschrijving , catalogus , concept , url , id , eindeGeldigheid  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/ztc/v1/informatieobjecttypen/id/publish",
            query: {
                "concept": concept,
                "beginGeldigheid": beginGeldigheid,
                "vertrouwelijkheidaanduiding": vertrouwelijkheidaanduiding,
                "omschrijving": omschrijving,
                "catalogus": catalogus,
                "url": url,
                "id": id,
                "eindeGeldigheid": eindeGeldigheid
            }
        });
    }
    /**
     * InformatieObjectType Publish
     * @returns InformatieObjectType
     * @throws ApiError
     */ static informatieobjecttypePublishPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/ztc/v1/informatieobjecttypen/id/publish",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/IngeschrevenpersoonService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class IngeschrevenpersoonService {
    /**
     * IngeschrevenPersoon
     * @returns IngeschrevenPersoon
     * @throws ApiError
     */ static ingeschrevenpersoonGetItem({ id  }) {
        return (0,request/* request */.W)(OpenAPI_OpenAPI, {
            method: "GET",
            url: "/api/brp/ingeschrevenpersonen/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * IngeschrevenPersoon
     * @returns IngeschrevenPersoon
     * @throws ApiError
     */ static ingeschrevenpersoonPutItem({ id , requestBody  }) {
        return (0,request/* request */.W)(OpenAPI_OpenAPI, {
            method: "PUT",
            url: "/api/brp/ingeschrevenpersonen/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * IngeschrevenPersoon
     * @returns IngeschrevenPersoon
     * @throws ApiError
     */ static ingeschrevenpersoonPatchItem({ id , requestBody  }) {
        return (0,request/* request */.W)(OpenAPI_OpenAPI, {
            method: "PATCH",
            url: "/api/brp/ingeschrevenpersonen/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * IngeschrevenPersoon
     * @returns string
     * @throws ApiError
     */ static ingeschrevenpersoonDeleteItem({ id  }) {
        return (0,request/* request */.W)(OpenAPI_OpenAPI, {
            method: "DELETE",
            url: "/api/brp/ingeschrevenpersonen/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * IngeschrevenPersoon
     * @returns any OK
     * @throws ApiError
     */ static ingeschrevenpersoonGetCollection({ partners , ouders , kinderen , verblijfstitel , gezagsverhouding , verblijfplaats , overlijden , opschortingBijhouding , geboorte , nationaliteiten , inOnderzoek , naam , kiesrecht , datumEersteInschrijvingGba , reisdocumentnummers , leeftijd , geslachtsaanduiding , geheimhoudingPersoonsgegevens , aNummer , burgerservicenummer , id  }) {
        return (0,request/* request */.W)(OpenAPI_OpenAPI, {
            method: "GET",
            url: "/api/brp/ingeschrevenpersonen",
            query: {
                "partners": partners,
                "ouders": ouders,
                "kinderen": kinderen,
                "verblijfstitel": verblijfstitel,
                "gezagsverhouding": gezagsverhouding,
                "verblijfplaats": verblijfplaats,
                "overlijden": overlijden,
                "opschortingBijhouding": opschortingBijhouding,
                "geboorte": geboorte,
                "nationaliteiten": nationaliteiten,
                "inOnderzoek": inOnderzoek,
                "naam": naam,
                "kiesrecht": kiesrecht,
                "datumEersteInschrijvingGBA": datumEersteInschrijvingGba,
                "reisdocumentnummers[]": reisdocumentnummers,
                "leeftijd": leeftijd,
                "geslachtsaanduiding": geslachtsaanduiding,
                "geheimhoudingPersoonsgegevens": geheimhoudingPersoonsgegevens,
                "aNummer": aNummer,
                "burgerservicenummer": burgerservicenummer,
                "id": id
            }
        });
    }
    /**
     * IngeschrevenPersoon
     * @returns IngeschrevenPersoon
     * @throws ApiError
     */ static ingeschrevenpersoonPostItem({ requestBody  }) {
        return (0,request/* request */.W)(OpenAPI_OpenAPI, {
            method: "POST",
            url: "/api/brp/ingeschrevenpersonen",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/KlantService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class KlantService {
    /**
     * Klant
     * @returns Klant
     * @throws ApiError
     */ static klantGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/klanten/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Klant
     * @returns Klant
     * @throws ApiError
     */ static klantPutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/klanten/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * Klant
     * @returns Klant
     * @throws ApiError
     */ static klantPatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/klanten/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * Klant
     * @returns string
     * @throws ApiError
     */ static klantDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/klanten/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Klant
     * @returns any OK
     * @throws ApiError
     */ static klantGetCollection({ id , url , bronorganisatie , klantnummer , bedrijfsnaam , functie , websiteUrl , voornaam , voorvoegselAchternaam , achternaam , subject , subjectType , telefoonnummers , emails , adressen , subjectIdentificatie  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/klanten",
            query: {
                "id": id,
                "url": url,
                "bronorganisatie": bronorganisatie,
                "klantnummer": klantnummer,
                "bedrijfsnaam": bedrijfsnaam,
                "functie": functie,
                "websiteUrl": websiteUrl,
                "voornaam": voornaam,
                "voorvoegselAchternaam": voorvoegselAchternaam,
                "achternaam": achternaam,
                "subject": subject,
                "subjectType": subjectType,
                "telefoonnummers": telefoonnummers,
                "emails": emails,
                "adressen": adressen,
                "subjectIdentificatie": subjectIdentificatie
            }
        });
    }
    /**
     * Klant
     * @returns Klant
     * @throws ApiError
     */ static klantPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/klanten",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/KlantadresService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class KlantadresService {
    /**
     * KlantAdres
     * @returns KlantAdres
     * @throws ApiError
     */ static klantadresGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/adressen/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * KlantAdres
     * @returns KlantAdres
     * @throws ApiError
     */ static klantadresPutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/adressen/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * KlantAdres
     * @returns KlantAdres
     * @throws ApiError
     */ static klantadresPatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/adressen/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * KlantAdres
     * @returns string
     * @throws ApiError
     */ static klantadresDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/adressen/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * KlantAdres
     * @returns any OK
     * @throws ApiError
     */ static klantadresGetCollection({ id , naam , straatnaam , huisnummer , huisletter , huisnummertoevoeging , postcode , woonplaatsnaam , landcode  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/adressen",
            query: {
                "id": id,
                "naam": naam,
                "straatnaam": straatnaam,
                "huisnummer": huisnummer,
                "huisletter": huisletter,
                "huisnummertoevoeging": huisnummertoevoeging,
                "postcode": postcode,
                "woonplaatsnaam": woonplaatsnaam,
                "landcode": landcode
            }
        });
    }
    /**
     * KlantAdres
     * @returns KlantAdres
     * @throws ApiError
     */ static klantadresPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/adressen",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/KlantcontactService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class KlantcontactService {
    /**
     * KlantContact
     * @returns KlantContact
     * @throws ApiError
     */ static klantcontactGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/zrc/v1/klantcontacten/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * KlantContact
     * @returns any OK
     * @throws ApiError
     */ static klantcontactGetCollection({ datumtijd , zaak , toelichting , onderwerp , kanaal , identificatie , uuid , url , id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/zrc/v1/klantcontacten",
            query: {
                "toelichting": toelichting,
                "onderwerp": onderwerp,
                "kanaal": kanaal,
                "datumtijd": datumtijd,
                "identificatie": identificatie,
                "zaak": zaak,
                "uuid": uuid,
                "url": url,
                "id": id
            }
        });
    }
    /**
     * KlantContact
     * @returns KlantContact
     * @throws ApiError
     */ static klantcontactPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/zrc/v1/klantcontacten",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/KlantcontactmomentService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class KlantcontactmomentService {
    /**
     * KlantContactmoment
     * @returns KlantContactmoment
     * @throws ApiError
     */ static klantcontactmomentGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/klantcontactmomenten/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * KlantContactmoment
     * @returns KlantContactmoment
     * @throws ApiError
     */ static klantcontactmomentPutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/klantcontactmomenten/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * KlantContactmoment
     * @returns KlantContactmoment
     * @throws ApiError
     */ static klantcontactmomentPatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/klantcontactmomenten/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * KlantContactmoment
     * @returns string
     * @throws ApiError
     */ static klantcontactmomentDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/klantcontactmomenten/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * KlantContactmoment
     * @returns any OK
     * @throws ApiError
     */ static klantcontactmomentGetCollection({ id , url , rol , gesprek , contactmoment , klant  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/klantcontactmomenten",
            query: {
                "id": id,
                "url": url,
                "rol": rol,
                "gesprek": gesprek,
                "contactmoment": contactmoment,
                "klant": klant
            }
        });
    }
    /**
     * KlantContactmoment
     * @returns KlantContactmoment
     * @throws ApiError
     */ static klantcontactmomentPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/klantcontactmomenten",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/KlantemailService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class KlantemailService {
    /**
     * KlantEmail
     * @returns KlantEmail
     * @throws ApiError
     */ static klantemailGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/emails/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * KlantEmail
     * @returns KlantEmail
     * @throws ApiError
     */ static klantemailPutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/emails/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * KlantEmail
     * @returns KlantEmail
     * @throws ApiError
     */ static klantemailPatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/emails/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * KlantEmail
     * @returns string
     * @throws ApiError
     */ static klantemailDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/emails/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * KlantEmail
     * @returns any OK
     * @throws ApiError
     */ static klantemailGetCollection({ id , naam , email  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/emails",
            query: {
                "id": id,
                "naam": naam,
                "email": email
            }
        });
    }
    /**
     * KlantEmail
     * @returns KlantEmail
     * @throws ApiError
     */ static klantemailPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/emails",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/KlanttelefoonService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class KlanttelefoonService {
    /**
     * KlantTelefoon
     * @returns KlantTelefoon
     * @throws ApiError
     */ static klanttelefoonGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/telefoons/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * KlantTelefoon
     * @returns KlantTelefoon
     * @throws ApiError
     */ static klanttelefoonPutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/telefoons/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * KlantTelefoon
     * @returns KlantTelefoon
     * @throws ApiError
     */ static klanttelefoonPatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/telefoons/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * KlantTelefoon
     * @returns string
     * @throws ApiError
     */ static klanttelefoonDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/telefoons/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * KlantTelefoon
     * @returns any OK
     * @throws ApiError
     */ static klanttelefoonGetCollection({ id , naam , telefoonnummer  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/telefoons",
            query: {
                "id": id,
                "naam": naam,
                "telefoonnummer": telefoonnummer
            }
        });
    }
    /**
     * KlantTelefoon
     * @returns KlantTelefoon
     * @throws ApiError
     */ static klanttelefoonPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/telefoons",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/MedewerkerService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class MedewerkerService {
    /**
     * Medewerker
     * Dit ORC medewerker object vang kiss specifieke wensen af. Let op het is verstandig de medewerker op te halen met ?extend[]=contact&extend[]=calendar zodat de contact en agenda gegevens meteen mee komen.
     * @returns Medewerker Dit ORC medewerker object vang kiss specifieke wensen af. Let op het is verstandig de medewerker op te halen met ?extend[]=contact&extend[]=calendar zodat de contact en agenda gegevens meteen mee komen.
     * @throws ApiError
     */ static medewerkerGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/hp/medewerkers/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Medewerker
     * Dit ORC medewerker object vang kiss specifieke wensen af. Let op het is verstandig de medewerker op te halen met ?extend[]=contact&extend[]=calendar zodat de contact en agenda gegevens meteen mee komen.
     * @returns Medewerker Dit ORC medewerker object vang kiss specifieke wensen af. Let op het is verstandig de medewerker op te halen met ?extend[]=contact&extend[]=calendar zodat de contact en agenda gegevens meteen mee komen.
     * @throws ApiError
     */ static medewerkerPutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/hp/medewerkers/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * Medewerker
     * Dit ORC medewerker object vang kiss specifieke wensen af. Let op het is verstandig de medewerker op te halen met ?extend[]=contact&extend[]=calendar zodat de contact en agenda gegevens meteen mee komen.
     * @returns Medewerker Dit ORC medewerker object vang kiss specifieke wensen af. Let op het is verstandig de medewerker op te halen met ?extend[]=contact&extend[]=calendar zodat de contact en agenda gegevens meteen mee komen.
     * @throws ApiError
     */ static medewerkerPatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/hp/medewerkers/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * Medewerker
     * Dit ORC medewerker object vang kiss specifieke wensen af. Let op het is verstandig de medewerker op te halen met ?extend[]=contact&extend[]=calendar zodat de contact en agenda gegevens meteen mee komen.
     * @returns string Dit ORC medewerker object vang kiss specifieke wensen af. Let op het is verstandig de medewerker op te halen met ?extend[]=contact&extend[]=calendar zodat de contact en agenda gegevens meteen mee komen.
     * @throws ApiError
     */ static medewerkerDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/hp/medewerkers/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Medewerker
     * Dit ORC medewerker object vang kiss specifieke wensen af. Let op het is verstandig de medewerker op te halen met ?extend[]=contact&extend[]=calendar zodat de contact en agenda gegevens meteen mee komen.
     * @returns any OK
     * @throws ApiError
     */ static medewerkerGetCollection({ availabilities , description , skills , replacement , _function , department , contact , user , id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/hp/medewerkers",
            query: {
                "availabilities": availabilities,
                "description": description,
                "skills": skills,
                "replacement": replacement,
                "function": _function,
                "department": department,
                "contact": contact,
                "user": user,
                "id": id
            }
        });
    }
    /**
     * Medewerker
     * Dit ORC medewerker object vang kiss specifieke wensen af. Let op het is verstandig de medewerker op te halen met ?extend[]=contact&extend[]=calendar zodat de contact en agenda gegevens meteen mee komen.
     * @returns Medewerker Dit ORC medewerker object vang kiss specifieke wensen af. Let op het is verstandig de medewerker op te halen met ?extend[]=contact&extend[]=calendar zodat de contact en agenda gegevens meteen mee komen.
     * @throws ApiError
     */ static medewerkerPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/hp/medewerkers",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/MessageService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class MessageService {
    /**
     * Message
     * A  message to be send to a spefic recipient or list troug a message service.
     * @returns Message A  message to be send to a spefic recipient or list troug a message service.
     * @throws ApiError
     */ static messageGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/hp/messages/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Message
     * A  message to be send to a spefic recipient or list troug a message service.
     * @returns Message A  message to be send to a spefic recipient or list troug a message service.
     * @throws ApiError
     */ static messagePutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/hp/messages/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * Message
     * A  message to be send to a spefic recipient or list troug a message service.
     * @returns Message A  message to be send to a spefic recipient or list troug a message service.
     * @throws ApiError
     */ static messagePatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/hp/messages/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * Message
     * A  message to be send to a spefic recipient or list troug a message service.
     * @returns string A  message to be send to a spefic recipient or list troug a message service.
     * @throws ApiError
     */ static messageDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/hp/messages/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Message
     * A  message to be send to a spefic recipient or list troug a message service.
     * @returns any OK
     * @throws ApiError
     */ static messageGetCollection({ attachments , service , status , data , resource , type , content , subject , sender , receiver , id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/hp/messages",
            query: {
                "attachments": attachments,
                "service": service,
                "status": status,
                "data[]": data,
                "resource": resource,
                "type": type,
                "content": content,
                "subject": subject,
                "sender": sender,
                "receiver": receiver,
                "id": id
            }
        });
    }
    /**
     * Message
     * A  message to be send to a spefic recipient or list troug a message service.
     * @returns Message A  message to be send to a spefic recipient or list troug a message service.
     * @throws ApiError
     */ static messagePostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/hp/messages",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/MollieService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class MollieService {
    /**
     * Mollie
     * @returns Mollie
     * @throws ApiError
     */ static mollieGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/hp/payment/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Mollie
     * @returns any OK
     * @throws ApiError
     */ static mollieGetCollection({ amount , webhookUrl , redirectUrl , sequenceType , profileId , details , expiresAt , isCancelable , status , metadata , method , description , createdAt , mode , resource , id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/hp/payment",
            query: {
                "amount": amount,
                "webhookUrl": webhookUrl,
                "redirectUrl": redirectUrl,
                "sequenceType": sequenceType,
                "profileId": profileId,
                "details[]": details,
                "expiresAt": expiresAt,
                "isCancelable": isCancelable,
                "status": status,
                "metadata[]": metadata,
                "method": method,
                "description": description,
                "createdAt": createdAt,
                "mode": mode,
                "resource": resource,
                "id": id
            }
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/MolliewebhookService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class MolliewebhookService {
    /**
     * MollieWebhook
     * @returns MollieWebhook
     * @throws ApiError
     */ static molliewebhookGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/hp/mollie/webhook/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * MollieWebhook
     * @returns any OK
     * @throws ApiError
     */ static molliewebhookGetCollection({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/hp/mollie/webhook",
            query: {
                "id": id
            }
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/ObjectcontactmomentService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class ObjectcontactmomentService {
    /**
     * ObjectContactmoment
     * @returns ObjectContactmoment
     * @throws ApiError
     */ static objectcontactmomentGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/objectcontactmomenten/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * ObjectContactmoment
     * @returns ObjectContactmoment
     * @throws ApiError
     */ static objectcontactmomentPutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/objectcontactmomenten/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * ObjectContactmoment
     * @returns ObjectContactmoment
     * @throws ApiError
     */ static objectcontactmomentPatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/objectcontactmomenten/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * ObjectContactmoment
     * @returns string
     * @throws ApiError
     */ static objectcontactmomentDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/objectcontactmomenten/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * ObjectContactmoment
     * @returns any OK
     * @throws ApiError
     */ static objectcontactmomentGetCollection({ id , url , object , objectType , contactmoment  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/objectcontactmomenten",
            query: {
                "id": id,
                "url": url,
                "object": object,
                "objectType": objectType,
                "contactmoment": contactmoment
            }
        });
    }
    /**
     * ObjectContactmoment
     * @returns ObjectContactmoment
     * @throws ApiError
     */ static objectcontactmomentPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/objectcontactmomenten",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/ObjectinformatieobjectService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class ObjectinformatieobjectService {
    /**
     * ObjectInformatieObject
     * @returns ObjectInformatieObject
     * @throws ApiError
     */ static objectinformatieobjectGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/drc/v1/objectinformatieobjecten/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * ObjectInformatieObject
     * @returns ObjectInformatieObject
     * @throws ApiError
     */ static objectinformatieobjectPutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/drc/v1/objectinformatieobjecten/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * ObjectInformatieObject
     * @returns ObjectInformatieObject
     * @throws ApiError
     */ static objectinformatieobjectPatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/drc/v1/objectinformatieobjecten/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * ObjectInformatieObject
     * @returns string
     * @throws ApiError
     */ static objectinformatieobjectDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/drc/v1/objectinformatieobjecten/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * ObjectInformatieObject
     * @returns any OK
     * @throws ApiError
     */ static objectinformatieobjectGetCollection({ informatieobject , objectType , object , url , id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/drc/v1/objectinformatieobjecten",
            query: {
                "informatieobject": informatieobject,
                "objectType": objectType,
                "object": object,
                "url": url,
                "id": id
            }
        });
    }
    /**
     * ObjectInformatieObject
     * @returns ObjectInformatieObject
     * @throws ApiError
     */ static objectinformatieobjectPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/drc/v1/objectinformatieobjecten",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/ProcestypeService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class ProcestypeService {
    /**
     * ProcesType
     * @returns ProcesType
     * @throws ApiError
     */ static procestypeGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/referentielijsten/v1/procestypen/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * ProcesType
     * @returns any OK
     * @throws ApiError
     */ static procestypeGetCollection({ procesobject , toelichting , omschrijving , naam , jaar , nummer , url  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/referentielijsten/v1/procestypen",
            query: {
                "procesobject": procesobject,
                "toelichting": toelichting,
                "omschrijving": omschrijving,
                "naam": naam,
                "jaar": jaar,
                "nummer": nummer,
                "url": url
            }
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/ResultaatService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class ResultaatService {
    /**
     * Resultaat
     * @returns Resultaat
     * @throws ApiError
     */ static resultaatGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/referentielijsten/v1/resultaten/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Resultaat
     * @returns any OK
     * @throws ApiError
     */ static resultaatGetCollection({ procestermijnWeergave , waardering , herkomst , naam , specifiek , generiek , volledigNummer , nummer , procesType , url , procestermijnOpmerking , alleTaakgebieden , heffenBelastingen , vhrosv , volksgezonheidEnMilieu , sociaalDomein , sportCultuurEnRecreatie , onderwijs , economie , verkeerEnVervoer , veiligheid , burgerzaken , publiekeInformatieEnRegistratie , bedrijfsvoeringEnPersoneel , algemeenBestuurEnInrichtingOrganisatie , toelichting , bewaartermijn , procestermijn , omschrijving  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/referentielijsten/v1/resultaten",
            query: {
                "procestermijnOpmerking": procestermijnOpmerking,
                "alleTaakgebieden": alleTaakgebieden,
                "heffenBelastingen": heffenBelastingen,
                "vhrosv": vhrosv,
                "volksgezonheidEnMilieu": volksgezonheidEnMilieu,
                "sociaalDomein": sociaalDomein,
                "sportCultuurEnRecreatie": sportCultuurEnRecreatie,
                "onderwijs": onderwijs,
                "economie": economie,
                "verkeerEnVervoer": verkeerEnVervoer,
                "veiligheid": veiligheid,
                "burgerzaken": burgerzaken,
                "publiekeInformatieEnRegistratie": publiekeInformatieEnRegistratie,
                "bedrijfsvoeringEnPersoneel": bedrijfsvoeringEnPersoneel,
                "algemeenBestuurEnInrichtingOrganisatie": algemeenBestuurEnInrichtingOrganisatie,
                "toelichting": toelichting,
                "bewaartermijn": bewaartermijn,
                "procestermijnWeergave": procestermijnWeergave,
                "procestermijn": procestermijn,
                "waardering": waardering,
                "herkomst": herkomst,
                "omschrijving": omschrijving,
                "naam": naam,
                "specifiek": specifiek,
                "generiek": generiek,
                "volledigNummer": volledigNummer,
                "nummer": nummer,
                "procesType": procesType,
                "url": url
            }
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/ResultaattypeService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class ResultaattypeService {
    /**
     * ResultaatType
     * @returns ResultaatType
     * @throws ApiError
     */ static resultaattypeGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/ztc/v1/resultaattypen/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * ResultaatType
     * @returns ResultaatType
     * @throws ApiError
     */ static resultaattypePutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/ztc/v1/resultaattypen/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * ResultaatType
     * @returns ResultaatType
     * @throws ApiError
     */ static resultaattypePatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/ztc/v1/resultaattypen/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * ResultaatType
     * @returns string
     * @throws ApiError
     */ static resultaattypeDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/ztc/v1/resultaattypen/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * ResultaatType
     * @returns any OK
     * @throws ApiError
     */ static resultaattypeGetCollection({ selectielijstklasse , omschrijving , brondatumArchiefprocedure , archiefactietermijn , archiefnominatie , toelichting , omschrijvingGeneriek , zaaktype , url , id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/ztc/v1/resultaattypen",
            query: {
                "brondatumArchiefprocedure": brondatumArchiefprocedure,
                "archiefactietermijn": archiefactietermijn,
                "archiefnominatie": archiefnominatie,
                "toelichting": toelichting,
                "selectielijstklasse": selectielijstklasse,
                "omschrijvingGeneriek": omschrijvingGeneriek,
                "omschrijving": omschrijving,
                "zaaktype": zaaktype,
                "url": url,
                "id": id
            }
        });
    }
    /**
     * ResultaatType
     * @returns ResultaatType
     * @throws ApiError
     */ static resultaattypePostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/ztc/v1/resultaattypen",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/ResultaattypeomschrijvinggeneriekService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class ResultaattypeomschrijvinggeneriekService {
    /**
     * ResultaattypeOmschrijvingGeneriek
     * @returns ResultaattypeOmschrijvingGeneriek
     * @throws ApiError
     */ static resultaattypeomschrijvinggeneriekGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/referentielijsten/v1/resultaattypeomschrijvingen/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * ResultaattypeOmschrijvingGeneriek
     * @returns any OK
     * @throws ApiError
     */ static resultaattypeomschrijvinggeneriekGetCollection({ definitie , omschrijving , url , opmerking  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/referentielijsten/v1/resultaattypeomschrijvingen",
            query: {
                "opmerking": opmerking,
                "definitie": definitie,
                "omschrijving": omschrijving,
                "url": url
            }
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/ResultaattypePublishService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class ResultaattypePublishService {
    /**
     * ResultaatType Publish
     * @returns ResultaatType
     * @throws ApiError
     */ static resultaattypePublishGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/ztc/v1/resultaattypen/id/publish/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * ResultaatType Publish
     * @returns ResultaatType
     * @throws ApiError
     */ static resultaattypePublishPutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/ztc/v1/resultaattypen/id/publish/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * ResultaatType Publish
     * @returns ResultaatType
     * @throws ApiError
     */ static resultaattypePublishPatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/ztc/v1/resultaattypen/id/publish/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * ResultaatType Publish
     * @returns string
     * @throws ApiError
     */ static resultaattypePublishDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/ztc/v1/resultaattypen/id/publish/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * ResultaatType Publish
     * @returns any OK
     * @throws ApiError
     */ static resultaattypePublishGetCollection({ selectielijstklasse , omschrijving , brondatumArchiefprocedure , archiefactietermijn , archiefnominatie , toelichting , omschrijvingGeneriek , zaaktype , url , id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/ztc/v1/resultaattypen/id/publish",
            query: {
                "brondatumArchiefprocedure": brondatumArchiefprocedure,
                "archiefactietermijn": archiefactietermijn,
                "archiefnominatie": archiefnominatie,
                "toelichting": toelichting,
                "selectielijstklasse": selectielijstklasse,
                "omschrijvingGeneriek": omschrijvingGeneriek,
                "omschrijving": omschrijving,
                "zaaktype": zaaktype,
                "url": url,
                "id": id
            }
        });
    }
    /**
     * ResultaatType Publish
     * @returns ResultaatType
     * @throws ApiError
     */ static resultaattypePublishPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/ztc/v1/resultaattypen/id/publish",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/RolService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class RolService {
    /**
     * Rol
     * @returns Rol
     * @throws ApiError
     */ static rolGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/zrc/v1/rollen/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Rol
     * @returns string
     * @throws ApiError
     */ static rolDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/zrc/v1/rollen/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Rol
     * @returns any OK
     * @throws ApiError
     */ static rolGetCollection({ roltype , roltoelichting , betrokkeneType , betrokkeneIdentificatie , zaak , indicatieMachtiging , registratiedatum , omschrijvingGeneriek , omschrijving , betrokkene , uuid , url , id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/zrc/v1/rollen",
            query: {
                "betrokkeneIdentificatie": betrokkeneIdentificatie,
                "roltype": roltype,
                "zaak": zaak,
                "indicatieMachtiging": indicatieMachtiging,
                "registratiedatum": registratiedatum,
                "roltoelichting": roltoelichting,
                "omschrijvingGeneriek": omschrijvingGeneriek,
                "omschrijving": omschrijving,
                "betrokkeneType": betrokkeneType,
                "betrokkene": betrokkene,
                "uuid": uuid,
                "url": url,
                "id": id
            }
        });
    }
    /**
     * Rol
     * @returns Rol
     * @throws ApiError
     */ static rolPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/zrc/v1/rollen",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/RoltypeService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class RoltypeService {
    /**
     * RolType
     * @returns RolType
     * @throws ApiError
     */ static roltypeGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/ztc/v1/roltypen/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * RolType
     * @returns RolType
     * @throws ApiError
     */ static roltypePutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/ztc/v1/roltypen/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * RolType
     * @returns RolType
     * @throws ApiError
     */ static roltypePatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/ztc/v1/roltypen/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * RolType
     * @returns string
     * @throws ApiError
     */ static roltypeDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/ztc/v1/roltypen/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * RolType
     * @returns any OK
     * @throws ApiError
     */ static roltypeGetCollection({ omschrijvingGeneriek , omschrijving , zaaktype , url , id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/ztc/v1/roltypen",
            query: {
                "omschrijvingGeneriek": omschrijvingGeneriek,
                "omschrijving": omschrijving,
                "zaaktype": zaaktype,
                "url": url,
                "id": id
            }
        });
    }
    /**
     * RolType
     * @returns RolType
     * @throws ApiError
     */ static roltypePostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/ztc/v1/roltypen",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/RoltypePublishService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class RoltypePublishService {
    /**
     * RolType Publish
     * @returns RolType
     * @throws ApiError
     */ static roltypePublishGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/ztc/v1/roltypen/id/publish/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * RolType Publish
     * @returns RolType
     * @throws ApiError
     */ static roltypePublishPutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/ztc/v1/roltypen/id/publish/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * RolType Publish
     * @returns RolType
     * @throws ApiError
     */ static roltypePublishPatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/ztc/v1/roltypen/id/publish/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * RolType Publish
     * @returns string
     * @throws ApiError
     */ static roltypePublishDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/ztc/v1/roltypen/id/publish/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * RolType Publish
     * @returns any OK
     * @throws ApiError
     */ static roltypePublishGetCollection({ omschrijvingGeneriek , omschrijving , zaaktype , url , id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/ztc/v1/roltypen/id/publish",
            query: {
                "omschrijvingGeneriek": omschrijvingGeneriek,
                "omschrijving": omschrijving,
                "zaaktype": zaaktype,
                "url": url,
                "id": id
            }
        });
    }
    /**
     * RolType Publish
     * @returns RolType
     * @throws ApiError
     */ static roltypePublishPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/ztc/v1/roltypen/id/publish",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/SdgproductService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class SdgproductService {
    /**
     * SDGProduct
     * @returns SDGProduct
     * @throws ApiError
     */ static sdgproductGetItem({ id  }) {
        return (0,request/* request */.W)(OpenAPI_OpenAPI, {
            method: "GET",
            url: "/api/hp/producten/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * SDGProduct
     * @returns SDGProduct
     * @throws ApiError
     */ static sdgproductPutItem({ id , requestBody  }) {
        return (0,request/* request */.W)(OpenAPI_OpenAPI, {
            method: "PUT",
            url: "/api/hp/producten/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * SDGProduct
     * @returns SDGProduct
     * @throws ApiError
     */ static sdgproductPatchItem({ id , requestBody  }) {
        return (0,request/* request */.W)(OpenAPI_OpenAPI, {
            method: "PATCH",
            url: "/api/hp/producten/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * SDGProduct
     * @returns string
     * @throws ApiError
     */ static sdgproductDeleteItem({ id  }) {
        return (0,request/* request */.W)(OpenAPI_OpenAPI, {
            method: "DELETE",
            url: "/api/hp/producten/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * SDGProduct
     * @returns any OK
     * @throws ApiError
     */ static sdgproductGetCollection({ id , url , uuid , upnLabel , upnUri , versie , publicatieDatum , productAanwezigheid , productValtOnder , catalogus , locaties , doelgroep , verantwoordelijkeOrganisatie , bevoegdeOrganisatie , vertalingen , gerelateerdeProducten  }) {
        return (0,request/* request */.W)(OpenAPI_OpenAPI, {
            method: "GET",
            url: "/api/hp/producten",
            query: {
                "id": id,
                "url": url,
                "uuid": uuid,
                "upnLabel": upnLabel,
                "upnUri": upnUri,
                "versie": versie,
                "publicatieDatum": publicatieDatum,
                "productAanwezigheid": productAanwezigheid,
                "productValtOnder": productValtOnder,
                "catalogus": catalogus,
                "locaties[]": locaties,
                "doelgroep": doelgroep,
                "verantwoordelijkeOrganisatie": verantwoordelijkeOrganisatie,
                "bevoegdeOrganisatie": bevoegdeOrganisatie,
                "vertalingen": vertalingen,
                "gerelateerdeProducten": gerelateerdeProducten
            }
        });
    }
    /**
     * SDGProduct
     * @returns SDGProduct
     * @throws ApiError
     */ static sdgproductPostItem({ requestBody  }) {
        return (0,request/* request */.W)(OpenAPI_OpenAPI, {
            method: "POST",
            url: "/api/hp/producten",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/SendlistService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class SendlistService {
    /**
     * SendList
     * @returns SendList
     * @throws ApiError
     */ static sendlistGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/hp/send_lists/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * SendList
     * @returns SendList
     * @throws ApiError
     */ static sendlistPutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/hp/send_lists/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * SendList
     * @returns SendList
     * @throws ApiError
     */ static sendlistPatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/hp/send_lists/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * SendList
     * @returns string
     * @throws ApiError
     */ static sendlistDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/hp/send_lists/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * SendList
     * @returns any OK
     * @throws ApiError
     */ static sendlistGetCollection({ organisation , name , subscribers , resource , phone , mail , description , id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/hp/send_lists",
            query: {
                "subscribers": subscribers,
                "resource": resource,
                "organisation": organisation,
                "phone": phone,
                "mail": mail,
                "description": description,
                "name": name,
                "id": id
            }
        });
    }
    /**
     * SendList
     * @returns SendList
     * @throws ApiError
     */ static sendlistPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/hp/send_lists",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/ServiceService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class ServiceService {
    /**
     * Service
     * @returns Service
     * @throws ApiError
     */ static serviceGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/hp/services/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Service
     * @returns Service
     * @throws ApiError
     */ static servicePutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/hp/services/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * Service
     * @returns Service
     * @throws ApiError
     */ static servicePatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/hp/services/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * Service
     * @returns string
     * @throws ApiError
     */ static serviceDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/hp/services/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Service
     * @returns any OK
     * @throws ApiError
     */ static serviceGetCollection({ organisation , authorization , id , type , configuration  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/hp/services",
            query: {
                "id": id,
                "type": type,
                "organisation": organisation,
                "authorization": authorization,
                "configuration[]": configuration
            }
        });
    }
    /**
     * Service
     * @returns Service
     * @throws ApiError
     */ static servicePostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/hp/services",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/StatusService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class StatusService {
    /**
     * Status
     * @returns Status
     * @throws ApiError
     */ static statusGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/zrc/v1/statussen/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Status
     * @returns any OK
     * @throws ApiError
     */ static statusGetCollection({ statustype , datumStatusGezet , zaak , statustoelichting , uuid , url , id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/zrc/v1/statussen",
            query: {
                "statustype": statustype,
                "zaak": zaak,
                "statustoelichting": statustoelichting,
                "datumStatusGezet": datumStatusGezet,
                "uuid": uuid,
                "url": url,
                "id": id
            }
        });
    }
    /**
     * Status
     * @returns Status
     * @throws ApiError
     */ static statusPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/zrc/v1/statussen",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/StatustypeService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class StatustypeService {
    /**
     * StatusType
     * @returns StatusType
     * @throws ApiError
     */ static statustypeGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/ztc/v1/statustypen/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * StatusType
     * @returns StatusType
     * @throws ApiError
     */ static statustypePutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/ztc/v1/statustypen/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * StatusType
     * @returns StatusType
     * @throws ApiError
     */ static statustypePatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/ztc/v1/statustypen/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * StatusType
     * @returns string
     * @throws ApiError
     */ static statustypeDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/ztc/v1/statustypen/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * StatusType
     * @returns any OK
     * @throws ApiError
     */ static statustypeGetCollection({ volgnummer , omschrijving , informeren , isEindstatus , zaaktype , statustekst , omschrijvingGeneriek , url , id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/ztc/v1/statustypen",
            query: {
                "informeren": informeren,
                "isEindstatus": isEindstatus,
                "volgnummer": volgnummer,
                "zaaktype": zaaktype,
                "statustekst": statustekst,
                "omschrijvingGeneriek": omschrijvingGeneriek,
                "omschrijving": omschrijving,
                "url": url,
                "id": id
            }
        });
    }
    /**
     * StatusType
     * @returns StatusType
     * @throws ApiError
     */ static statustypePostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/ztc/v1/statustypen",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/StatustypePublishService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class StatustypePublishService {
    /**
     * StatusType Publish
     * @returns StatusType
     * @throws ApiError
     */ static statustypePublishGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/ztc/v1/statustypen/id/publish/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * StatusType Publish
     * @returns StatusType
     * @throws ApiError
     */ static statustypePublishPutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/ztc/v1/statustypen/id/publish/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * StatusType Publish
     * @returns StatusType
     * @throws ApiError
     */ static statustypePublishPatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/ztc/v1/statustypen/id/publish/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * StatusType Publish
     * @returns string
     * @throws ApiError
     */ static statustypePublishDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/ztc/v1/statustypen/id/publish/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * StatusType Publish
     * @returns any OK
     * @throws ApiError
     */ static statustypePublishGetCollection({ volgnummer , omschrijving , informeren , isEindstatus , zaaktype , statustekst , omschrijvingGeneriek , url , id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/ztc/v1/statustypen/id/publish",
            query: {
                "informeren": informeren,
                "isEindstatus": isEindstatus,
                "volgnummer": volgnummer,
                "zaaktype": zaaktype,
                "statustekst": statustekst,
                "omschrijvingGeneriek": omschrijvingGeneriek,
                "omschrijving": omschrijving,
                "url": url,
                "id": id
            }
        });
    }
    /**
     * StatusType Publish
     * @returns StatusType
     * @throws ApiError
     */ static statustypePublishPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/ztc/v1/statustypen/id/publish",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/SubjectidentificatieService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class SubjectidentificatieService {
    /**
     * SubjectIdentificatie
     * @returns SubjectIdentificatie
     * @throws ApiError
     */ static subjectidentificatieGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/subjectidentificaties/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * SubjectIdentificatie
     * @returns SubjectIdentificatie
     * @throws ApiError
     */ static subjectidentificatiePutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/subjectidentificaties/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * SubjectIdentificatie
     * @returns SubjectIdentificatie
     * @throws ApiError
     */ static subjectidentificatiePatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/subjectidentificaties/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * SubjectIdentificatie
     * @returns string
     * @throws ApiError
     */ static subjectidentificatieDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/subjectidentificaties/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * SubjectIdentificatie
     * @returns any OK
     * @throws ApiError
     */ static subjectidentificatieGetCollection({ inpBsn , anpIdentificatie , inpANummer , geslachtsnaam , voorvoegselGeslachtsnaam , voorletters , voornamen , geslachtsaanduiding , geboortedatum , vestigingsNummer , handelsnaam , verblijfsadres , subVerblijfBuitenland  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/subjectidentificaties",
            query: {
                "inpBsn": inpBsn,
                "anpIdentificatie": anpIdentificatie,
                "inpANummer": inpANummer,
                "geslachtsnaam": geslachtsnaam,
                "voorvoegselGeslachtsnaam": voorvoegselGeslachtsnaam,
                "voorletters": voorletters,
                "voornamen": voornamen,
                "geslachtsaanduiding": geslachtsaanduiding,
                "geboortedatum": geboortedatum,
                "vestigingsNummer": vestigingsNummer,
                "handelsnaam[]": handelsnaam,
                "verblijfsadres": verblijfsadres,
                "subVerblijfBuitenland": subVerblijfBuitenland
            }
        });
    }
    /**
     * SubjectIdentificatie
     * @returns SubjectIdentificatie
     * @throws ApiError
     */ static subjectidentificatiePostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/subjectidentificaties",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/SubscriberService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class SubscriberService {
    /**
     * Subscriber
     * SendList is a way for Applications to send messages through email or phone.
     * @returns Subscriber SendList is a way for Applications to send messages through email or phone.
     * @throws ApiError
     */ static subscriberGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/hp/subscribers/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Subscriber
     * SendList is a way for Applications to send messages through email or phone.
     * @returns Subscriber SendList is a way for Applications to send messages through email or phone.
     * @throws ApiError
     */ static subscriberPutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/hp/subscribers/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * Subscriber
     * SendList is a way for Applications to send messages through email or phone.
     * @returns Subscriber SendList is a way for Applications to send messages through email or phone.
     * @throws ApiError
     */ static subscriberPatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/hp/subscribers/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * Subscriber
     * SendList is a way for Applications to send messages through email or phone.
     * @returns string SendList is a way for Applications to send messages through email or phone.
     * @throws ApiError
     */ static subscriberDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/hp/subscribers/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Subscriber
     * SendList is a way for Applications to send messages through email or phone.
     * @returns any OK
     * @throws ApiError
     */ static subscriberGetCollection({ sendLists , id , email , resource , dateAcceptedOrganisation , dateAcceptedUser  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/hp/subscribers",
            query: {
                "id": id,
                "email": email,
                "resource": resource,
                "dateAcceptedOrganisation": dateAcceptedOrganisation,
                "dateAcceptedUser": dateAcceptedUser,
                "sendLists": sendLists
            }
        });
    }
    /**
     * Subscriber
     * SendList is a way for Applications to send messages through email or phone.
     * @returns Subscriber SendList is a way for Applications to send messages through email or phone.
     * @throws ApiError
     */ static subscriberPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/hp/subscribers",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/SubverblijfbuitenlandService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class SubverblijfbuitenlandService {
    /**
     * SubVerblijfBuitenland
     * @returns SubVerblijfBuitenland
     * @throws ApiError
     */ static subverblijfbuitenlandGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/subverblijfadressen/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * SubVerblijfBuitenland
     * @returns SubVerblijfBuitenland
     * @throws ApiError
     */ static subverblijfbuitenlandPutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/subverblijfadressen/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * SubVerblijfBuitenland
     * @returns SubVerblijfBuitenland
     * @throws ApiError
     */ static subverblijfbuitenlandPatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/subverblijfadressen/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * SubVerblijfBuitenland
     * @returns string
     * @throws ApiError
     */ static subverblijfbuitenlandDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/subverblijfadressen/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * SubVerblijfBuitenland
     * @returns any OK
     * @throws ApiError
     */ static subverblijfbuitenlandGetCollection({ subAdresBuitenland3 , subAdresBuitenland2 , subAdresBuitenland1 , lndLandnaam , lndLandcode , id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/subverblijfadressen",
            query: {
                "subAdresBuitenland3": subAdresBuitenland3,
                "subAdresBuitenland2": subAdresBuitenland2,
                "subAdresBuitenland1": subAdresBuitenland1,
                "lndLandnaam": lndLandnaam,
                "lndLandcode": lndLandcode,
                "id": id
            }
        });
    }
    /**
     * SubVerblijfBuitenland
     * @returns SubVerblijfBuitenland
     * @throws ApiError
     */ static subverblijfbuitenlandPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/subverblijfadressen",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/VerblijfadresService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class VerblijfadresService {
    /**
     * VerblijfAdres
     * @returns VerblijfAdres
     * @throws ApiError
     */ static verblijfadresGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/verblijfadressen/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * VerblijfAdres
     * @returns VerblijfAdres
     * @throws ApiError
     */ static verblijfadresPutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/verblijfadressen/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * VerblijfAdres
     * @returns VerblijfAdres
     * @throws ApiError
     */ static verblijfadresPatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/verblijfadressen/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * VerblijfAdres
     * @returns string
     * @throws ApiError
     */ static verblijfadresDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/verblijfadressen/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * VerblijfAdres
     * @returns any OK
     * @throws ApiError
     */ static verblijfadresGetCollection({ inpLocatiebeschrijving , aoaHuisnummertoevoeging , aoaHuisletter , aoaHuisnummer , aoaPostcode , gorOpenbareRuimteNaam , wplWoonplaatsNaam , aoaIdentificatie , id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/verblijfadressen",
            query: {
                "inpLocatiebeschrijving": inpLocatiebeschrijving,
                "aoaHuisnummertoevoeging": aoaHuisnummertoevoeging,
                "aoaHuisletter": aoaHuisletter,
                "aoaHuisnummer": aoaHuisnummer,
                "aoaPostcode": aoaPostcode,
                "gorOpenbareRuimteNaam": gorOpenbareRuimteNaam,
                "wplWoonplaatsNaam": wplWoonplaatsNaam,
                "aoaIdentificatie": aoaIdentificatie,
                "id": id
            }
        });
    }
    /**
     * VerblijfAdres
     * @returns VerblijfAdres
     * @throws ApiError
     */ static verblijfadresPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/verblijfadressen",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/VerzendingService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class VerzendingService {
    /**
     * Verzending
     * Set gegevensgroepdata from validated nested data.
     *
     * Usage: include the mixin on the ModelSerializer that has gegevensgroepen.
     * @returns Verzending Set gegevensgroepdata from validated nested data.
     *
     * Usage: include the mixin on the ModelSerializer that has gegevensgroepen.
     * @throws ApiError
     */ static verzendingPutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/drc/v1/verzendingen/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/ZaakService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class ZaakService {
    /**
     * Zaak
     * @returns Zaak
     * @throws ApiError
     */ static zaakGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/zrc/v1/zaken/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Zaak
     * @returns Zaak
     * @throws ApiError
     */ static zaakPutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/zrc/v1/zaken/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * Zaak
     * @returns Zaak
     * @throws ApiError
     */ static zaakPatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/zrc/v1/zaken/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * Zaak
     * @returns string
     * @throws ApiError
     */ static zaakDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/zrc/v1/zaken/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Zaak
     * @returns any OK
     * @throws ApiError
     */ static zaakGetCollection({ registratiedatum , verantwoordelijkeOrganisatie , startdatum , zaaktype , referentienummer , id , url , uuid , identificatie , omschrijving , toelichting , einddatum , einddatumGepland , uiterlijkeEinddatumAfdoening , publicatiedatum , communicatiekanaal , productenOfDiensten , opdrachtgevendeOrganisatie , vertrouwelijkheidaanduiding , betalingsindicatie , betalingsindicatieWeergave , laatsteBetaaldatum , selectielijstklasse , hoofdzaak , deelzaken , zaakobjecten , archiefnominatie , archiefstatus , archiefactiedatum , resultaat , zaakgeometrie , verlenging , opschorting , relevanteAndereZaken , eigenschappen , rollen , status , zaakinformatieobjecten , kenmerken  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/zrc/v1/zaken",
            query: {
                "referentienummer": referentienummer,
                "id": id,
                "url": url,
                "uuid": uuid,
                "identificatie": identificatie,
                "omschrijving": omschrijving,
                "toelichting": toelichting,
                "registratiedatum": registratiedatum,
                "verantwoordelijkeOrganisatie": verantwoordelijkeOrganisatie,
                "startdatum": startdatum,
                "einddatum": einddatum,
                "einddatumGepland": einddatumGepland,
                "uiterlijkeEinddatumAfdoening": uiterlijkeEinddatumAfdoening,
                "publicatiedatum": publicatiedatum,
                "communicatiekanaal": communicatiekanaal,
                "productenOfDiensten[]": productenOfDiensten,
                "opdrachtgevendeOrganisatie": opdrachtgevendeOrganisatie,
                "vertrouwelijkheidaanduiding": vertrouwelijkheidaanduiding,
                "betalingsindicatie": betalingsindicatie,
                "betalingsindicatieWeergave": betalingsindicatieWeergave,
                "laatsteBetaaldatum": laatsteBetaaldatum,
                "selectielijstklasse": selectielijstklasse,
                "hoofdzaak": hoofdzaak,
                "deelzaken[]": deelzaken,
                "zaakobjecten[]": zaakobjecten,
                "archiefnominatie": archiefnominatie,
                "archiefstatus": archiefstatus,
                "archiefactiedatum": archiefactiedatum,
                "resultaat": resultaat,
                "zaaktype": zaaktype,
                "zaakgeometrie": zaakgeometrie,
                "verlenging": verlenging,
                "opschorting": opschorting,
                "relevanteAndereZaken": relevanteAndereZaken,
                "eigenschappen": eigenschappen,
                "rollen": rollen,
                "status": status,
                "zaakinformatieobjecten": zaakinformatieobjecten,
                "kenmerken": kenmerken
            }
        });
    }
    /**
     * Zaak
     * @returns Zaak
     * @throws ApiError
     */ static zaakPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/zrc/v1/zaken",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/ZaakbesluitService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class ZaakbesluitService {
    /**
     * ZaakBesluit
     * @returns ZaakBesluit
     * @throws ApiError
     */ static zaakbesluitGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/zrc/v1/zaakbesluiten/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * ZaakBesluit
     * @returns ZaakBesluit
     * @throws ApiError
     */ static zaakbesluitPutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/zrc/v1/zaakbesluiten/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * ZaakBesluit
     * @returns ZaakBesluit
     * @throws ApiError
     */ static zaakbesluitPatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/zrc/v1/zaakbesluiten/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * ZaakBesluit
     * @returns string
     * @throws ApiError
     */ static zaakbesluitDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/zrc/v1/zaakbesluiten/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * ZaakBesluit
     * @returns any OK
     * @throws ApiError
     */ static zaakbesluitGetCollection({ besluit , zaak , uuid , url , id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/zrc/v1/zaakbesluiten",
            query: {
                "zaak": zaak,
                "besluit": besluit,
                "uuid": uuid,
                "url": url,
                "id": id
            }
        });
    }
    /**
     * ZaakBesluit
     * @returns ZaakBesluit
     * @throws ApiError
     */ static zaakbesluitPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/zrc/v1/zaakbesluiten",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/ZaakBesluitenService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class ZaakBesluitenService {
    /**
     * Zaak Besluiten
     * @returns ZaakBesluit
     * @throws ApiError
     */ static zaakBesluitenGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/zrc/v1/zaken/{zaakbesluit._self.id}/besluiten/{id}/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Zaak Besluiten
     * @returns ZaakBesluit
     * @throws ApiError
     */ static zaakBesluitenPutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/zrc/v1/zaken/{zaakbesluit._self.id}/besluiten/{id}/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * Zaak Besluiten
     * @returns ZaakBesluit
     * @throws ApiError
     */ static zaakBesluitenPatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/zrc/v1/zaken/{zaakbesluit._self.id}/besluiten/{id}/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * Zaak Besluiten
     * @returns string
     * @throws ApiError
     */ static zaakBesluitenDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/zrc/v1/zaken/{zaakbesluit._self.id}/besluiten/{id}/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Zaak Besluiten
     * @returns any OK
     * @throws ApiError
     */ static zaakBesluitenGetCollection({ besluit , zaak , uuid , url , id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/zrc/v1/zaken/{zaakbesluit._self.id}/besluiten/{id}",
            query: {
                "zaak": zaak,
                "besluit": besluit,
                "uuid": uuid,
                "url": url,
                "id": id
            }
        });
    }
    /**
     * Zaak Besluiten
     * @returns ZaakBesluit
     * @throws ApiError
     */ static zaakBesluitenPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/zrc/v1/zaken/{zaakbesluit._self.id}/besluiten/{id}",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/ZaakeigenschapService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class ZaakeigenschapService {
    /**
     * ZaakEigenschap
     * @returns ZaakEigenschap
     * @throws ApiError
     */ static zaakeigenschapGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/zrc/v1/zaakeigenschappen/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * ZaakEigenschap
     * @returns ZaakEigenschap
     * @throws ApiError
     */ static zaakeigenschapPutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/zrc/v1/zaakeigenschappen/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * ZaakEigenschap
     * @returns ZaakEigenschap
     * @throws ApiError
     */ static zaakeigenschapPatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/zrc/v1/zaakeigenschappen/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * ZaakEigenschap
     * @returns string
     * @throws ApiError
     */ static zaakeigenschapDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/zrc/v1/zaakeigenschappen/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * ZaakEigenschap
     * @returns any OK
     * @throws ApiError
     */ static zaakeigenschapGetCollection({ eigenschap , zaak , waarde , naam , uuid , url , id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/zrc/v1/zaakeigenschappen",
            query: {
                "eigenschap": eigenschap,
                "zaak": zaak,
                "waarde": waarde,
                "naam": naam,
                "uuid": uuid,
                "url": url,
                "id": id
            }
        });
    }
    /**
     * ZaakEigenschap
     * @returns ZaakEigenschap
     * @throws ApiError
     */ static zaakeigenschapPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/zrc/v1/zaakeigenschappen",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/ZaakinformatieobjectService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class ZaakinformatieobjectService {
    /**
     * ZaakInformatieObject
     * @returns ZaakInformatieObject
     * @throws ApiError
     */ static zaakinformatieobjectGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/zrc/v1/zaakinformatieobjecten/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * ZaakInformatieObject
     * @returns ZaakInformatieObject
     * @throws ApiError
     */ static zaakinformatieobjectPutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/zrc/v1/zaakinformatieobjecten/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * ZaakInformatieObject
     * @returns ZaakInformatieObject
     * @throws ApiError
     */ static zaakinformatieobjectPatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/zrc/v1/zaakinformatieobjecten/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * ZaakInformatieObject
     * @returns string
     * @throws ApiError
     */ static zaakinformatieobjectDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/zrc/v1/zaakinformatieobjecten/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * ZaakInformatieObject
     * @returns any OK
     * @throws ApiError
     */ static zaakinformatieobjectGetCollection({ zaak , aardRelatieWeergave , informatieobject , registratiedatum , beschrijving , titel , uuid , url , id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/zrc/v1/zaakinformatieobjecten",
            query: {
                "zaak": zaak,
                "informatieobject": informatieobject,
                "registratiedatum": registratiedatum,
                "beschrijving": beschrijving,
                "titel": titel,
                "aardRelatieWeergave": aardRelatieWeergave,
                "uuid": uuid,
                "url": url,
                "id": id
            }
        });
    }
    /**
     * ZaakInformatieObject
     * @returns ZaakInformatieObject
     * @throws ApiError
     */ static zaakinformatieobjectPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/zrc/v1/zaakinformatieobjecten",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/ZaakobjectService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class ZaakobjectService {
    /**
     * ZaakObject
     * @returns ZaakObject
     * @throws ApiError
     */ static zaakobjectGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/zrc/v1/zaakobjecten/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * ZaakObject
     * @returns any OK
     * @throws ApiError
     */ static zaakobjectGetCollection({ zaak , objectType , relatieomschrijving , objectTypeOverige , object , uuid , url , id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/zrc/v1/zaakobjecten",
            query: {
                "zaak": zaak,
                "relatieomschrijving": relatieomschrijving,
                "objectTypeOverige": objectTypeOverige,
                "objectType": objectType,
                "object": object,
                "uuid": uuid,
                "url": url,
                "id": id
            }
        });
    }
    /**
     * ZaakObject
     * @returns ZaakObject
     * @throws ApiError
     */ static zaakobjectPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/zrc/v1/zaakobjecten",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/ZaaktypeService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class ZaaktypeService {
    /**
     * ZaakType
     * @returns ZaakType
     * @throws ApiError
     */ static zaaktypeGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/ztc/v1/zaaktypen/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * ZaakType
     * @returns ZaakType
     * @throws ApiError
     */ static zaaktypePutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/ztc/v1/zaaktypen/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * ZaakType
     * @returns ZaakType
     * @throws ApiError
     */ static zaaktypePatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/ztc/v1/zaaktypen/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * ZaakType
     * @returns string
     * @throws ApiError
     */ static zaaktypeDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/ztc/v1/zaaktypen/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * ZaakType
     * @returns any OK
     * @throws ApiError
     */ static zaaktypeGetCollection({ gerelateerdeZaaktypen , besluittypen , catalogus , referentieproces , versiedatum , beginGeldigheid , productenOfDiensten , publicatieIndicatie , verlengingMogelijk , opschortingEnAanhoudingMogelijk , doorlooptijd , handelingBehandelaar , onderwerp , handelingInitiator , indicatieInternOfExtern , aanleiding , doel , vertrouwelijkheidaanduiding , identificatie , omschrijving , roltypen , informatieobjecttypen , eigenschappen , resultaattypen , statustypen , concept , eindeGeldigheid , selectielijstProcestype , verantwoordingsrelatie , publicatietekst , trefwoorden , verlengingstermijn , servicenorm , toelichting , url , id , omschrijvingGeneriek  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/ztc/v1/zaaktypen",
            query: {
                "gerelateerdeZaaktypen": gerelateerdeZaaktypen,
                "besluittypen": besluittypen,
                "roltypen": roltypen,
                "informatieobjecttypen": informatieobjecttypen,
                "eigenschappen": eigenschappen,
                "resultaattypen": resultaattypen,
                "statustypen": statustypen,
                "catalogus": catalogus,
                "referentieproces": referentieproces,
                "concept": concept,
                "versiedatum": versiedatum,
                "eindeGeldigheid": eindeGeldigheid,
                "beginGeldigheid": beginGeldigheid,
                "selectielijstProcestype": selectielijstProcestype,
                "productenOfDiensten[]": productenOfDiensten,
                "verantwoordingsrelatie[]": verantwoordingsrelatie,
                "publicatietekst": publicatietekst,
                "publicatieIndicatie": publicatieIndicatie,
                "trefwoorden[]": trefwoorden,
                "verlengingstermijn": verlengingstermijn,
                "verlengingMogelijk": verlengingMogelijk,
                "opschortingEnAanhoudingMogelijk": opschortingEnAanhoudingMogelijk,
                "servicenorm": servicenorm,
                "doorlooptijd": doorlooptijd,
                "handelingBehandelaar": handelingBehandelaar,
                "onderwerp": onderwerp,
                "handelingInitiator": handelingInitiator,
                "indicatieInternOfExtern": indicatieInternOfExtern,
                "toelichting": toelichting,
                "aanleiding": aanleiding,
                "doel": doel,
                "vertrouwelijkheidaanduiding": vertrouwelijkheidaanduiding,
                "identificatie": identificatie,
                "url": url,
                "id": id,
                "omschrijvingGeneriek": omschrijvingGeneriek,
                "omschrijving": omschrijving
            }
        });
    }
    /**
     * ZaakType
     * @returns ZaakType
     * @throws ApiError
     */ static zaaktypePostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/ztc/v1/zaaktypen",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/ZaaktypeinformatieobjecttypeService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class ZaaktypeinformatieobjecttypeService {
    /**
     * ZaakTypeInformatieObjectType
     * @returns ZaakTypeInformatieObjectType
     * @throws ApiError
     */ static zaaktypeinformatieobjecttypeGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/ztc/v1/zaaktype-informatieobjecttypen/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * ZaakTypeInformatieObjectType
     * @returns ZaakTypeInformatieObjectType
     * @throws ApiError
     */ static zaaktypeinformatieobjecttypePutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/ztc/v1/zaaktype-informatieobjecttypen/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * ZaakTypeInformatieObjectType
     * @returns ZaakTypeInformatieObjectType
     * @throws ApiError
     */ static zaaktypeinformatieobjecttypePatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/ztc/v1/zaaktype-informatieobjecttypen/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * ZaakTypeInformatieObjectType
     * @returns string
     * @throws ApiError
     */ static zaaktypeinformatieobjecttypeDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/ztc/v1/zaaktype-informatieobjecttypen/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * ZaakTypeInformatieObjectType
     * @returns any OK
     * @throws ApiError
     */ static zaaktypeinformatieobjecttypeGetCollection({ richting , volgnummer , informatieobjecttype , zaaktype , statustype , url , id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/ztc/v1/zaaktype-informatieobjecttypen",
            query: {
                "statustype": statustype,
                "richting": richting,
                "volgnummer": volgnummer,
                "informatieobjecttype": informatieobjecttype,
                "zaaktype": zaaktype,
                "url": url,
                "id": id
            }
        });
    }
    /**
     * ZaakTypeInformatieObjectType
     * @returns ZaakTypeInformatieObjectType
     * @throws ApiError
     */ static zaaktypeinformatieobjecttypePostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/ztc/v1/zaaktype-informatieobjecttypen",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/ZaaktypeinformatieobjecttypePublishService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class ZaaktypeinformatieobjecttypePublishService {
    /**
     * ZaakTypeInformatieObjectType Publish
     * @returns ZaakTypeInformatieObjectType
     * @throws ApiError
     */ static zaaktypeinformatieobjecttypePublishGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/ztc/v1/zaaktype-informatieobjecttypen/id/publish/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * ZaakTypeInformatieObjectType Publish
     * @returns ZaakTypeInformatieObjectType
     * @throws ApiError
     */ static zaaktypeinformatieobjecttypePublishPutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/ztc/v1/zaaktype-informatieobjecttypen/id/publish/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * ZaakTypeInformatieObjectType Publish
     * @returns ZaakTypeInformatieObjectType
     * @throws ApiError
     */ static zaaktypeinformatieobjecttypePublishPatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/ztc/v1/zaaktype-informatieobjecttypen/id/publish/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * ZaakTypeInformatieObjectType Publish
     * @returns string
     * @throws ApiError
     */ static zaaktypeinformatieobjecttypePublishDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/ztc/v1/zaaktype-informatieobjecttypen/id/publish/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * ZaakTypeInformatieObjectType Publish
     * @returns any OK
     * @throws ApiError
     */ static zaaktypeinformatieobjecttypePublishGetCollection({ richting , volgnummer , informatieobjecttype , zaaktype , statustype , url , id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/ztc/v1/zaaktype-informatieobjecttypen/id/publish",
            query: {
                "statustype": statustype,
                "richting": richting,
                "volgnummer": volgnummer,
                "informatieobjecttype": informatieobjecttype,
                "zaaktype": zaaktype,
                "url": url,
                "id": id
            }
        });
    }
    /**
     * ZaakTypeInformatieObjectType Publish
     * @returns ZaakTypeInformatieObjectType
     * @throws ApiError
     */ static zaaktypeinformatieobjecttypePublishPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/ztc/v1/zaaktype-informatieobjecttypen/id/publish",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/ZaaktypePublishService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class ZaaktypePublishService {
    /**
     * ZaakType Publish
     * @returns ZaakType
     * @throws ApiError
     */ static zaaktypePublishGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/ztc/v1/zaaktypen/id/publish/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * ZaakType Publish
     * @returns ZaakType
     * @throws ApiError
     */ static zaaktypePublishPutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/ztc/v1/zaaktypen/id/publish/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * ZaakType Publish
     * @returns ZaakType
     * @throws ApiError
     */ static zaaktypePublishPatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/ztc/v1/zaaktypen/id/publish/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * ZaakType Publish
     * @returns string
     * @throws ApiError
     */ static zaaktypePublishDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/ztc/v1/zaaktypen/id/publish/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * ZaakType Publish
     * @returns any OK
     * @throws ApiError
     */ static zaaktypePublishGetCollection({ gerelateerdeZaaktypen , besluittypen , catalogus , referentieproces , versiedatum , beginGeldigheid , productenOfDiensten , publicatieIndicatie , verlengingMogelijk , opschortingEnAanhoudingMogelijk , doorlooptijd , handelingBehandelaar , onderwerp , handelingInitiator , indicatieInternOfExtern , aanleiding , doel , vertrouwelijkheidaanduiding , identificatie , omschrijving , roltypen , informatieobjecttypen , eigenschappen , resultaattypen , statustypen , concept , eindeGeldigheid , selectielijstProcestype , verantwoordingsrelatie , publicatietekst , trefwoorden , verlengingstermijn , servicenorm , toelichting , url , id , omschrijvingGeneriek  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/ztc/v1/zaaktypen/id/publish",
            query: {
                "gerelateerdeZaaktypen": gerelateerdeZaaktypen,
                "besluittypen": besluittypen,
                "roltypen": roltypen,
                "informatieobjecttypen": informatieobjecttypen,
                "eigenschappen": eigenschappen,
                "resultaattypen": resultaattypen,
                "statustypen": statustypen,
                "catalogus": catalogus,
                "referentieproces": referentieproces,
                "concept": concept,
                "versiedatum": versiedatum,
                "eindeGeldigheid": eindeGeldigheid,
                "beginGeldigheid": beginGeldigheid,
                "selectielijstProcestype": selectielijstProcestype,
                "productenOfDiensten[]": productenOfDiensten,
                "verantwoordingsrelatie[]": verantwoordingsrelatie,
                "publicatietekst": publicatietekst,
                "publicatieIndicatie": publicatieIndicatie,
                "trefwoorden[]": trefwoorden,
                "verlengingstermijn": verlengingstermijn,
                "verlengingMogelijk": verlengingMogelijk,
                "opschortingEnAanhoudingMogelijk": opschortingEnAanhoudingMogelijk,
                "servicenorm": servicenorm,
                "doorlooptijd": doorlooptijd,
                "handelingBehandelaar": handelingBehandelaar,
                "onderwerp": onderwerp,
                "handelingInitiator": handelingInitiator,
                "indicatieInternOfExtern": indicatieInternOfExtern,
                "toelichting": toelichting,
                "aanleiding": aanleiding,
                "doel": doel,
                "vertrouwelijkheidaanduiding": vertrouwelijkheidaanduiding,
                "identificatie": identificatie,
                "url": url,
                "id": id,
                "omschrijvingGeneriek": omschrijvingGeneriek,
                "omschrijving": omschrijving
            }
        });
    }
    /**
     * ZaakType Publish
     * @returns ZaakType
     * @throws ApiError
     */ static zaaktypePublishPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/ztc/v1/zaaktypen/id/publish",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/services/ZaakZaakeigenschappenService.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class ZaakZaakeigenschappenService {
    /**
     * Zaak Zaakeigenschappen
     * @returns ZaakEigenschap
     * @throws ApiError
     */ static zaakZaakeigenschappenGetItem({ id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/zrc/v1/zaken/{zaakeigenschap._self.id}/zaakeigenschappen/{id}/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Zaak Zaakeigenschappen
     * @returns ZaakEigenschap
     * @throws ApiError
     */ static zaakZaakeigenschappenPutItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/zrc/v1/zaken/{zaakeigenschap._self.id}/zaakeigenschappen/{id}/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * Zaak Zaakeigenschappen
     * @returns ZaakEigenschap
     * @throws ApiError
     */ static zaakZaakeigenschappenPatchItem({ id , requestBody  }) {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/zrc/v1/zaken/{zaakeigenschap._self.id}/zaakeigenschappen/{id}/{id}",
            path: {
                "id": id
            },
            body: requestBody,
            mediaType: "application/json"
        });
    }
    /**
     * Zaak Zaakeigenschappen
     * @returns string
     * @throws ApiError
     */ static zaakZaakeigenschappenDeleteItem({ id  }) {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/zrc/v1/zaken/{zaakeigenschap._self.id}/zaakeigenschappen/{id}/{id}",
            path: {
                "id": id
            }
        });
    }
    /**
     * Zaak Zaakeigenschappen
     * @returns any OK
     * @throws ApiError
     */ static zaakZaakeigenschappenGetCollection({ eigenschap , zaak , waarde , naam , uuid , url , id  }) {
        return __request(OpenAPI, {
            method: "GET",
            url: "/zrc/v1/zaken/{zaakeigenschap._self.id}/zaakeigenschappen/{id}",
            query: {
                "eigenschap": eigenschap,
                "zaak": zaak,
                "waarde": waarde,
                "naam": naam,
                "uuid": uuid,
                "url": url,
                "id": id
            }
        });
    }
    /**
     * Zaak Zaakeigenschappen
     * @returns ZaakEigenschap
     * @throws ApiError
     */ static zaakZaakeigenschappenPostItem({ requestBody  }) {
        return __request(OpenAPI, {
            method: "POST",
            url: "/zrc/v1/zaken/{zaakeigenschap._self.id}/zaakeigenschappen/{id}",
            body: requestBody,
            mediaType: "application/json"
        });
    }
}

;// CONCATENATED MODULE: ./src/generated/index.ts
/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 























































































/***/ })

};
;