import "../app/globals.css";
import Layout from "../layout/default";
import { Provider } from "react-redux";
import Store from "../store/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={Store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
