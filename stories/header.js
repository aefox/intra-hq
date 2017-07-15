import React from "react";
import { storiesOf } from "@storybook/react";

import Header from "../src/components/Header";

storiesOf("Header", module)
  .add("simple header", () => (
    <Header/>
  ))
;

