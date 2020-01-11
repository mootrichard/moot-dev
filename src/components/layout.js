import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

export default ({ children }) => (
  <main>
    <Helmet>
      <title>{`moot`}</title>
    </Helmet>
    <nav style={{backgroundColor: '#ececec', marginTop: '10px'}}>
      <h1><Link to="/">moot</Link></h1>
      <h1 className="no-underline">.dev</h1>
      <ul>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/videos">videos</Link>
        </li>
        <li>
          <Link to="/blog">blog</Link>
        </li>
        <li>
          <Link to="https://github.com/mootrichard">github</Link>
        </li>
        <li>
          <Link to="https://stackoverflow.com/users/7013970/mootrichard">stack overflow</Link>
        </li>
      </ul>
    </nav>
    <section style={{marginTop: '100px'}}>
      { children }
    </section>
  </main>
)
