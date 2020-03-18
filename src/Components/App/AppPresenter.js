import React, { Fragment } from "react";
import Header from "Components/Header";
import Flex from "styled-flex-component";
import Notification from "Components/Notification";
import Store from "store";

const AppPresenter = () => (
  <Fragment>
    <Header />
    <Flex alignCenter full column>
      <Store.Consumer>
        {
          store => {
            return Object.keys(store.state.notifications).map(
              key =>
                <Notification key={store.state.notifications[key].id}
                              id={store.state.notifications[key].id} 
                              text={store.state.notifications[key].text} 
                              seen={store.state.notifications[key].seen} />
            )
          }
        }
      </Store.Consumer>
    </Flex>
  </Fragment>
);

export default AppPresenter;
