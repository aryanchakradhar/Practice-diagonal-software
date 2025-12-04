import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import TanStackCrud from './components/TanStackCurd';


const queryClient = new QueryClient();

function App() {

  return (
 
  <QueryClientProvider client={queryClient}>
     
    <TanStackCrud />
    </QueryClientProvider>
  )
}

export default App
