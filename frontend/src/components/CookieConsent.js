import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ReactCookieConsent from "react-cookie-consent";
const CookieConsentBanner = () => {
    return (_jsxs(ReactCookieConsent, { location: "bottom", buttonText: "Accept", declineButtonText: "Decline", cookieName: "lakehouse_cookie_consent", style: { background: "#4A5568" }, buttonStyle: {
            background: "#ffffff",
            color: "#4A5568",
            fontSize: "14px",
            borderRadius: "4px",
            padding: "8px 16px"
        }, declineButtonStyle: {
            background: "transparent",
            border: "1px solid #ffffff",
            color: "#ffffff",
            fontSize: "14px",
            borderRadius: "4px",
            padding: "8px 16px"
        }, expires: 150, children: ["We use cookies to enhance your experience on our website. By continuing to use this site, you agree to our use of cookies.", _jsx("span", { style: { fontSize: "12px", display: "block", marginTop: "8px" }, children: _jsx("a", { href: "/privacy", style: { color: "#ffffff", textDecoration: "underline" }, children: "Learn more in our Privacy Policy" }) })] }));
};
export default CookieConsentBanner;
