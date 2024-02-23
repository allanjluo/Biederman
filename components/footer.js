import Link from 'next/link'
import { useAuthContext } from "../context/authcontext"
import signOutFunc from "../firebase/auth/signout"
import { useState } from 'react';

export default function Footer () {
  const { user } = useAuthContext()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Email sent successfully');
        // Reset form
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to send email');
    }
  };

  return (
    <footer id='footer' >
    <div className='inner'>
      <section>
        <h2>Get in touch</h2>
        <form onSubmit={handleSubmit}>
          <div className='fields'>
            <div className='field half'>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className='field half'>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='field'>
              <textarea
                name='message'
                id='message'
                placeholder='Message'
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>
          <ul className='actions'>
            <li>
              <input type='submit' value='Send' className='primary' />
            </li>
          </ul>
        </form>
      </section>
      <section>
        <h2>Follow</h2>
        <ul className='icons'>
          <li>
            <a href='#' className='icon brands style2 fa-twitter'>
              <span className='label'>Twitter</span>
            </a>
          </li>
          <li>
            <a href='#' className='icon brands style2 fa-facebook-f'>
              <span className='label'>Facebook</span>
            </a>
          </li>
          <li>
            <a href='#' className='icon brands style2 fa-instagram'>
              <span className='label'>Instagram</span>
            </a>
          </li>
          <li>
            <a href='#' className='icon brands style2 fa-dribbble'>
              <span className='label'>Dribbble</span>
            </a>
          </li>
          <li>
            <a href='#' className='icon brands style2 fa-github'>
              <span className='label'>GitHub</span>
            </a>
          </li>
          <li>
            <a href='#' className='icon brands style2 fa-500px'>
              <span className='label'>500px</span>
            </a>
          </li>
          <li>
            <a href='#' className='icon solid style2 fa-phone'>
              <span className='label'>Phone</span>
            </a>
          </li>
          <li>
            <a href='#' className='icon solid style2 fa-envelope'>
              <span className='label'>Email</span>
            </a>
          </li>
        </ul>
      </section>
      <ul className='copyright'>
        <li>&copy; Untitled. All rights reserved</li>
        <li>
          Design
        </li>
        <li>
          {user ? <button onClick={signOutFunc}>Sign out</button> : <Link href="/signin">Admin Sign-in</Link>}

        </li>
      </ul>
    </div>
  </footer>
  )


}
