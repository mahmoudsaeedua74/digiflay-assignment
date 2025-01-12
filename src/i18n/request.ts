import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';


export const routing = {

    locales: ["en", "ar"] as const
  
  };
  
import { GetRequestConfigParams } from 'next-intl/server';

export default getRequestConfig(async (params: GetRequestConfigParams) => {
  const locale = params.locale as "en" | "ar";

  if (!locale || !routing.locales.includes(locale)) {
    return notFound();
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
