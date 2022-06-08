import {useState, useEffect} from 'react';
import {URL_API} from '../api/const';
import {useSelector} from 'react-redux';

export const useBestPosts = () => {
  const [posts, setPosts] = useState([]);
  const token = useSelector(state => state.token);
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
      .catch((err) => console.error(err));
  }, [token]);


  return [posts];
};
