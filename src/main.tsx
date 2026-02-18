import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router';
import { DadosProvider } from './context/DadosContext';

import App from './App';
import Forms from './pages/Fomulario/Formulario';
import Mensagem from './pages/Mensagem/Mensagem';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Forms /> },
      { path: 'msg', element: <Mensagem /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DadosProvider>
      <RouterProvider router={router} />
    </DadosProvider>
  </React.StrictMode>
);
