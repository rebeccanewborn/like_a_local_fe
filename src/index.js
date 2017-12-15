import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

//redux imports
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducers/reducer";
import reduxThunk from "redux-thunk";

let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Route path="/" component={App} />
    </Provider>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
