import React from "react";
import { storiesOf } from "@storybook/react";
// import { action } from '@storybook/addon-actions';

import { Hello } from "../src/components/Header";

storiesOf("Header", module)
  .add("with some text", () => (
    <Header />
  ));
