import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import { FaCodepen, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { server } from '../config'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')
  const [subject, setSubject] = useState('')
  const [heading, setHeading] = useState('')
  const [alert, setAlert] = useState('danger')
  const msgRef = useRef()

  useEffect(() => {
    const timer = () =>
      setTimeout(() => {
        msgRef.current.style.display = 'none'
      }, 3000)
    const timerId = timer()
    return () => {
      clearTimeout(timerId)
    }
  }, [heading])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const { data } = await axios.post(`${server}api/v1/comment`, {
        name,
        email,
        comment,
        subject,
      })
      setHeading(data.msg)
      msgRef.current.style.display = 'block'
      if (data.success) {
        setAlert('success')
      } else if (!data.success) {
        setAlert('danger')
      }
      setName('')
      setEmail('')
      setComment('')
      setSubject('')
    } catch (error) {
      msgRef.current.style.display = 'block'
      setAlert('danger')
      setHeading(error.response.data.msg)
    }
  }
  return (
    <div id='contact'>
      <div className='padding'>
        <h1 className='heading'>Contact Me.</h1>
        <p className='center'>
          Feel free to contact me any time:
          <strong> +254741949574</strong> or email
          <strong> dennismuiruridev@gmail.com</strong>
        </p>
      </div>
      <div className='commentSection'>
        <p
          id='message'
          className={`center alert alert-${alert}`}
          dangerouslySetInnerHTML={{ __html: heading }}
          ref={msgRef}
        ></p>
        <p className='center'>
          <strong>Please leave your comment</strong>
        </p>
        <form className='commentForm'>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='contact'
            placeholder='Name *'
          />
          <input
            type='email'
            value={email}
            className='contact email'
            placeholder='Email *'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='text'
            className='contact subject'
            placeholder='Subject *'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            name='message'
            id='message'
            placeholder='Comment...'
            rows='10'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button
            className='btn contact pointer'
            type='submit'
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
        <hr />
        <div className='linksDiv'>
          <a
            href='https://www.linkedin.com/in/dennis-muiruri-3a429b212'
            className='rctIcons'
          >
            <FaLinkedin />
          </a>
          <a href='https://github.com/Muiruriscode' className='rctIcons'>
            <FaGithub />
          </a>
          <a href='https://codepen.io/your-work/' className='rctIcons'>
            <FaCodepen />
          </a>
          <a
            href='https://web.facebook.com/dennis.gibson.71404'
            className='rctIcons'
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
