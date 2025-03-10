import type { ConfigFile } from "@rtk-query/codegen-openapi";
import { config as envConfig } from "dotenv";

envConfig();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const generateOutputFile = (name: string) => {
  return {
    [`./src/store/api/generated/generatedApi${name}.ts`]: {
      filterEndpoints: [new RegExp(name, `i`)],
      exportName: `generated${name}`,
      reducerPath: `${name.toLowerCase()}Api`,
    },
  };
};

const config: ConfigFile = {
  schemaFile: `https://localhost:7003/openapi/v1.json`,
  apiFile: "./src/store/api/kobiApi.ts",
  apiImport: "kobiApi",
  outputFiles: {
    ...generateOutputFile("Auth"),
    ...generateOutputFile("Manager"),
    ...generateOutputFile("MinistryCategory"),
    ...generateOutputFile("Ministry"),
  },
  exportName: "kobiApi",
};

export default config;
