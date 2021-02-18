// import { render } from '@testing-library/react';
// import  React  from 'react';

// const Rank=({name,entries})=>{
//     return(
//         <div>
//             <div className='white f3'>
//                 {`${name},'Your current rank is`}
//             </div>
//             <div className='white f1'>
//                 {entries}
//             </div>
//         </div>
//     );
// }
// export default Rank;

import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className='white f3'>
        {`${name}, your current entry count is...`}
      </div>
      <div className='white f1'>
        {entries}
      </div>
    </div>
  );
}

export default Rank;