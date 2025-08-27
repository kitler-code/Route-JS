import React from 'react'   
import "../../css/Portfolio.css"
import Card from '../card/Card'
import Star from '../star/Star'
import img1 from "../../assets/port1.png"
import img2 from "../../assets/port2.png"
import img3 from "../../assets/port3.png"

export default function portfolio() {
  let images =[
    {id:'img1',img:img1},
    {id:'img2',img:img2},
    {id:'img3',img:img3},
    {id:'img4',img:img1},
    {id:'img5',img:img2},
    {id:'img6',img:img3},
  ]
  return (
    <>
    <div className=" d-flex align-items-center justify-content-center">
      <div className="inner text-center text-white d-flex align-items-center flex-column">
        
        <h1 className="f-color fw-bold fs-1 text-uppercase">portfolio component</h1>
        <Star color={"star-color"} bgc={"star-bg"}/>
        <div className="container">
          <div className="row g-5 p-4">
            {images.map(img=><Card key={img.id} img={img}/>)}
            {images.map(img=><>

<div key={img.id} class="modal fade" id={img.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body p-0 rounded overflow-hidden">
        <img src={img.img} alt="" className='w-100 d-block' />
      </div>
    </div>
  </div>
</div></>)}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
