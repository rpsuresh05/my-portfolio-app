/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{ 
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'assets.aceternity.com',
                port: '',
                pathname: '/features-section.png',
            }
        ]
    }
};

export default nextConfig;
