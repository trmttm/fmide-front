import { Draggable } from "./Draggable";
import * as setting from "../setting";
import Button from "react-bootstrap/Button";
import React from "react";

type typeControllerCommands = { commands: { addNewAccount: () => void } };

export function Controller(props: typeControllerCommands) {
  const addNewAccount = props.commands.addNewAccount;
  const id = "draggable-" + setting.btnTextAddNewAccount;
  return (
    <Draggable key={id} id={id}>
      <Button variant="secondary" onClick={addNewAccount}>
        {setting.btnTextAddNewAccount}
      </Button>
    </Draggable>
  );
}
