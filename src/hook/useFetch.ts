import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setInitilStateFromAPI } from '@/reducers/productSlice';

export default function useFetching(fetchItems: any) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setInitilStateFromAPI(fetchItems))
    }, [dispatch, fetchItems])
}