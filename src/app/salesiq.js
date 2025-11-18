"use client";
import { useEffect } from "react";

export default function Salesiq({ widgetCode, domain }) {
  useEffect(() => {
    if (!widgetCode) return;

    window.$zoho = window.$zoho || {};
    window.$zoho.salesiq = {
      widgetcode: widgetCode,
      values: {},
      ready: function () {},
    };

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "zsiqscript";
    script.defer = true;
    script.src = domain;

    document.body.appendChild(script);
  }, [widgetCode, domain]);

  if (!widgetCode) {
    return <div style={{ color: "red" }}>Need to pass widget code</div>;
  }

  return null;
}
