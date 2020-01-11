import React from 'react'
import { Helmet } from 'react-helmet';

export default ({ children }) => (
  <main>
    <Helmet>
      <title>{`moot`}</title>
    </Helmet>
    <nav>
      <h1>moot</h1>
      <h1 className="no-underline">.dev</h1>
      <ul>
        <li>
          <a href="#/about">about</a>
        </li>
        <li>
          <a href="#/videos">videos</a>
        </li>
        <li>
          <a href="#/blog">blog</a>
          </li>
        <li>
          <a href="https://github.com/mootrichard">github</a>
        </li>
        <li>
          <a href="https://stackoverflow.com/users/7013970/mootrichard">stack overflow</a>
        </li>
      </ul>
    </nav>
    <section>
      { children }
    </section>
  </main>
)
