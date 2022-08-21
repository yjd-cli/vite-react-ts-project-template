import React, { useEffect } from 'react';
import { RootDispatch, RootState } from '@src/store';
import { useSelector ,useDispatch} from 'react-redux'

export const HomeContainer = () => {
  const countState = useSelector((state: RootState) => state.global.count)
  console.log(countState);

  const dispatch = useDispatch<RootDispatch>()

  useEffect(() => {
    dispatch.global.incrementAsync(1)
  }, [])


  return <div>HomeContainer</div>
}