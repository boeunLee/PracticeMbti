import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import AppRouter from "./pages/Router";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
      },
    },
  });

  return (
    <>
      <GlobalStyle />
      {/* <QueryClientProvider client={queryClient}> */}
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
      {/* <ReactQueryDevtools />
      </QueryClientProvider> */}
    </>
  );
}
export default App;
