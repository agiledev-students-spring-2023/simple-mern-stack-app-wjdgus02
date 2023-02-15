import { useState, useEffect } from 'react'
import axios from 'axios'
import './AboutMe.css'

/**
 * A React component that shows a form the user can use to create a new message, as well as a list of any pre-existing messages.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutMe = props => {
  const [paragraph, setParagraph] = useState('loading')
  const [img, setimg] = useState('')

  const fetchimg = () => {
    // setMessages([])
    // setLoaded(false)
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about`)
      .then(response => {
        // axios bundles up all response data in response.data property
        const me = response.data
        setParagraph(me.paragraph)
        setimg(`${process.env.REACT_APP_SERVER_HOSTNAME}/${me.img}`)
      })
      .catch(err => {
        console.log('error')
      })
  }

  

  // set up loading data from server when the component first loads
  useEffect(() => {
    // fetch messages this once
    fetchimg()

    // set a timer to load data from server every n seconds
  }, []) // putting a blank array as second argument will cause this function to run only once when component first loads

  return (
    <>
      <img src={img}/>
      <h1>{paragraph}</h1>
    </>
  )
}

// make this component available to be imported into any other file
export default AboutMe
