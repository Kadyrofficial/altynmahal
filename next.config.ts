import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';


const nextConfig: NextConfig = {
    images: {
        domains: ['77.232.129.241'], 
    },
};


const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
