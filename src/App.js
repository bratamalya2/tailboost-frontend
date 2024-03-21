import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';

import Login from './pages/login';
import Home from './pages/home';
import UserInfo from './pages/userInfo';
import PostInfo from './pages/postInfo';

import store from './store/store';

import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/userInfo',
      element: <UserInfo />
    },
    {
      path: '/postInfo',
      element: <PostInfo />
    }
  ]);

  return (
    <Provider store={store}>
      <SnackbarProvider>
        <RouterProvider router={router} />
      </SnackbarProvider>
    </Provider>
  );
}

export default App;
