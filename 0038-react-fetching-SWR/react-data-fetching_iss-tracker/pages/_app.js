import { SWRConfig } from "swr";
import GlobalStyle from "../styles";

async function fetcher(url) {
  const response = await fetch(url);
  if (!response.ok) {
    const error = new Error('Error occurred while fetching');
    try {
      error.info = await response.json();
    } catch (e) {
      error.info = { message: 'Could not parse error response as JSON.' };
    }
    error.status = response.status;
    throw error;
  }
  return await response.json();
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <SWRConfig value={{ fetcher, refreshInterval: 1000 }}>
        <GlobalStyle />
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
