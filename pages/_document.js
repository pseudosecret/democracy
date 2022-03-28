import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="preload"
                        href="../public/fonts/Russian.ttf"
                        as="font"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="preload"
                        href="../public/fonts/ZnikomitNo25.otf"
                        as="font"
                        crossOrigin="anonymous"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument