import React from 'react'
import Layout from '../components/layout'
import '../styles/about.css'

const About = () => (
  <Layout>
    <h3 style={{display: 'inline-block', margin: 0, float: 'left'}}>Current:</h3>
    <span style={{float: 'right'}}>Developer Advocate @ <a href="https://developer.squareup.com/">Square</a></span>
    <br style={{clear: 'both'}} />
    <h3 style={{display: 'inline-block', margin: 0, float: 'left'}}>Previous:</h3>
    <span style={{float: 'right'}}>Developer Evangelist @ <a href="https://goshippo.com/">Shippo</a></span> <br />
    <span style={{float: 'right'}}>Sales Engineer &amp; Technical Support @ <a href="https://codility.com">Codility</a></span>
  </Layout>
)

export default About;
