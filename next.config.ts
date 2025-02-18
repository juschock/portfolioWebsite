// next.config.ts
import type { NextConfig } from "next";
import webpack from "webpack";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    // Use node-loader for native .node files.
    config.module.rules.push({
      test: /\.node$/,
      use: "node-loader",
    });

    // On macOS, force replacement of modules that don't exist.
    if (isServer && process.platform === "darwin") {
      // Replace mac-x64 with darwin-arm64
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(
          /@node-llama-cpp\/mac-x64/,
          "@node-llama-cpp/darwin-arm64"
        )
      );
      // Optionally, if other Linux modules are imported on macOS, replace them too:
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(
          /@node-llama-cpp\/linux-arm64/,
          "@node-llama-cpp/darwin-arm64"
        )
      );
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(
          /@node-llama-cpp\/linux-x64/,
          "@node-llama-cpp/darwin-arm64"
        )
      );
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(
          /@node-llama-cpp\/linux-x64-cuda/,
          "@node-llama-cpp/darwin-arm64"
        )
      );
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(
          /@node-llama-cpp\/linux-x64-vulkan/,
          "@node-llama-cpp/darwin-arm64"
        )
      );
      // Also replace Windows binaries, if needed:
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(
          /@node-llama-cpp\/win-x64/,
          "@node-llama-cpp/darwin-arm64"
        )
      );
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(
          /@node-llama-cpp\/win-x64-cuda/,
          "@node-llama-cpp/darwin-arm64"
        )
      );
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(
          /@node-llama-cpp\/win-x64-vulkan/,
          "@node-llama-cpp/darwin-arm64"
        )
      );
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(
          /@node-llama-cpp\/win-arm64/,
          "@node-llama-cpp/darwin-arm64"
        )
      );
    }
    return config;
  },
};

export default nextConfig;
