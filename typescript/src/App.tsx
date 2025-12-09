import { QueryClientProvider } from "@tanstack/react-query"
import TypeScriptCurd from "./components/TypeScriptCurd"
import { queryClient } from "./queryClientProvider"
function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
      <TypeScriptCurd />
      </QueryClientProvider>

    </>
  )
}

export default App
