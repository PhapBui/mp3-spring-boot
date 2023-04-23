import { store } from '@/app/store';
import { theme } from '@/utilities/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <Provider store={store}>
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <App />
    </ThemeProvider>
  </React.StrictMode>
  // </Provider>
);
