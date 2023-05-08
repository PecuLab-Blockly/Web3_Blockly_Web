import './CreateWork.scss';
import {useState, useEffect, useCallback} from 'react';
import Header from '../../components/Header';
import WorkArea from './WorkArea';


function CreateWork() {

  return (
    <div>
      <Header></Header>
      <div className='createWork_container'>
        <WorkArea/>
      </div>
    </div>
  );
}

export default CreateWork;
