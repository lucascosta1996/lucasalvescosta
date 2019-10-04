import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { exhibitionsList } from './exhibitionsList'

const ExhibitionsImagesWrapper = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  left: 0;
  padding: 80px 35px 0;
  right: 0;
  top: 0;

  @media (max-width: 1024px) {
    flex-direction: column;
    top: 280px;
    padding: 116px 0 0;
    position: initial;
  }

  @media (max-width: 520px) {
    padding: 0 20px;
    padding-top: 40px;
  }

  .showLink {
    align-items: center;
    display: flex;
    flex-direction: column;

    @media (min-width: 1025px) {
      padding: 15px;
    }

    @media (max-width: 1024px) {
      padding-bottom: 30px;
    }
    
    .show {
      margin-bottom: 15px;
      max-width: 620px;
      position: relative;

      @media (max-width: 520px) {
        max-width: 100%;
        width: 100%;
      }
  
      img {
        display: block;
        max-width: 600px;
        transition: all .3s ease;

        @media (min-width: 1367px) {
          max-width: 620px;
        }

        @media (max-width: 520px) {
          max-width: 100%;
          padding-right: 0;
          width: 100%;
        }

        &:hover {
          opacity: .7;
        }
      }
    }
  }

  .showTitle {
    color: #000;
    font-size: 14px;
    margin: auto;
    text-align: center;
    text-decoration: none;
    transition: all .3s ease;

    &:hover {
      color: rgba(120, 120, 120, 0.8);
    }
  }
`

function ExhibitionsImagesList (props) {
  return (
    <ExhibitionsImagesWrapper>
      {
        exhibitionsList.map( item => (
          <div className="showLink">
            <Link
              className="show"
              to={`/exhibitions/${item.route}`}
            >
              <img alt={ item.alt } src={require(`../../assets/${item.image}`)} />
            </Link>
            <Link
              className="showTitle"
              to={`/exhibitions/${item.route}`}
            > 
              {item.name}
            </Link>
          </div>
        ) )
      }
    </ExhibitionsImagesWrapper>  
  )
}

export default ExhibitionsImagesList