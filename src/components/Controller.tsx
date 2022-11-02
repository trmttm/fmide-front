import { Draggable } from "./Draggable";
import * as setting from "../setting";
import Button from "react-bootstrap/Button";
import React from "react";

type typeControllerCommands = { commands: { addNewAccount: () => void } };

export function Controller(props: typeControllerCommands) {
  const addNewAccount: () => void = props.commands.addNewAccount;
  return (
    <Draggable key={"draggable-" + setting.btnTextAddNewAccount}>
      <Button variant="secondary" onClick={addNewAccount}>
        {setting.btnTextAddNewAccount}
      </Button>
    </Draggable>
  );
}
