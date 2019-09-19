import React, { useContext, useEffect, useRef } from 'react'
import styled from 'styled-components'
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
  }

  .paragraph {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;
    font-weight: 300;
    text-align: left;
  }

  .images {
    padding-bottom: 120px;
    padding-top: 50px;
    width: 100%;

    div {
      max-width: 100%;

      img {
        max-width: 100%;
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
    .replace(/Organismo Digital/g, `<i>Organismo Digital</i>`)
    .replace(/Partículas de Luz/g, `<i>Partículas de Luz</i>`)
    .replace(/Partículas de Luz 1/g, `<i>Partículas de Luz 1</i>`)
    .replace(/Partículas de Luz 2/g, `<i>Partículas de Luz 2</i>`)
    .replace(/Micropartículas/g, `<i>Micropartículas</i>`)
    secondParagraph.current.innerHTML = secondParagraph.current.innerHTML
    .replace(/Um lugar para estar/g, `<i>Um lugar para estar</i>`)
    .replace(/Partículas de Luz 3/g, `<i>Partículas de Luz 3</i>`)
    .replace(/Partículas de Luz/g, `<i>Partículas de Luz</i>`)
    .replace(/\(VR\)/g, `<i>(VR)</i>`)
    thirdParagraph.current.innerHTML = thirdParagraph.current.innerHTML
    .replace(/Terreno/g, `<i>Terreno</i>`)
    .replace(/Um lugar para estar/g, `<i>Um lugar para estar</i>`)
    fourthParagraph.current.innerHTML = fourthParagraph.current.innerHTML
    .replace(/A incidência de luz em um ambiente virtual/g, `<i>A incidência de luz em um ambiente virtual</i>`)
    .replace(/Um lugar para estar/g, `<i>Um lugar para estar</i>`)
  });

  return (
    <ExhibitionWrapper>
      <h2 className="title">
        {props.show.name}
      </h2>
      <p className="paragraph" ref={ firstParagraph }>
        {translate(props.show.paragraph1)}
      </p>
      <p className="paragraph" ref={ secondParagraph }>
        {translate(props.show.paragraph2)}
      </p>
      <p className="paragraph" ref={ thirdParagraph }>
        {translate(props.show.paragraph3)}
      </p>
      <p className="paragraph" ref={ fourthParagraph }>
        {translate(props.show.paragraph4)}
      </p>
      <div className="images">
        {
          props.show.images.map( item => (
            <div>
              <img src={require(`../../assets/exhibitions/${item.src}`)} />
            </div>
          ) )
        }
      </div>
    </ExhibitionWrapper>
  )
}

export default Exhibition