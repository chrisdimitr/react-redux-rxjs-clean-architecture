//// <reference types="vitest" />
//// <reference types="vite/client" />

import { defineConfig } from "vitest/config";
import { resolve } from "path";
import react from "@vitejs/plugin-react-swc";
import { loadEnv, splitVendorChunkPlugin } from "vite";
import { dependencies } from "./package.json";

const includedInVendorChung: string[] = ["react", "react-router-dom", "react-dom", "redux-observable", "rxjs"];

const renderChunks = (deps: Record<string, string>) => {
  let chunks: any = {};

  Object.keys(deps).forEach((key) => {
    if (includedInVendorChung.includes(key)) return;
    chunks[key] = [key];
  });

  return chunks;
};

// https://vitejs.dev/config/
export default (configProps: any) => {
  Object.assign(process.env, loadEnv(configProps.mode, process.cwd(), ""));
  //process.env = { ...process.env, ...loadEnv(configProps.mode, process.cwd(), "") };

  return defineConfig({
    plugins: [react(), splitVendorChunkPlugin()],
    envPrefix: "ON_UI_",
    test: {
      globals: true,
      css: true,
      environment: "jsdom",
      setupFiles: ["./src/config/vitest/VitestConfig.ts"]
    },
    resolve: {
      alias: [
        { find: "@shared", replacement: resolve(__dirname, "./src/shared") },
        { find: "@config", replacement: resolve(__dirname, "./src/config") }
      ]
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: includedInVendorChung,
            ...renderChunks(dependencies)
          }
        }
      }
    },
    preview: {
      port: parseInt(process.env.ON_UI_PORT || "8080")
    }
  });
};
