import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import {Route, Routes} from 'react-router-dom';
import Modal from '../Modal';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs/>
      <Routes>
        <Route path='/' element={
          <h2>Стартовая страница</h2>
        }/>
        <Route path='/category/:page' element={<List/>}>
          <Route path='post/:id' element={<Modal/>}/>
        </Route>
        <Route path='*' element={
          <h2>404</h2>
        }/>
      </Routes>
    </Layout>
  </main>
);
