import { QueryClientProvider } from "@tanstack/react-query";
import AdminPage from "./components/AdminPage";
import { queryClient } from "./queryClientProvider";

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AdminPage />
      </QueryClientProvider>
    </>
  );
}

export default App;
