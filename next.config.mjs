/** @type {import('next').NextConfig} */

const nextConfig = {
    
    rewrites: () => {
        return [
            {
                source: "/primeira-rota",
                destination: "/fetch-page"
            }
        ]
    },

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'static.wikia.nocookie.net', 
          },
          {
            protocol: 'https',
            hostname: 'disney.fandom.com', 
          },
        ],
      },
};

export default nextConfig;
