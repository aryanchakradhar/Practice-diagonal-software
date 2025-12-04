import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TanStackCrud from "./components/TanStackCurd";
import { queryClient } from "./queryClientProvider";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TanStackCrud />
    </QueryClientProvider>
  );
}

export default App;
