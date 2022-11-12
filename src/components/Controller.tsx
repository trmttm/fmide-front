import { Draggable } from "./Draggable";
import * as setting from "../setting";
import Button from "react-bootstrap/Button";
import React from "react";
import * as presenter from "../presenter/Presenter";

export function Controller() {
  const id = "draggable-" + setting.btnTextAddNewAccount;
  return (
    <Draggable key={id} id={id}>
      <Button
        variant="secondary"
        onClick={presenter.openAddNewAccountInputName}
      >
        {setting.btnTextAddNewAccount}
      </Button>
    </Draggable>
  );
}
