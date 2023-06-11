// import { useState } from 'react'
import './App.css';
import PreLoader from './components/Preloader/PreLoader';
import RouterPage from "./route/Router";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"



function App() {
 const client = new QueryClient();

  return (
    <>
<QueryClientProvider client={client}>
<PreLoader />
<RouterPage />
</QueryClientProvider>
    </>
  )
}

export default App
