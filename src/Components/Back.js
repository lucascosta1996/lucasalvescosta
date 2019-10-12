import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { I18nContext } from '../i18n'

const BackWrapper = styled.div`
  padding-bottom: 45px;
  padding-left: 33px;

  @media (max-width: 520px) {
    padding-left: 0;
  }

  a {
    color: #000;
    font-family: 'Hind', sans-serif;
    font-weight: 300;
    font-size: 14px!important;
    text-decoration: none;

    &:hover {
      color: #7DE88D;
    }
  }
`

function Back(props) {
  const { translate } = useContext( I18nContext )

  return (
    <BackWrapper>
      <Link to={props.route}>
        {translate('back')}
      </Link>
    </BackWrapper>
  )
}

export default Back