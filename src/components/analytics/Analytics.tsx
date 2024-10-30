import Script from "next/script";

export default function Analytics() {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=AW-11343896790`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-11343896790');`}
      </Script>

      <Script id="gtag-conversion-cad" strategy="afterInteractive">
        {`
          function gtag_report_conversion_cad(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
                'send_to': 'AW-11343896790/LBnfCJL6l9cZENbBmKEq',
                'value': 650.0,
                'currency': 'BRL',
                'event_callback': callback
            });
            return false;
          }
        `}
      </Script>

      <Script id="gtag-conversion-gastro" strategy="afterInteractive">
        {`
          function gtag_report_conversion_gastro(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-11343896790/kwFNCOWCk9cZENbBmKEq',
      'event_callback': callback
  });
  return false;
}
        `}
      </Script>

      <Script id="gtag-conversion-geral" strategy="afterInteractive">
        {`
          function gtag_report_conversion_geral(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-11343896790/TNtNCNXAmtcZENbBmKEq',
      'event_callback': callback
  });
  return false;
}
        `}
      </Script>

      <Script id="gtag-conversion-hepatologia" strategy="afterInteractive">
        {`
          function gtag_report_conversion_hepatologia(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-11343896790/SBl6CND8ktcZENbBmKEq',
      'event_callback': callback
  });
  return false;
}
        `}
      </Script>

      <Script id="gtag-conversion-pancreas" strategy="afterInteractive">
        {`
          function gtag_report_conversion_pancreas(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-11343896790/VhGVCJmBk9cZENbBmKEq',
      'event_callback': callback
  });
  return false;
}
        `}
      </Script>
    </>
  );
}
