import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import qiankun from "vite-plugin-qiankun";
import reactRefresh from "@vitejs/plugin-react-refresh";

const useDevMode = true;
// https://vite.dev/config/
export default ({ mode }: { mode: string }) => {
  const isDev = mode === "development";
  return defineConfig({
    plugins: [
      ...(useDevMode ? [] : [reactRefresh()]),
      qiankun("sub-vite-react", { useDevMode: true }),
    ],
    server: {
      port: 5157,
      host: "0.0.0.0",
      origin: "//localhost:5157",
      cors: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
    base: isDev ? "/" : "//localhost:5157",
  });
};
