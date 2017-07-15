import React from "react";
import { storiesOf } from "@storybook/react";
 
 import Logo from "../src/components/Logo";

storiesOf("Logo", module)
  .add("logo text", () => (
    <Logo />
  ));
