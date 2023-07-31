import React, {
    useEffect
} from 'react'
import './spinner.scss'

const Spinner = () => {


    useEffect(() => {
        const text = document.querySelector('.text p');
        text.innerHTML = text.innerText
          .split('')
          .map((char, i) => `<span style="transform:rotate(${i * 6.5}deg)">${char}</span>`)
          .join('');
      }, []);

  return (
    <div className='papa'>

        <div className='circle'>
            <div className='logo'>
                
            </div>
            <div className='text'>
                <p>WHAT WE DO - WHAT WE DO - WHAT WE DO - WHAT WE DO -</p>
            </div>
        </div>
    </div>
  )
}

export default Spinner