import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import RouterApplication from "./routes/router";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./reducers/store";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <RouterApplication />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);


reportWebVitals();
