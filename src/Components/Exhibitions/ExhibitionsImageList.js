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
  margin: auto;
  padding: 80px 35px 65px;
  right: 0;
  top: 0;

  @media (max-width: 1024px) {
    flex-direction: column;
    top: 280px;
    padding: 116px 0 0;
    position: initial;
  }

  @media (max-width: 1196px) {
    width: 1300px;
  }

  @media (max-width: 1367px) {
    width: 1362px;
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
      margin: 0 15px;
    }

    @media (max-width: 1024px) {
      padding-bottom: 30px;
    }

    &:hover {
      .showTitle {
        color: #7DE88D;
      }
    }
    
    .show {
      margin-bottom: 15px;
      max-width: 620px;
      position: relative;

      @media (min-width: 1024px) {
        min-width: 500px;
        min-height: 200px;
      }

      @media (max-width: 520px) {
        max-width: 100%;
        width: 100%;
      }
  
      img {
        display: block;
        max-width: 600px;
        transition: all .3s ease;

        @media (min-width: 1024px) {
          max-width: 500px;
        }

        @media (min-width: 1281px) {
          max-width: 536px;
        }

        @media (min-width: 1400px) {
          max-width: 100%;
        }

        @media (max-width: 520px) {
          max-width: 100%;
          padding-right: 0;
          width: 100%;
        }

        &:hover {
          opacity: .7;
          color: #7DE88D;
        }
      }
    }
  }

  .showTitle {
    color: #000;
    font-size: 14px;
    font-family: 'Hind', sans-serif;
    font-weight: 300;
    margin: auto;
    text-align: center;
    text-decoration: none;
    transition: all .3s ease;

    &:hover {
      color: #7DE88D;
    }
  }
`

const WrapperWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  width: 95%;
`

function ExhibitionsImagesList (props) {
  return (
    <WrapperWrap>
      <ExhibitionsImagesWrapper>
        {
          exhibitionsList.map( item => (
            <div className="showLink" onClick={() =>  window.scrollTo(0, 0)}>
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
    </WrapperWrap>
  )
}

export default ExhibitionsImagesList