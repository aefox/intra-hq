import React from "react";
import { storiesOf } from "@storybook/react";
// import { action } from '@storybook/addon-actions';

import { Hello } from "../src/components/Hello";

storiesOf("Hello", module)
  .add("with some text", () => (
    <Hello compiler="TypeScript" framework="React" />
  ));
