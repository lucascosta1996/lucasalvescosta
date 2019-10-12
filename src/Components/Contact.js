import React, { useContext } from 'react'
import styled from 'styled-components'
import { I18nContext } from '../i18n/index'

const ContactWrapper = styled.div`
  align-items: flex-start;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  margin: auto;
  position: fixed;
  right: 0;
  top: 0;
  width: 300px;

  .year {
    padding-bottom: 16px;
  }

  span {
    font-size: 14px;
    font-family: 'Hind', sans-serif;
    font-weight: 300;
  }

  .mail {
    color: #000;
    font-family: 'Hind', sans-serif;
    font-size: 14px;
    text-decoration: none;
    transition: all .3s ease;

    &:hover {
      color: #7DE88D;
    }
  }
`

function Contact( props ) {
  const { translate } = useContext(I18nContext)

  return (
    <ContactWrapper>
      <span>Lucas Alves Costa</span>
      <span className="year">{translate('birth')}</span>
      <a className="mail" href="mailto:contact@lucasalvescosta.com" target="_top">contact@lucasalvescosta.com</a>
    </ContactWrapper>
  )
}

export default Contact