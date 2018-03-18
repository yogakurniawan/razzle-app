import React, { Component } from 'react';
import { ServerStyleSheet, injectGlobal } from 'styled-components'
import { AfterRoot, AfterData } from '@jaredpalmer/after';
import styledSanitize from 'styled-sanitize'

injectGlobal`
  ${styledSanitize}

  html {
    -webkit-tap-highlight-color: transparent;
    -webkit-tap-highlight-color: transparent;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%
  }

  body {
    font-family: Circular,"Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 1.43;
    color: #495057;
    background-color: #fff;
  }

  @font-face {
    font-family: Airglyphs;
    src: url("https://a0.muscache.com/airbnb/static/airbnb-o2/fonts/airglyphs-bb873ab4254c83409cf1fa6f4759fa3e.woff") format("woff"),url("https://a0.muscache.com/airbnb/static/airbnb-o2/fonts/airglyphs-d90404cb884b74a27264dda25857850d.ttf") format("truetype");
    font-weight: normal;
    font-style: normal
  }

  @font-face {
      font-family: Circular;
      src: url("https://a0.muscache.com/airbnb/static/airbnb-o2/fonts/Circular_Air-Book-e94c982d7dee01d7e4424157ac9ed819.woff2") format("woff2"),url("https://a0.muscache.com/airbnb/static/airbnb-o2/fonts/Circular_Air-Book-030dcebde359eb3be354ab21c34a89ce.woff") format("woff");
      font-weight: normal;
      font-style: normal
  }

  @font-face {
      font-family: Circular;
      src: url("https://a0.muscache.com/airbnb/static/airbnb-o2/fonts/Circular_Air-Book_Italic-4909b413294f9048153d6dee23438b24.woff2") format("woff2"),url("https://a0.muscache.com/airbnb/static/airbnb-o2/fonts/Circular_Air-Book_Italic-1db902f5b85bbb0964e2994434edbe16.woff") format("woff");
      font-weight: normal;
      font-style: italic
  }

  @font-face {
      font-family: Circular;
      src: url("https://a0.muscache.com/airbnb/static/airbnb-o2/fonts/Circular_Air-Bold-367d5e0d3e7021de6510f7824d33188f.woff2") format("woff2"),url("https://a0.muscache.com/airbnb/static/airbnb-o2/fonts/Circular_Air-Bold-ba3e389678777af817295255589ca6f5.woff") format("woff");
      font-weight: 700;
      font-style: normal
  }

  @font-face {
      font-family: Circular;
      src: url("https://a0.muscache.com/airbnb/static/airbnb-o2/fonts/Circular_Air-Light-fa2e694fc4a7eb77a6aecccef03a757d.woff2") format("woff2"),url("https://a0.muscache.com/airbnb/static/airbnb-o2/fonts/Circular_Air-Light-5f8705e686deab27d58b7cf0e6d5cfa2.woff") format("woff");
      font-weight: 300;
      font-style: normal
  }

  @font-face {
      font-family: Circular;
      src: url("https://a0.muscache.com/airbnb/static/airbnb-o2/fonts/Circular_Air-Light-fa2e694fc4a7eb77a6aecccef03a757d.woff2") format("woff2"),url("https://a0.muscache.com/airbnb/static/airbnb-o2/fonts/Circular_Air-Light-5f8705e686deab27d58b7cf0e6d5cfa2.woff") format("woff");
      font-weight: 200;
      font-style: normal
  }

  @font-face {
      font-family: Circular;
      unicode-range: U+F0000-FFFFD;
      src: url("https://a0.muscache.com/airbnb/static/airbnb-o2/fonts/airmojix-Regular-93afa08e47cd30fea8342b27192ad20d.woff2") format("woff2"),url("https://a0.muscache.com/airbnb/static/airbnb-o2/fonts/airmojix-Regular-93f7838e9580c950b91207af9fd92a28.woff") format("woff");
      font-weight: normal
  }

  @font-face {
      font-family: Circular;
      unicode-range: U+F0000-FFFFD;
      src: url("https://a0.muscache.com/airbnb/static/airbnb-o2/fonts/airmojix-Regular-93afa08e47cd30fea8342b27192ad20d.woff2") format("woff2"),url("https://a0.muscache.com/airbnb/static/airbnb-o2/fonts/airmojix-Regular-93f7838e9580c950b91207af9fd92a28.woff") format("woff");
      font-weight: 700
  }

  @font-face {
      font-family: Circular;
      unicode-range: U+F0000-FFFFD;
      src: url("https://a0.muscache.com/airbnb/static/airbnb-o2/fonts/airmojix-Regular-93afa08e47cd30fea8342b27192ad20d.woff2") format("woff2"),url("https://a0.muscache.com/airbnb/static/airbnb-o2/fonts/airmojix-Regular-93f7838e9580c950b91207af9fd92a28.woff") format("woff");
      font-weight: 300
  }

  @font-face {
    font-family: Circular;
    unicode-range: U+F0000-FFFFD;
    src: url("https://a0.muscache.com/airbnb/static/airbnb-o2/fonts/airmojix-Regular-93afa08e47cd30fea8342b27192ad20d.woff2") format("woff2"),url("https://a0.muscache.com/airbnb/static/airbnb-o2/fonts/airmojix-Regular-93f7838e9580c950b91207af9fd92a28.woff") format("woff");
    font-weight: 200
  }

  @font-face {
    font-family: Airmoji_Standalone;
    src: url("https://a0.muscache.com/airbnb/static/airbnb-o2/fonts/airmojix-Regular-93afa08e47cd30fea8342b27192ad20d.woff2") format("woff2"),url("https://a0.muscache.com/airbnb/static/airbnb-o2/fonts/airmojix-Regular-93f7838e9580c950b91207af9fd92a28.woff") format("woff");
    font-weight: normal;
    font-style: normal
  }

  @font-face {
    font-family: Fortescue;
    src: url("https://a0.muscache.com/airbnb/static/airbnb-o2/fonts/Fortescue-Regular-Web-6e2cb51423d213ab44f0e646c9e384b0.woff2") format("woff2"),url("https://a0.muscache.com/airbnb/static/airbnb-o2/fonts/Fortescue-Regular-Web-a2424660cc9db2f380f201150e988c41.woff") format("woff");
    font-weight: normal;
    font-style: normal
  }

  @font-face {
    font-family: Fortescue;
    src: url("https://a0.muscache.com/airbnb/static/airbnb-o2/fonts/Fortescue-SemiBold-Web-09b7b301ac8d6007b9b66c700a694872.woff2") format("woff2"),url("https://a0.muscache.com/airbnb/static/airbnb-o2/fonts/Fortescue-SemiBold-Web-69b2266e83410df6465ba8ffffc5b19e.woff") format("woff");
    font-weight: 600;
    font-style: normal
  }
`

class Document extends Component {
  static getInitialProps({ assets, data, renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { assets, data, ...page, styleTags };
  }

  render() {
    const { helmet, assets, data, styleTags } = this.props;
    // get attributes from React Helmet
    const htmlAttrs = helmet.htmlAttributes.toComponent();
    const bodyAttrs = helmet.bodyAttributes.toComponent();

    return (
      <html {...htmlAttrs}>
        <head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta charSet="utf-8" />
          <title>Welcome to the Afterparty</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="/static/fontawesome/css/fa-solid.min.css" />          
          {helmet.title.toComponent()}
          {helmet.meta.toComponent()}
          {helmet.link.toComponent()}
          {/** here is where we put our Styled Components styleTags... */}
          {styleTags}
        </head>
        <body {...bodyAttrs}>
          <AfterRoot />
          <AfterData data={data} />
          <script
            type="text/javascript"
            src={assets.client.js}
            defer
            crossOrigin="anonymous"
          />
        </body>
      </html>
    );
  }
}

export default Document