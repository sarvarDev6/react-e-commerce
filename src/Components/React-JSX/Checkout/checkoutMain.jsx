import React, { useState } from 'react'
import axios from 'axios'

function CheckoutMain() {

  const [post, setPost] = useState({
    name: "",
    region: "",
    address: "",
    phone: "",
    aggree_with_pay: ""
  })

  const getFormInpValues = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value })
  }

  // axios post data goes here
  const postMemberForm = (event) => {
    event.preventDefault();
    axios.post("http://127.0.0.1:8000/api/checkout/add", JSON.stringify(post),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
      .then(res => console.log(res.data))
      .catch(err => console.log(err))

    event.target.reset();

    window.location.pathname = '/'
  }

  return (
    <main>
      <h1 className='text-2xl font-semibold mt-10'>BILLING DETAILS</h1>
      <form className='w-full' onSubmit={postMemberForm} style={{

      }}>
        <div className="flex gap-5">
          <input className='focus: outline-none mt-5' onChange={getFormInpValues} style={{
            border: "1px solid #dddd",
            width: "500px",
            padding: "10px",
            height: "50px"
          }} type="text" name='name' placeholder='Name, Surname' id='name' />
          <select name="region" className='focus: outline-none mt-5' onChange={getFormInpValues} style={{
            border: "1px solid #dddd",
            width: "500px",
            padding: "10px",
            height: "50px"
          }} id="">
            <option value="tashkent">Tashkent</option>
            <option value="andijan">Andijan</option>
            <option value="fergana">Fergana</option>
            <option value="namangan">Namangan</option>
            <option value="samarqand">Samarqand</option>
            <option value="hiva">Hiva</option>
          </select>
        </div>
        <input type="text" className='focus: outline-none mt-5' onChange={getFormInpValues} style={{
          border: "1px solid #dddd",
          width: "500px",
          padding: "10px",
          height: "50px"
        }} placeholder='Address' name='address' />
        <select name="aggree_with_pay" onChange={getFormInpValues} className='focus: outline-none mt-5 ml-5' style={{
          border: "1px solid #dddd",
          width: "500px",
          padding: "10px",
          height: "50px"
        }} id="">
          <option value="yes">Yes, I pay with the product</option>
          <option value="no">No, I pay separately</option>
        </select>
        <input type="text" className='focus: outline-none mt-5' onChange={getFormInpValues} style={{
          border: "1px solid #dddd",
          width: "500px",
          padding: "10px",
          height: "50px"
        }} placeholder='Phone' name='phone' /> <br />
        <button className='p-3 w-52 text-white font-semibold rounded-lg bg-orange-400 mt-5 mb-5' type='submit'>ORDER NOW</button>
      </form>
    </main>
  )
}

export default CheckoutMain