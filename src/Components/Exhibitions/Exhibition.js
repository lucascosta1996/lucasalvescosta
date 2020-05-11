import React, { useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ReactPlayer from 'react-player'
import { I18nContext } from '../../i18n/index'
import { isMobile } from '../../helpers/helpers'
import Back from '../Back'
import play from '../../assets/icons/play_icon.png'

const ExhibitionWrapper = styled.div`
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 130px;

  @media (max-width: 520px) {
    position: initial;
    max-width: 90%;
  }

  .title {
    font-family: 'Hind', sans-serif;
    font-size: 18px;
    font-weight: 300;
    margin: auto;
    max-width: 60%;
    padding-bottom: 30px; 
    text-align: left;

    
    @media (max-width: 1024px) {
      max-width: 80%;
    }

    @media (max-width: 520px) {
      max-width: 98%;
      padding-top: 40px;
    }
  }
  
  .text {
    margin: auto;
    max-width: 60%;
    text-align: right;

    @media (max-width: 1024px) {
      max-width: 80%;
    }

    @media (max-width: 520px) {
      max-width: 98%;
    }

    &__paragraph {
      font-family: 'Hind', sans-serif;
      font-size: 14px;
      font-weight: 300;
      line-height: 16px;
      margin: 10px 0px;
      text-align: left;
  
      @media (max-width: 520px) {
        font-size: 14px;
      }
    }

    &__pressRelease {
      padding-top: 10px;
      text-align: right;

      a {
        color: #6278DC;
        font-family: 'Hind', sans-serif;  
        font-size: 14px;
        text-decoration: none;
        transition: all .3s ease;

        &:hover {
          color: #51E8E3;
        }
      }
    }
  }

  .image_wrapper {
    @media (min-width: 1024px) {
      min-height: 400px;
    }
  }

  .videoImg {
    position: relative;
  }

  .video1 {
    padding-top: 20px!important;
  }

  .play-icon {
    bottom: 0;
    cursor: pointer;
    left: 0;
    right: 0;
    margin: auto;
    position: absolute;
    top: 0;
    transition: .3s ease;
    width: 80px;

    &:hover {
      opacity: 0.6;
    }

    @media (max-width: 520px) {
      width: 40px;
    }
  }

  .images {
    margin: auto;
    max-width: 60%;
    padding-bottom: 120px;
    padding-top: 30px;
    width: 100%;

    @media (max-width: 1024px) {
      max-width: 80%;
    }

    @media (max-width: 520px) {
      max-width: 98%;
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
  const [ showVideo1, setShowVideo1 ] = useState(false)
  const video1Ref = useRef()
  const firstParagraph = useRef()
  const secondParagraph = useRef()
  const thirdParagraph = useRef()
  const fourthParagraph = useRef()
  const fifthParagraph = useRef()
  useEffect(() => {
    firstParagraph.current.innerHTML = firstParagraph.current.innerHTML
    .replace(/Um lugar para estar/g, `<i>Um lugar para estar</i>`)
    .replace(/Paraíso/g, `<i>Paraíso</i>`)
    .replace(/Mundo Aberto/g, `<i>Mundo Aberto</i>`)
    secondParagraph.current.innerHTML = secondParagraph.current.innerHTML
    .replace(/Um lugar para estar/g, `<i>Um lugar para estar</i>`)
    .replace(/Mata Atlântica/g, `<i>Mata Atlântica</i>`)
    .replace(/Paraíso/g, `<i>Paraíso</i>`)
    .replace(/Mundo Aberto/g, `<i>Mundo Aberto</i>`)
    thirdParagraph.current.innerHTML = thirdParagraph.current.innerHTML
    .replace(/Mata Atlântica \(Digital\)/g, `<i>Mata Atlântica (Digital)</i>`)
    .replace(/Mata Atlântica/g, `<i>Mata Atlântica</i>`)
    .replace(/Superfície de Um lugar para estar/g, `<i>Superfície de Um lugar para estar</i>`)
    .replace(/Um lugar para estar/g, `<i>Um lugar para estar</i>`)
    .replace(/Superfície de Mundo Aberto/g, `<i>Superfície de Mundo Aberto</i>`)
    .replace(/Perspectiva aérea de Mundo Aberto/g, `<i>Perspectiva aérea de Mundo Aberto</i>`)
    .replace(/Mundo Aberto/g, `<i>Mundo Aberto</i>`)
    .replace(/Terreno/g, `<i>Terreno</i>`)
    .replace(/Paraíso/g, `<i>Paraíso</i>`)
    .replace(/Visão Aérea de Mundo Aberto/g, `<i>Visão Aérea de Mundo Aberto</i>`)
    fourthParagraph.current.innerHTML = fourthParagraph.current.innerHTML
    .replace(/Incidência de luz em um ambiente virtual/g, `<i>Incidência de luz em um ambiente virtual</i>`)
    .replace(/Um lugar para estar/g, `<i>Um lugar para estar</i>`)
    .replace(/Mundo Aberto/g, `<i>Mundo Aberto</i>`)
    .replace(/Terreno/g, `<i>Terreno</i>`)
    .replace(/Mata Atlântica \(Digital\)/g, `<i>Mata Atlântica (Digital)</i>`)
    .replace(/Mata Atlântica/g, `<i>Mata Atlântica</i>`)
    fifthParagraph.current.innerHTML = fifthParagraph.current.innerHTML
    .replace(/Incidência de luz em um ambiente virtual/g, `<i>Incidência de luz em um ambiente virtual</i>`)
    .replace(/Um lugar para estar/g, `<i>Um lugar para estar</i>`)
    .replace(/Visão Aérea de Mundo Aberto/g, `<i>Visão Aérea de Mundo Aberto</i>`)
    .replace(/A Superfície de Mundo Aberto/g, `<i>A Superfície de Mundo Aberto</i>`)
    .replace(/Mundo Aberto/g, `<i>Mundo Aberto</i>`)
    .replace(/Terreno/g, `<i>Terreno</i>`)
  })

  const video1RefScroll = (ref) => {
    window.scrollTo(0, ref.current.offsetTop) 
    setShowVideo1(true)
  }

  const Image = ({ image }) => (
    <div className={`${image.class ? image.class : 'image_wrapper'}`}>
      <LazyLoadImage
        alt={image.alt}
        src={require(`../../assets/exhibitions/${image.src}`)} // use normal <img> attributes as props
      />
      {
        image.class && <img className="play-icon" src={ play } />
      }
    </div>
  )

  return (
    <ExhibitionWrapper>
      <h2 className="title">
        {props.show.name}, {props.show.period}
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
        <p className="text__paragraph" ref={ fifthParagraph }>
          {translate(props.show.paragraph5)}
        </p>
        <p className="text__pressRelease">
          <a href={ `https://palacio.xyz/exhibitions/${props.show.pressRelease}` } target="_blank">
            {translate('pressRelease')}
          </a>
        </p>
      </section>
      <div className="images">
      <div ref={video1Ref}>
        {
          props.show.video1 && (
            !showVideo1 ? (
              <div className="video1" onClick={() => video1RefScroll(video1Ref)}>
                <Image image={ props.show.video1image } />
              </div>
            ) : (
              <div className="video1">
                <ReactPlayer
                  key="1"
                  id="1"
                  url={props.show.video1}
                  playing
                  controls
                  muted
                  quality="1080p"
                  width='100%'
                  height={isMobile() ? '170px' : '512px'}
                />
              </div>
            )
          )
        }
        </div>
        {
          props.show.images.map( item => (
            <Image image={ item } />
          ) )
        }
      </div>
      <Back route="/exhibitions" />
    </ExhibitionWrapper>
  )
}

export default Exhibition