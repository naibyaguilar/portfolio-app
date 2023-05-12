import Wrapper from "@/layout/Wrapper";
import "@/styles/globals.css";
import { Provider as ReduxProvider } from "react-redux";
import type { AppProps } from "next/app";
import { rootStore } from "@/store/ui/store";

export default function App({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  return (
    <ReduxProvider store={rootStore}>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </ReduxProvider>
  );
}
