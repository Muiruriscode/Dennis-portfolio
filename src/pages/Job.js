import React, { useState, useRef } from 'react'
import { singleJob } from '../data'
import { useParams } from 'react-router-dom'
import SingleJob from '../components/SingleJob'
import axios from 'axios'
import { server } from '../config'

const Job = () => {
  const { category } = useParams()
  const [price, setPrice] = useState('')
  const [myPackage, setMyPackage] = useState('basic')
  const [heading, setHeading] = useState('two')
  const [alert, setAlert] = useState('success')
  const [description, setDescription] = useState()
  const jobRef = useRef()

  const handleSubmit = async (e) => {
    const token = localStorage.getItem('muiruriscodetoken')
    e.preventDefault()
    try {
      const { data } = await axios.post(
        `${server}api/v1/job`,
        {
          category,
          myPackage,
          price,
          description,
          token,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      setHeading(data.msg)
      setAlert('success')
      jobRef.current.style.display = 'block'
      if (data.success) {
        setAlert('success')
      } else if (!data.success) {
        setAlert('danger')
      }
      setTimeout(() => {
        jobRef.current.style.display = 'none'
      }, 3000)
      clearTimeout(() => {})
    } catch (error) {
      console.log(error.response.data)
    }
  }
  ;<br />
  return (
    <section className='jobSection'>
      {singleJob.map((item, indx) => {
        const { name, basic, standard, premium, desc, price, title } = item
        if (item.name === category) {
          return (
            <SingleJob
              key={indx}
              name={name}
              basic={basic}
              standard={standard}
              premium={premium}
              desc={desc}
              price={price}
              title={title}
              setMyPackage={setMyPackage}
              setPrice={setPrice}
            />
          )
        }
        return false
      })}
      <div className='formDiv'>
        <h2 className='center'>Description</h2>
        <form className='hire'>
          <p
            id='webData'
            className={`center alert alert-${alert}`}
            dangerouslySetInnerHTML={{ __html: heading }}
            ref={jobRef}
          ></p>
          <label htmlFor='categoy'>Category:{'   '}</label>
          <input id='category' type='text' value={category} readOnly />

          <label htmlFor='package'>Package:{'   '}</label>
          <input
            id='package'
            type='text'
            value={myPackage}
            onChange={(e) => setMyPackage(e.target.value) || myPackage}
          />

          <label htmlFor='price'>Price:{'   '}</label>
          <input
            id='price'
            type='text'
            value={price}
            onChange={(e) => setPrice(e.target.value) || price}
          />
          <textarea
            name='message'
            id='message'
            placeholder='Describe your website...'
            rows='10'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button type='submit' onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default Job
