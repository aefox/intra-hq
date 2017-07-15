import React from "react";
import { storiesOf } from "@storybook/react";

import Search from "../src/components/Search";

storiesOf("Search", module)
  .add("Simple Search", () => (
    <Search />
  ))
;
