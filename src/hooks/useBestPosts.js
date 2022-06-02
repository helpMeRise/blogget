import {useState, useEffect, useContext} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const useBestPosts = () => {
  const [posts, setPosts] = useState([]);
  const {token} = useContext(tokenContext);
  const arr = [];

  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/best?limit=20`, {
      headers: {
        'Authorization': `bearer ${token}`,
      },
    })
      .then(response => {
        if (response.status === 401) {
          return;
        }
        return response.json();
      })
      .then(({data}) => {
        data.children.forEach(item => arr.push(item.data));
        setPosts(arr);
      })
      // .then(async response => {
      //   let data = await response.json();
      //   data = data.data.children;
      //   data.forEach(item => {
      //     arr.push(item.data);
      //   });
      //   setPosts(arr);
      // })
      .catch((err) => console.error(err));
  }, [token]);


  return [posts];
};
