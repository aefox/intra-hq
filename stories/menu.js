import React from "react";
import { storiesOf } from "@storybook/react";
//import { action } from '@storybook/addon-actions';

import Menu from "../src/components/Menu";

storiesOf("Menu", module)
  .add("test menu 2", () => (
    <Menu menuItems={ITEMS}/>
  ))
  .add("test menu 3", () => (
    <Menu menuItems={ITEMS3}/>
  ))
  .add("no menu", () => (
    <Menu />
  ))
  .add("empty menu", () => (
    <Menu menuItems={[]}/>
  ))
;

const ITEMS = [ {name: "item1", action: "itemAction1"},
          {name: "item2", action: "itemAction2"}];
const ITEMS3 = [ {name: "item1", action: "itemAction1"},
          {name: "item2", action: "itemAction2"},
          {name: "item3", action: "itemAction3"}];
