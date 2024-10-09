/** @type {import('next').NextConfig} */

const nextConfig = {
    
    rewrites: () => {
        return [
            {
                source: "/primeira-rota",
                destination: "/fetch-page"
            },
            {
                source: "/segunda-rota",
                destination: "/axios-page"
            },
            {
              source: "/terceira-rota",
              destination: "/server-side"
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
