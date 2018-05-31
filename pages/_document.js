
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'


export default class HolisticDocument extends Document {

    static getInitialProps({ renderPage }) {
        const { html, head, errorHtml, chunks } = renderPage()
        const styles = flush()
        return { html, head, errorHtml, chunks, styles }
    }

    render() {
        return (
            <html>
                <Head>
                    <meta charSet="utf-8" />
                    
                    <link rel="apple-touch-icon" sizes="57x57" href="/static/favicon/apple-icon-57x57.png" />
                    <link rel="apple-touch-icon" sizes="60x60" href="/static/favicon/apple-icon-60x60.png" />
                    <link rel="apple-touch-icon" sizes="72x72" href="/static/favicon/apple-icon-72x72.png" />
                    <link rel="apple-touch-icon" sizes="76x76" href="/static/favicon/apple-icon-76x76.png" />
                    <link rel="apple-touch-icon" sizes="114x114" href="/static/favicon/apple-icon-114x114.png" />
                    <link rel="apple-touch-icon" sizes="120x120" href="/static/favicon/apple-icon-120x120.png" />
                    <link rel="apple-touch-icon" sizes="144x144" href="/static/favicon/apple-icon-144x144.png" />
                    <link rel="apple-touch-icon" sizes="152x152" href="/static/favicon/apple-icon-152x152.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-icon-180x180.png" />
                    <link rel="icon" type="image/png" sizes="192x192"  href="/static/favicon/android-icon-192x192.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon/favicon-96x96.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
                    <link rel="manifest" href="/static/favicon/manifest.json" />
                    <meta name="msapplication-TileColor" content="#ffffff" />
                    <meta name="msapplication-TileImage" content="/static/favicon/ms-icon-144x144.png" />
                    <meta name="theme-color" content="#ffffff" />

                    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

                    <title>Holistic SMM Agency</title>

                    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
		            <link rel="stylesheet" href="/static/css/main.css" />
                </Head>
                <body>
            
                    <Main />

                    <div>
                        <script src="/static/js/jquery.min.js"></script>
                        <script src="/static/js/skel.min.js"></script>
                        <script src="/static/js/util.js"></script>
                        <script src="/static/js/main.js"></script>
                    </div>

                    <NextScript />
                </body>
            </html>
        )
    }
}