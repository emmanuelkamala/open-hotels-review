// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  font-family: 'Yaldevi', sans-serif;
`

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <Wrapper>
        <Route path="/" component={App} />
      </Wrapper>
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
})
