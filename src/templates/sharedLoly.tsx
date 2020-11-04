import { Lolly } from '../components/Lolly'
import Result from '../components/Result'
import * as React from 'react'
import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const Template = ({ pageContext: { color1, color2, color3, reciever, sender, message, link } }) => {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <div className="lollyFormDiv">
            <div>
              <Lolly top={color1} middle={color2} bottom={color3} />
            </div>

            <Result link={link} reciever={reciever} sender={sender} message={message} text={`Enjoy your lolly ${reciever}`} />
          </div>
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default Template
