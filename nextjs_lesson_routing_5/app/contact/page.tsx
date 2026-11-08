import type { Metadata } from 'next';
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Инфо | MySite',
    description: 'Узнайте больше о нашей команде и миссии.',
    openGraph: {
        title: 'О нас | MySite',
        description: 'Узнайте больше о нашей команде и миссии.',
        images: ['/og-about.png'],
    },
};

export default function ContactPage() {
    return (
        <main>
            <h1>Инфо</h1>

            <Link href="/">Main</Link>
        </main>
    );
}