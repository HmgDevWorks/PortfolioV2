import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Política de cookies | Héctor Martín García',
    robots: { index: true, follow: true },
};

const GOOGLE_POLICY = 'https://policies.google.com/technologies/partner-sites';

const content = {
    es: {
        title: 'Política de cookies',
        back: 'Volver al inicio',
        backHref: '/',
        sections: [
            {
                h: 'Responsable',
                p: 'Héctor Martín García. Contacto: HmgDevWorks@gmail.com.',
            },
            {
                h: 'Qué cookies usa esta web',
                p: 'Google Analytics, cargado mediante Google Tag Manager: cookies _ga y _ga_<id>. Sirven para contar y analizar las visitas. Proveedor: Google Ireland Ltd. Duración: hasta 2 años. Son cookies de terceros y solo se instalan después de que las aceptes.',
            },
            {
                h: 'Analítica sin cookies',
                p: 'Vercel Web Analytics cuenta las visitas sin usar cookies.',
            },
            {
                h: 'Tu elección',
                p: 'Tu elección se guarda en el almacenamiento local (localStorage) de tu navegador con la clave cookie-consent. Es necesaria para recordarla.',
            },
            {
                h: 'Cómo retirar el consentimiento',
                p: 'Pulsa «Configurar cookies» en el pie de página, o borra los datos de navegación de tu navegador.',
            },
        ],
        googleText: 'Más información sobre cómo usa Google los datos:',
        updated: 'Última actualización: 19 de noviembre de 2026',
    },
    en: {
        title: 'Cookie policy',
        back: 'Back to home',
        backHref: '/?lang=en',
        sections: [
            {
                h: 'Controller',
                p: 'Héctor Martín García. Contact: HmgDevWorks@gmail.com.',
            },
            {
                h: 'Cookies used by this site',
                p: 'Google Analytics, loaded through Google Tag Manager: _ga and _ga_<id> cookies. Purpose: count and analyse visits. Provider: Google Ireland Ltd. Duration: up to 2 years. They are third-party cookies and are only set after you accept them.',
            },
            {
                h: 'Cookie-free analytics',
                p: 'Vercel Web Analytics counts visits without using cookies.',
            },
            {
                h: 'Your choice',
                p: "Your choice is stored in your browser's localStorage under the key cookie-consent. It is necessary to remember it.",
            },
            {
                h: 'How to withdraw consent',
                p: 'Click «Cookie settings» in the footer, or clear your browser data.',
            },
        ],
        googleText: 'More information on how Google uses data:',
        updated: 'Last updated: November 19, 2026',
    },
};

export default async function CookiesPage({
    searchParams,
}: {
    searchParams: Promise<{ lang?: string }>;
}) {
    const { lang } = await searchParams;
    const t = content[lang === 'en' ? 'en' : 'es'];

    return (
        <main className="min-h-screen bg-slate-950 text-slate-300">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
                <h1 className="text-3xl font-bold text-white mb-8">{t.title}</h1>
                {t.sections.map((s) => (
                    <section key={s.h} className="mb-6">
                        <h2 className="text-xl font-semibold text-slate-100 mb-2">{s.h}</h2>
                        <p>{s.p}</p>
                    </section>
                ))}
                <p className="mb-6">
                    {t.googleText}{' '}
                    <a
                        href={GOOGLE_POLICY}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 underline hover:text-emerald-300 break-all"
                    >
                        {GOOGLE_POLICY}
                    </a>
                </p>
                <p className="text-sm text-slate-400 mb-8">{t.updated}</p>
                <Link href={t.backHref} className="text-emerald-400 underline hover:text-emerald-300">
                    {t.back}
                </Link>
            </div>
        </main>
    );
}
