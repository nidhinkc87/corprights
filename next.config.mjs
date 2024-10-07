/** @type {import('next').NextConfig} */

const domains = process.env.NEXT_PUBLIC_IMAGE_DOMAIN?.split?.(',') || [];

const nextConfig = {
  images: {
    remotePatterns: domains?.map?.((domain) => ({
        hostname: domain?.trim?.(),
    })),
  },
};

export default nextConfig;
