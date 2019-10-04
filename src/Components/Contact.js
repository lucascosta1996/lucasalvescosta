import React from 'react'
import styled from 'styled-components'

const ContactWrapper = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  margin: auto;
  position: fixed;
  right: 0;
  top: 0;
  width: 300px;

  .mail {
    color: #000;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 20px;
    text-decoration: none;
    transition: all .3s ease;

    &:hover {
      color: #7DE88D;
    }
  }
`

function Contact( props ) {
  return (
    <ContactWrapper>
      <a className="mail" href="mailto:contact@lucasalvescosta.com" target="_top">contact@lucasalvescosta.com</a>
    </ContactWrapper>
  )
}

export default Contact