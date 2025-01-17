
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = { images: {
  remotePatterns: [
    {
      protocol: "https" as const,
      hostname: "digiflyeg.com",
      pathname:
        "/wp-content/uploads/2024/10/WhatsAppVideo2024-10-09at6.27.35PM-ezgif.com-video-to-gif-converter.gif",
    },
  ],
},};

export default withNextIntl(nextConfig);