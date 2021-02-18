import { render } from '@testing-library/react';
import  React  from 'react';
import './InputBox.css';
const InputBox=({onInputChange,onButtonSubmit})=>{
    return(
        <div>
            <p className='f3'>
                {'Hello, how are you doing'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}  />
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit}>Detect</button>
            </div>
            </div>
        </div>
    );
}
export default InputBox;