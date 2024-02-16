import { storiesOf } from "@storybook/react";
import React from "react";

import { Sandpack } from "../";

import { SANDPACK_THEMES } from ".";

const stories = storiesOf("presets/Themes", module);

Object.keys(SANDPACK_THEMES).forEach((themeName) =>
  stories.add(themeName, () => (
    <Sandpack
      options={{
        showLineNumbers: true,
        showInlineErrors: true,
        showNavigator: true,
        showTabs: true,
        showConsole: true,
        bundlerURL: "http://47.116.204.49:3000"
      }}
      template="react"
      theme={themeName as keyof typeof SANDPACK_THEMES}
    />
  ))
);
