import type { Metadata } from 'next';
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'О нас | MySite',
    description: 'Узнайте больше о нашей команде и миссии.',
    openGraph: {
        title: 'О нас | MySite',
        description: 'Узнайте больше о нашей команде и миссии.',
        images: ['/og-about.png'],
    },
};

export default function AboutPage() {
    return (
        <main>
            <h1>О нас</h1>
            <p>Мы создаём современные веб-приложения.</p>
        </main>
    );
}