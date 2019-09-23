import * as React from "react";
import { render } from "react-dom";

import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";
import "@blueprintjs/select/lib/css/blueprint-select.css";
import "./App.css";

import { Navigation } from "./Navigation";
import { CoreExample } from "./CoreExample";
import { SelectExample } from "./SelectExample";
import { Hotkey, Hotkeys, HotkeysTarget } from "@blueprintjs/core";

@HotkeysTarget
export default class extends React.Component{
    render() {
        return (
        <div>
            <Navigation />
            <CoreExample />
            <SelectExample />
        </div>
    );
        }
        public renderHotkeys() {
            return (
              <Hotkeys>
                <Hotkey
                  label="Dev Panel"
                  combo="ctrl+alt+j"
                  global
                  // tslint:disable-next-line: jsx-no-lambda
                  onKeyDown={() =>
                    window.open(
                      "/dev-panel",
                      "Developer Panel",
                      `titlebar=0,toolbar=0,location=0,status=0,menubar=0,width=400,height=${window.innerHeight}`
                    )
                  }
                />
              </Hotkeys>
            );
          }
}

