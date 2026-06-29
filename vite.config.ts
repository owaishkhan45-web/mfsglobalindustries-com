import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Detect if running inside a Vercel deployment build environment
const isVercel = !!process.env.VERCEL;

export default defineConfig({
  nitro: isVercel ? { preset: "vercel" } : true,
  tanstackStart: {
    server: {
      entry: "server"
    },
  },
});
