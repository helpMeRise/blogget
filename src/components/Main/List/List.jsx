import {useBestPosts} from '../../../hooks/useBestPosts';
import {Preloader} from '../../../UI/Preloader/Preloader';
import style from './List.module.css';
import Post from './Post';
// import {useBestPosts} from '../../../hooks/useBestPosts';

export const List = () => {
  const [posts, loading] = useBestPosts();

  // const postsData = [
  //   {
  //     thumbnail: '',
  //     title: 'Title1',
  //     author: 'Nickname1',
  //     ups: 77,
  //     date: '2022-01-21T04:22:00.000Z',
  //     id: '123',
  //   },
  //   {
  //     thumbnail: '',
  //     title: 'Title2',
  //     author: 'Nickname2',
  //     ups: 58,
  //     date: '2022-01-31T00:00:00.000Z',
  //     id: '345',
  //   },
  //   {
  //     thumbnail: '',
  //     title: 'Title3',
  //     author: 'Nickname3',
  //     ups: 124,
  //     date: '2022-03-10T08:00:00.000Z',
  //     id: '567',
  //   },
  //   {
  //     thumbnail: '',
  //     title: 'Title4',
  //     author: 'Nickname4',
  //     ups: 24,
  //     date: '2022-05-12T00:45:00.000Z',
  //     id: '789',
  //   },
  // ];

  return (
    <>
      {loading ? (
        <Preloader color='#000' size='400px'/>
      ) : (
        <ul className={style.list}>
          {posts.map((postData) => (
            <Post key={postData.id} postData={postData}/>
          ))}
        </ul>
      )}
    </>
  );
};

