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
  allowedDevOrigins: ['10.246.105.68']
};

export default nextConfig;
