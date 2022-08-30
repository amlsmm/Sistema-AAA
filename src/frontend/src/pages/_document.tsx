/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/display-name */
/* eslint-disable react/no-danger */
import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps
  } from 'next/document';
  
  
  import { AppConfig } from '@utils/AppConfig';
  
  class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
      const originalRenderPage = ctx.renderPage;
      const initialProps = await Document.getInitialProps(ctx);
      try {
        ctx.renderPage = () =>
          originalRenderPage({
            enhanceApp: (App) => (props) => <App {...props} />
          });
      } catch (error) {
        console.log(error);
      }
      return {
        ...initialProps,
        styles: <>{initialProps.styles}</>
      };
    }
  
    render() {
      return (
        <Html lang={AppConfig.locale}>
          <Head>
            <meta charSet="utf-8" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  
  export default MyDocument;
  