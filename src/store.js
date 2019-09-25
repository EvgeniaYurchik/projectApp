import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { connect } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { root } from './reducers';
import { createLogger } from "redux-logger";

export const store = createStore(root, composeWithDevTools( applyMiddleware(thunk, createLogger()) ));
