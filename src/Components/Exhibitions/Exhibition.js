import React, { useContext, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { I18nContext } from '../../i18n/index'

const ExhibitionWrapper = styled.div`
  left: 0;
  margin: auto;
  max-width: 60%;
  position: absolute;
  right: 0;
  text-align: center;
  top: 100px;

  @media (max-width: 520px) {
    position: initial;
    max-width: 90%;
  }

  .title {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 20px;
    font-weight: 300;
    padding-bottom: 40px; 

    @media (max-width: 520px) {
      font-size: 18px;
      padding-top: 40px;
    }
  }

  .text {
    text-align: left;

    &__paragraph {
      font-family: 'Source Sans Pro', sans-serif;
      font-size: 16px;
      font-weight: 300;
      text-align: left;
  
      @media (max-width: 520px) {
        font-size: 14px;
      }
    }

    &__pressRelease {
      padding-top: 10px;

      a {
        color: #6278DC;
        text-align: left;
        text-decoration: none;
        transition: all .3s ease;

        &:hover {
          color: #6278FF;
        }
      }
    }
  }

  .images {
    padding-bottom: 120px;
    padding-top: 30px;
    width: 100%;

    @media (max-width: 520px) {
      padding-top: 0;
    }

    div {
      max-width: 100%;

      img {
        max-width: 100%;
        padding-top: 20px;
      }
    }
  }
`

function Exhibition (props) {
  const { translate } = useContext(I18nContext)
  const firstParagraph = useRef()
  const secondParagraph = useRef()
  const thirdParagraph = useRef()
  const fourthParagraph = useRef()
  useEffect(() => {
    window.scrollTo(0, 0)
    firstParagraph.current.innerHTML = firstParagraph.current.innerHTML
    .replace(/Um lugar para estar/g, `<i>Um lugar para estar</i>`)
    .replace(/Paraíso Tropical/g, `<i>Paraíso Tropical</i>`)
    .replace(/Mundo Aberto/g, `<i>Mundo Aberto</i>`)
    secondParagraph.current.innerHTML = secondParagraph.current.innerHTML
    .replace(/Um lugar para estar/g, `<i>Um lugar para estar</i>`)
    .replace(/Mata Atlântica/g, `<i>Mata Atlântica</i>`)
    .replace(/Paraíso Tropical/g, `<i>Paraíso Tropical</i>`)
    .replace(/Mundo Aberto/g, `<i>Mundo Aberto</i>`)
    thirdParagraph.current.innerHTML = thirdParagraph.current.innerHTML
    .replace(/Mata Atlântica \(Digital\)/g, `<i>Mata Atlântica (Digital)</i>`)
    .replace(/Um lugar para estar/g, `<i>Um lugar para estar</i>`)
    .replace(/Superfície de Mundo Aberto/g, `<i>Superfície de Mundo Aberto</i>`)
    .replace(/Mundo Aberto/g, `<i>Mundo Aberto</i>`)
    .replace(/Visão Aérea de Mundo Aberto/g, `<i>Visão Aérea de Mundo Aberto</i>`)
    fourthParagraph.current.innerHTML = fourthParagraph.current.innerHTML
    .replace(/A incidência de luz em um ambiente virtual/g, `<i>A incidência de luz em um ambiente virtual</i>`)
    .replace(/Um lugar para estar/g, `<i>Um lugar para estar</i>`)
    .replace(/Visão Aérea de Mundo Aberto/g, `<i>Visão Aérea de Mundo Aberto</i>`)
    .replace(/Superfície de Mundo Aberto/g, `<i>Superfície de</i>`)
    .replace(/Mundo Aberto/g, `<i>Mundo Aberto</i>`)
  })

  const Image = ({ image }) => (
    <div>
      <LazyLoadImage
        alt={image.alt}
        src={require(`../../assets/exhibitions/${image.src}`)} // use normal <img> attributes as props
      />
    </div>
  )

  return (
    <ExhibitionWrapper>
      <h2 className="title">
        {props.show.name}
      </h2>
      <section className="text">
        <p className="text__paragraph" ref={ firstParagraph }>
          {translate(props.show.paragraph1)}
        </p>
        <p className="text__paragraph" ref={ secondParagraph }>
          {translate(props.show.paragraph2)}
        </p>
        <p className="text__paragraph" ref={ thirdParagraph }>
          {translate(props.show.paragraph3)}
        </p>
        <p className="text__paragraph" ref={ fourthParagraph }>
          {translate(props.show.paragraph4)}
        </p>
        <p className="text__pressRelease">
          <a href={ `https://palacio.xyz/exhibitions/${props.show.pressRelase}` }>
            {translate('pressRelease')}
          </a>
        </p>
      </section>
      <div className="images">
        {
          props.show.images.map( item => (
            <Image image={ item } />
          ) )
        }
      </div>
    </ExhibitionWrapper>
  )
}

export default Exhibition