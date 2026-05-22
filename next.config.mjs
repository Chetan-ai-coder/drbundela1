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
  allowedDevOrigins: ['10.194.17.102']
};

export default nextConfig;
