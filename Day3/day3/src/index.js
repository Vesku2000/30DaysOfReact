// index.js
import React from 'react'
import ReactDOM from 'react-dom'
// To get the root element from the HTML document
import ferrariImg from './images/ferrari.png';
import frontendImg from './images/frontend.png';
import './index.css';
// JSX element, header
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}
const date = 'Oct 2, 2020'

// JSX element, header
const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1820
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)

const user = (
  <div>
  <div>
    <img src={ferrariImg} alt='ferrari image' />
  </div>
  <div>
  <img src={frontendImg} alt='front image' />
</div>
</div>
)

// JSX element, main
const main = (
  <main>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
      {result}
      {personAge}
      {user}
    </div>
  </main>
)

const copyRight = 'Copyright 2020'

// JSX element, footer
const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)
//sub task
const sub = (
  <div className='sub-container'>
    <h1 className='sub'>Subscribe</h1>
    <p1 className="sub">Sign up with your email address to receive news and updates</p1>
    <div className='form'>

      <input className='inputField' type="text" id="first-name" name="first-name" />
      <input className='inputField' type="text" id="last-name" name="last-name" />
      <input className='inputField' type="email" id="email" name="email" />

    </div>
    <button className='sub-button' type="submit">Subscribe</button>
  </div>
)

// JSX element, app
const app = (
  <div className='app'>
    {header}
    {main}
    {sub}
    
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)