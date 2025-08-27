import React from 'react'
import "../../css/Contact.css"
import Star from '../star/Star'
export default function contact() {
  return (
    <>
    <div>
      <div className="inner text-center">
        <h1 className="f-color fw-bold fs-1 text-uppercase">contact section</h1>
        <Star color={"star-color"} bgc={"star-bg"}/>
        <div className="container">
          <form className='w-50 mx-auto'>
            <input type="text" id="username" name="username" placeholder='userName' className='form-control form-control-lg mx-auto  border-0 border-bottom mb-4 mt-5' />
            <input type="number" id="userage" name="userage" placeholder='userAge' className='form-control form-control-lg mx-auto border-0 border-bottom mb-4 mt-5' />
            <input type="email" id="useremail" name="useremail" placeholder='userEmail' className='form-control form-control-lg mx-auto border-0 border-bottom mb-4 mt-5' />
            <input type="password" id="userpass" name="userpass" placeholder='userPassowerd' className='form-control form-control-lg mx-auto border-0 border-bottom mb-4 mt-5' />
            <button className='btn d-block mb-4'>send message</button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}
