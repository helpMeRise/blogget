import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import {Navigate, Route, Routes} from 'react-router-dom';
import Modal from '../Modal';
import Page404 from './Page404';
import StartPage from './StartPage';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs/>
      <Routes>
        <Route path='/auth' element={<Navigate to='/' replace/>}/>
        <Route path='/' element={<StartPage/>}/>
        <Route path='/category/:page' element={<List/>}>
          <Route path='post/:id' element={<Modal/>}/>
        </Route>
        <Route path='*' element={<Page404/>}/>
      </Routes>
    </Layout>
  </main>
);
