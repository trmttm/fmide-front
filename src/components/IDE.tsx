import React, { useState } from "react";
import { ModalAddNewAccount } from "./ModalAddNewAccount";
import { entities } from "../entities/entities";
import { Line } from "./Line";
import * as line from "../entities/line";
import { Account } from "./Account";
import { Controller } from "./Controller";
import { Connectable } from "./Connectable";
import * as states from "../entities/mode";
import { typeAccount, typeLine } from "../interfaces/types";
import * as configurePresenter from "../presenterConfigurator";
import * as presenter from "../presenter/Presenter";

export function IDE() {
  configurePresenter.configureModalAddNewAccount(...useState(false));
  configurePresenter.configureDrawLine(...useState(0));
  line.attachObserversToNotification(presenter.drawLine);

  const connectorLine = line.getCLine();
  const style = { backgroundColor: "white", height: "90vh" };
  const myRef: React.MutableRefObject<any> = React.useRef(null);

  function handleMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    if (states.isConnectingMode()) {
      line.startDrawingCline(e.clientX, e.clientY - myRef.current.offsetTop);
    }
  }

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (states.isConnectingMode()) {
      line.drawCLine(e.clientX, e.clientY - myRef.current.offsetTop);
    }
  }

  function handleMouseUp(_: React.MouseEvent<HTMLDivElement>) {
    line.removeCLine();
    states.turnOffConnectingMode();
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "Meta") {
      states.turnOnConnectingMode();
    }
  }

  function onKeyUp(_: React.KeyboardEvent<HTMLDivElement>) {
    line.removeCLine();
    states.turnOffConnectingMode();
  }

  return (
    <div
      id={"IDE"}
      tabIndex={0} //This is needed for onKeyDown/Up event to work
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={style}
      ref={myRef}
    >
      <Line key={connectorLine.id} line={connectorLine} />
      {line.getLines().map(addNewLineElement)}
      <Controller />
      <ModalAddNewAccount />
      {entities.getAccounts().map(addNewAccountElement)}
    </div>
  );
}

function addNewLineElement(line: typeLine) {
  return <Line key={line.id} line={line} />;
}

export function addNewAccountElement(account: typeAccount) {
  return (
    <Connectable key={account.id} account={account}>
      <Account key={account.id} account={account} />
    </Connectable>
  );
}
