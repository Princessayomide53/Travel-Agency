// import { useState } from 'react'
import { useEffect } from 'react';
import './App.css';
import PreLoader from './components/Preloader/PreLoader';
import RouterPage from "./route/Router";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {
  useEffect(() => {
    AOS.init();
  }, []);


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
