import { Draggable } from "./Draggable";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { typeAccount } from "../interfaces/types";
import { updateConnectorLines } from "../interactor/updateConnectorLines";
import { ModalAccountConfiguration } from "./ModalAccountConfiguration";
import * as configurePresenter from "../presenterConfigurator";
import * as presenter from "../presenter/Presenter";

export function Account(props: { account: typeAccount }) {
  const account: typeAccount = props.account;
  const id = "draggable-account-" + account.id;

  const [width, setWidth] = useState(account.width);
  const [height, setHeight] = useState(account.height);
  const [displayName, setDisplayName] = useState(account.name);

  account.attachObservers({
    setName: setDisplayName,
    setWidth: setWidth,
    setHeight: setHeight,
    setX: (_: number) => updateConnectorLines(account),
    setY: (_: number) => updateConnectorLines(account),
  });

  configurePresenter.configureAccountConfiguration(
    account.id,
    ...useState(false)
  );

  return (
    <Draggable
      key={id}
      id={id}
      x={account.x}
      y={account.y}
      setX={account.setX}
      setY={account.setY}
    >
      <Button
        variant="secondary"
        key={account.id}
        style={{ width: width + "px", height: height + "px" }}
        onClick={() => openModalAccountConfiguration(account.id)}
      >
        {displayName}
      </Button>
      <ModalAccountConfiguration
        accountId={account.id}
      ></ModalAccountConfiguration>
    </Draggable>
  );
}

function openModalAccountConfiguration(accountId: number) {
  presenter.openAccountConfiguration(accountId);
}
