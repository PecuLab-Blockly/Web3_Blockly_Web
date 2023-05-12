// import './CreateWork.scss';
// import React, { useState } from 'react';
// import Header from '../../components/Header';
// import InteractiveArea from './InteractiveArea';
// import WorkArea from './WorkArea';

// function CreateWork() {
//   const [codeResult, setCodeResult] = useState('');
//   const [isWorkAreaRendered, setWorkAreaRendered] = useState(true);

//   const handleCodeResult = (result) => {
//     setCodeResult(result);
//     console.log(result);
//     setWorkAreaRendered(false);
//   };
//   return (
//     <div>
//       <Header />
//       <div className='createWork_container'>
//         <InteractiveArea codeResult={codeResult} />
//         {/* {isWorkAreaRendered && <WorkArea onValueChange={handleCodeResult} />} */}
//         {isWorkAreaRendered ? <WorkArea onValueChange={handleCodeResult} /> : null}
//       </div>
//     </div>
//   );
// }

// export default CreateWork;

import './CreateWork.scss';
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import InteractiveArea from './InteractiveArea';
import WorkArea from './WorkArea';

function CreateWork() {
  const [codeResult, setCodeResult] = useState('');
  const [isWorkAreaRendered, setWorkAreaRendered] = useState(false);

  const handleCodeResult = (result) => {
    setCodeResult(result);
    console.log(result);
  };

  useEffect(() => {
    setWorkAreaRendered(true);
  }, []);

  return (
    <div>
      <Header />
      <div className='createWork_container'>
        <InteractiveArea codeResult={codeResult} />
        {isWorkAreaRendered && <WorkArea onValueChange={handleCodeResult} />}
      </div>
    </div>
  );
}

export default CreateWork;
