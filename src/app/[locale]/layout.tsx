import { Metadata } from "next";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import ReduxProvider from "@/components/ReduxProvider/ReduxProvider";
import { Toaster } from "react-hot-toast";
import "../globals.css";

export const metadata: Metadata = {
  title: "Localized Frontend-Task",
  description: "Frontend-Task with Localization Support",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale?: string | Promise<string> };
}) {
  let resolvedLocale = 'en'; // القيمة الافتراضية

  if (params && 'locale' in params) {
    resolvedLocale = (params.locale instanceof Promise ? await params.locale : params.locale) ?? 'en';
  }

  const messages = await getMessages({ locale: resolvedLocale });
  const direction = resolvedLocale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={resolvedLocale} dir={direction}>
      <body>
        <NextIntlClientProvider locale={resolvedLocale} messages={messages}>
          <ReduxProvider>
            {children}
            <Toaster position="top-right" />
          </ReduxProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
