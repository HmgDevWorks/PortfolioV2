'use client';

import { useCallback, useEffect, useState } from 'react';
import Script from 'next/script';

// Google Tag Manager container of the portfolio (public ID, not a secret).
const GTM_ID = 'GTM-P8K46Z5D';
const STORAGE_KEY = 'cookie-consent';
const OPEN_EVENT = 'cookie-consent:open';

type Choice = 'granted' | 'denied' | null;

interface CookieConsentProps {
    language: 'es' | 'en';
}

const content = {
    es: {
        label: 'Aviso de cookies',
        text: 'Esta web usa cookies de Google Analytics para contar las visitas, solo si las aceptas.',
        policy: 'Política de cookies',
        policyHref: '/cookies',
        accept: 'Aceptar',
        reject: 'Rechazar',
    },
    en: {
        label: 'Cookie notice',
        text: 'This site uses Google Analytics cookies to count visits, only if you accept them.',
        policy: 'Cookie policy',
        policyHref: '/cookies?lang=en',
        accept: 'Accept',
        reject: 'Reject',
    },
};

function readChoice(): Choice {
    try {
        const value = window.localStorage.getItem(STORAGE_KEY);
        return value === 'granted' || value === 'denied' ? value : null;
    } catch {
        return null;
    }
}

function writeChoice(value: Exclude<Choice, null>) {
    try {
        window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
        // Storage unavailable: the choice just is not remembered.
    }
}

function clearChoice() {
    try {
        window.localStorage.removeItem(STORAGE_KEY);
    } catch {
        // Nothing to clear.
    }
}

export default function CookieConsent({ language }: CookieConsentProps) {
    const [choice, setChoice] = useState<Choice>(null);
    const [ready, setReady] = useState(false);
    const [open, setOpen] = useState(false);
    const t = content[language];

    useEffect(() => {
        const stored = readChoice();
        setChoice(stored);
        setOpen(stored === null);
        setReady(true);
    }, []);

    useEffect(() => {
        const reopen = () => {
            clearChoice();
            setOpen(true);
        };
        window.addEventListener(OPEN_EVENT, reopen);
        return () => window.removeEventListener(OPEN_EVENT, reopen);
    }, []);

    const decide = useCallback(
        (value: Exclude<Choice, null>) => {
            const wasGranted = choice === 'granted';
            writeChoice(value);
            setChoice(value);
            setOpen(false);
            // GTM is already running in this page: reload so it stops.
            if (value === 'denied' && wasGranted) {
                window.location.reload();
            }
        },
        [choice],
    );

    if (!ready) return null;

    const buttonClass =
        'flex-1 sm:flex-none px-5 py-2 rounded-lg border border-slate-500 bg-slate-800 text-sm font-medium text-slate-100 hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition-colors';

    return (
        <>
            {choice === 'granted' && (
                <>
                    <Script
                        src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
                        strategy="afterInteractive"
                    />
                    <Script id="google-tag" strategy="afterInteractive">
                        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        `}
                    </Script>
                </>
            )}
            {open && (
                <div
                    role="region"
                    aria-label={t.label}
                    className="fixed bottom-0 inset-x-0 z-50 p-3 sm:p-4 print:hidden"
                >
                    <div className="max-w-3xl mx-auto bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-4 flex flex-col sm:flex-row sm:items-center gap-4">
                        <p className="text-sm text-slate-200 flex-1">
                            {t.text}{' '}
                            <a
                                href={t.policyHref}
                                className="text-emerald-400 underline hover:text-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
                            >
                                {t.policy}
                            </a>
                        </p>
                        <div className="flex gap-3">
                            <button type="button" className={buttonClass} onClick={() => decide('denied')}>
                                {t.reject}
                            </button>
                            <button type="button" className={buttonClass} onClick={() => decide('granted')}>
                                {t.accept}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
