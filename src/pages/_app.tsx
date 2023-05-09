import Wrapper from "@/layout/Wrapper";
import "@/styles/globals.css";

import type { AppProps } from "next/app";

export default function App({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
}
