import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

import React from "react";
import "@/styles/globals.css";
import 'animate.css';

export default function App({ Component, pageProps }: AppProps) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) {
    return null;
  }

  return (<Component />)
}
