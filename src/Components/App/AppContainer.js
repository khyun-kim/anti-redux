import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "store";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: {
        "1": {
          id: 1,
          text: "Something",
          seen: false
        },
        "2": {
          id: 2,
          text: "Something else",
          seen: false
        },
        "3": {
          id: 3,
          text: "Something else but different",
          seen: false
        }
      },
      deleteNotification: this._deleteNotification,
      seeNotification: this._seeNotification
    };

    this.action = {
      deleteNotification:(id) => {
        this.setState(currentState => {
          const newState = delete currentState.notifications[id];
          return newState;
        });
      },
      seeNotification:(id) => {
        this.setState(currentState => {
          return {
            ...currentState,
            notifications: {
              ...currentState.notifications,
              [id]: {
                ...currentState.notifications[id],
                seen: true
              }
            }
          }
        });
      }
    }
  }

  render() {
    const {state,action} = this;
    const value = {state,action};
    return (
      <Store.Provider value={value}>
        <AppPresenter />
      </Store.Provider>
    );
  }
}

export default AppContainer;
