import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Home = () => {
  const[loopNum, setLoopNum]= useState(0)
  const[isDeleting, setIsDeleting]=useState(false)
  const[text, setText]=useState("")
  const[delta, setDelta]=useState(300 -Math.random()*100)
  const[index, setIndex]=useState(1)
  const toRotate=["Web Developer", "Web Designer", "UI/UX Designer"]
  const period=2000

  useEffect(()=>{
    let ticker= setInterval(()=>{
      tick()
    }, delta)

    return()=>{clearInterval(ticker)}
  }, [text])

  const tick=()=>{
    let i=loopNum %toRotate.length
    let fullText= toRotate[i]
    let updatedText= isDeleting? fullText.substring(0, text.length -1):fullText.substring(0, text.length+1)

    setText(updatedText)

    if(isDeleting){
      setDelta(prevDelta =>prevDelta /2)
    }

    if(!isDeleting && updatedText === fullText){
      setIsDeleting(true)
      setIndex(prevIndex => prevIndex-1)
      setDelta(period)
    }else if(isDeleting && updatedText === ""){
      setIsDeleting(false)
      setIndex(1)
      setDelta(500)
      setLoopNum(loopNum+1)
    }else{
      setIndex(prevIndex => prevIndex + 1)
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
              <span className="tagLine">Welcome</span>
              <h1>
                {`Hi I'm Arisa`}
              </h1>
              <h2>
                <span className="txt-rotate" 
                  dataPeriod="1000"
                  data-rotate='["Web Developer", "Web Designer", "UI/UX Designer"]'>
                    <span className="wrap">{text}</span>
                </span>
              </h2>
              <button onClick={()=>{}}>Lets Connect</button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <img src="" alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Home