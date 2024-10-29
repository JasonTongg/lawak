// next.config.mjs
import TerserPlugin from "terser-webpack-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.minimizer = [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true, // Menghapus semua console.log dari produksi
            },
            mangle: true, // Mengacak nama variabel
            format: {
              comments: false, // Menghilangkan semua komentar dari kode produksi
            },
          },
          extractComments: false,
        }),
      ];
    }
    return config;
  },

  // Tambahkan headers untuk Content Security Policy
  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)", // Terapkan untuk semua halaman
  //       headers: [
  //         {
  //           key: "Content-Security-Policy",
  //           value:
  //             "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self';",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
