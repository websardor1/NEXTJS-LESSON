import localFont from 'next/font/local'

export const myFont = localFont({
    src: './my-font.woff2',
    declarations: [{ prop: 'font-family', value: 'myFont' }],
})