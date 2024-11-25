import type { Config } from "jest";
const config: Config = {
    coverageProvider: "v8",
    testEnvironment: "jest-environment-jsdom",
    preset: "ts-jest",
    setupFilesAfterEnv: ["./jest.setup.ts"],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    coverageThreshold: {
        global: {
            statements: 90,
            lines: 90,
        },
    },
    transform: {
        "^.+\\.tsx?$": [
            "ts-jest",
            {
                diagnostics: {
                    ignoreCodes: ["TS151001"],
                },
                tsconfig: "./tsconfig.app.json",
            },
        ],
        "^.+\\.ts?$": [
            "ts-jest",
            {
                diagnostics: {
                    ignoreCodes: ["TS151001"],
                },
                tsconfig: "./tsconfig.node.json",
            },
        ],
    },
};

export default config;
