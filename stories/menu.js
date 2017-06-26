import React from "react";
import { storiesOf } from "@storybook/react";

import { Menu } from "../src/components/Menu";

storiesOf("Menu", module)
    .add("test text", () => (<Menu />))