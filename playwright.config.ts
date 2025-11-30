import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";
import * as dotenv from "dotenv";

dotenv.config();

const config: PlaywrightTestConfig = {
  testDir: "tests",
  timeout: 60_000,
  use: {},
  workers: 1,
  projects: [
    {
      name: "MicrosoftEdge:latest:MacOS Ventura@lambdatest",
      use: {
        ...devices["iPhone 12 Pro Max"],
      },
    },
    {
      name: "Chrome:latest:Windows 10@lambdatest",
      use: {
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: "local",
      use: {
        browserName: "chromium",
        viewport: { width: 1280, height: 720 },
        headless: true,
      },
    },
  ],
};

export default config;
