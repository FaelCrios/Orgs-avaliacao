import {useState, useEffect} from 'react';
import {loadProducers} from '../services/loadingData';

export default function useProducers() {
  const [title, setTitle] = useState('');
  const [list, setList] = useState('');

  useEffect(() => {
    const result = loadProducers();
    setTitle(result.title);
    setList(result.list);
    console.log(result);
  }, []);

  return [title, list];
}
