import React from "react";
import { storiesOf } from "@storybook/react";
import SearchBar from "../src/components/SearchBar";
// import { action } from '@storybook/addon-actions';

import { Hello } from "../src/components/Hello";

storiesOf("Hello", module)
  .add("with some text", () => (
    <Hello compiler="TypeScript" framework="React" />
  ));

storiesOf("search bar", module)
  .add("regular", () => (
    <SearchBar />
  ));
