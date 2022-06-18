import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Outlet, useParams} from 'react-router-dom';
import {postsRequestAsync} from '../../../store/posts/postsAction';
import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const posts = useSelector(state => state.postsReducer.data);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const {page} = useParams();

  useEffect(() => {
    dispatch(postsRequestAsync(page));
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && posts.length <= 20) {
        dispatch(postsRequestAsync());
      }
    }, {
      rootMargin: '100px',
    });

    observer.observe(endList.current);

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current, posts]);

  const handleClick = () => {
    dispatch(postsRequestAsync());
  };

  return (
    <>
      <ul className={style.list}>
        {posts.map(({data}) => (
          <Post key={data.id} postData={data}/>
        ))}
        <li ref={endList} className={style.end}/>
      </ul>
      {posts.length >= 30 &&
        <button
          className={style.btn} onClick={handleClick}>Загрузить еще</button>}
      <Outlet/>
    </>
  );
};

