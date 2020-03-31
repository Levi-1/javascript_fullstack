import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
class myDocument extends Document {

    static async getInitialProps(ctx) { // 类比为 使用mydocument 来 代替 Doucment
        const originalRenderPage = ctx.renderPage
        const sheet = new ServerStyleSheet()
        try {
            ctx.renderPage = () => originalRenderPage({
                enhanceApp: App => (props) => sheet.collectStyles(<App {...props} />)
            })
            const props = await Document.getInitialProps(ctx)
            return {
                ...props,
                styles: <>{props.styles}{sheet.getStyleElement()}</>
            }
        } finally {
            sheet.seal()
        }

    }

    render() {
        return (<Html>
            <Head>
            </Head>
            <body>
                <Main></Main>
                <NextScript></NextScript>
            </body>
        </Html>)
    }
}

export default myDocument