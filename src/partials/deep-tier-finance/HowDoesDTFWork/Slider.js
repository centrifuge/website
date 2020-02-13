import React from 'react'
import styled from 'styled-components'

import Image from './Image'

import slide_right_arrows_img from 'images/deep-tier-finance/slide_right_arrows.svg'

const Slider = ({ image, data }) => {
  const STEPS = 4
  const [current_step, set_current_step] = React.useState(0)

  const prevStep = () => set_current_step(current_step - 1)
  const nextStep = () => set_current_step((current_step + 1) % STEPS)

  return (
    <>
      <Wrapper step={current_step}>
        <Steps>
          {data.aboveSteps.map((step, i) => (
            <div key={`Slider-aboveSteps-${i}`}>{step}</div>
          ))}
        </Steps>

        <Image src={image} />

        <Steps>
          {data.belowSteps.map((step, i) => (
            <div key={`Slider-aboveSteps-${i}`}>{step}</div>
          ))}
        </Steps>
      </Wrapper>

      <Buttons>
        {current_step !== 0 && (
          <Button onClick={prevStep}>
            <img
              src={slide_right_arrows_img}
              style={{ transform: 'rotate(180deg)' }}
            />
            <span>Slide left</span>
          </Button>
        )}

        {current_step !== STEPS - 1 && (
          <Button onClick={nextStep}>
            <span>Slide right</span>
            <img src={slide_right_arrows_img} />
          </Button>
        )}
      </Buttons>
    </>
  )
}

export default Slider

const Wrapper = styled.div`
  position: relative;
  left: ${({ step }) => step * -100}%;
  overflow: hidden;
  width: 400%;
  padding: 0 30vw;
  transition: left 0.2s ease-in-out;
`

const Steps = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  > div {
    width: 300px;
  }
`

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`

const Button = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;

  font-size: 24px;
  color: #2762ff;

  span {
    margin: 0 25px;
  }

  img {
    width: 100px;
  }
`
