import React from 'react'
import './FormStyles.css'

const Form = () => {
    return (
        <div className='form'>
            <form>
                <label>Link to the photo on Juno website</label>
                <input type='text'></input>
                <button className='btn'>Submit</button>
            </form>
        </div>
    )
}

export default Form
