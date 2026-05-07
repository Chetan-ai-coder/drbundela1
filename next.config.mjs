const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./lib/imagekitLoader.ts",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
    ],
  },
  allowedDevOrigins: ['192.168.1.45'],
};

export default nextConfig;
