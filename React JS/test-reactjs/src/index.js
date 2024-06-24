import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import './index.css';
import App from './App';

// 'queryClient' creats instance of  the client (i.e. returns the client object)
// 'CacheTime': The duration until inactive queries will be removed from the cache. This defaults to 5 minutes. 
// 'StaleTime': The duration until a query transitions from 'fresh' to 'stale'. As long as the query is 'fresh', data will always be read from the cache only - no network request will happen!

// The below code makes our 'data' go to 'stale' untill it has been in our catched memory for specified time (i.e. 5 min)
const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: 1000 * 60 * 5 } } })
// { defaultOptions: { queries: { staleTime: 1000 * 60 * 5 } } }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} >
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
