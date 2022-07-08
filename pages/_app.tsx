import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "../styles/globals.css";
import "../src/features/signup/styles.scss";
import "bootstrap/dist/css/bootstrap.css";
import { store } from "../src/app/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
