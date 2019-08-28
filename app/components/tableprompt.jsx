import React from "react";
import { observer } from "mobx-react";
import Modal from "./../bulma/modal";
import Input from "./../bulma/input";
import Button from "./../bulma/button";

const logoPath = require("./../assets/logo.png");

@observer
class TablePrompt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sheetId: ""
    };
    this.exampleSheetId = "1FaW23x-ZT3pmdmv77eKPJxsfGhoB1urwfvPffN_4keU";
  }

  changeSheetId(e) {
    this.setState({ sheetId: e.target.value });
  }

  acceptSheetId() {
    sheetId = this.state.sheetId;
    location.hash = sheetId;
    initSheet();
  }

  acceptExampleSheetId() {
    this.setState({ sheetId: this.exampleSheetId });
  }

  render() {
    return (
      <Modal
        active
        classes="is-primary"
        style={{ zIndex: 1500 }}
        body={
          <div
            style={{
              fontSize: 15,
              marginTop: -30,
              marginBottom: -10
            }}
          >
            <div id="version">{"version " + window["version"]}</div>
            <img
              src={logoPath}
              alt="logo"
              style={{
                width: "70%",
                margin: "auto",
                left: "10%",
                padding: 10,
                position: "relative"
              }}
            />
            <div style={{ padding: 30 }}>
              Enter the ID number of your Google Sheet (
              <a
                href="https://developers.google.com/sheets/api/guides/concepts"
                target="_blank"
              >
                what is a Google Sheet ID?
              </a>{" "}
              ):
              <Input
                value={this.state.sheetId}
                onChange={this.changeSheetId.bind(this)}
              />
              Or use the{" "}
              <a
                target="_blank"
                href="https://docs.google.com/spreadsheets/d/1FaW23x-ZT3pmdmv77eKPJxsfGhoB1urwfvPffN_4keU"
              >
                example sheet
              </a>{" "}
              id : <br />{" "}
              <Button
                onClick={this.acceptExampleSheetId.bind(this)}
                label={"copy example sheet id"}
              />
              <br />
              <br />
              <br />
              <b>Notes:</b>
              <br />
              - The application has to be signed into a Google Account (you may
              need to allow pop-ups) and the browser needs to allow cookies.
              <br />
              <br />
              <b>Other links:</b>
              <br />
              <a href="https://github.com/adammertel/historical-geocoder-assistant">
                - Code at Github
              </a>
              <br />
              <a href="https://github.com/adammertel/historical-geocoder-assistant/tree/master/manual">
                - Documentation
              </a>
            </div>
          </div>
        }
        footerStyle={{ textAlign: "right", display: "block" }}
        footer={
          <Button
            medium
            onClick={this.acceptSheetId.bind(this)}
            label={"continue and accept cookies"}
          />
        }
      />
    );
  }
}

export default observer(TablePrompt);
