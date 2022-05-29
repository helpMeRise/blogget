import {useState, useEffect, useContext} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const useBestPosts = () => {
  const [posts, setPosts] = useState([]);
  const {token} = useContext(tokenContext);
  const arr = [];

  useEffect(() => {
    fetch(`${URL_API}/best`, {
      headers: {
        'Authorization': `bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => data.data)
      .then(data => data.children)
      .then(data => {
        data.forEach(item => {
          arr.push(item.data);
        });
        return arr;
      })
      .then(data => setPosts(data))
      .catch((err) => console.error(err));
  }, [token]);

  return [posts];
};
