import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
@font-face {
  font-family: 'iconfont';  /* project id 1730639 */
  src: url('//at.alicdn.com/t/font_1730639_1rfju8oaw2a.eot');
  src: url('//at.alicdn.com/t/font_1730639_1rfju8oaw2a.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1730639_1rfju8oaw2a.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1730639_1rfju8oaw2a.woff') format('woff'),
  url('//at.alicdn.com/t/font_1730639_1rfju8oaw2a.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1730639_1rfju8oaw2a.svg#iconfont') format('svg');
}
.iconfont{
font-family:"iconfont" !important;
font-size:16px;font-style:normal;
-webkit-font-smoothing: antialiased;
-webkit-text-stroke-width: 0.2px;
-moz-osx-font-smoothing: grayscale;}
`

