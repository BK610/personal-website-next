// @ts-check
 
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     /* config options here */
//   }
   
//   module.exports = nextConfig

// const withPWA = require('next-pwa');
// const runtimeCaching = require('next-pwa/cache');

module.exports = // withPWA(
    {
    webpack: (cfg) => {
        cfg.module.rules.push(
            {
                test: /\.md$/,
                loader: 'frontmatter-markdown-loader',
                options: { mode: ['react-component'] }
            }
        )
        return cfg;
    }
    //,
    // pwa: {
    //     dest: 'public',
    //     disable: process.env.NODE_ENV === 'development',
    //     // runtimeCaching
    // }
}
//)
