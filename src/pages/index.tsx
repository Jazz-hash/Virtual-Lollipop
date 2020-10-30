import * as React from 'react'
import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { navigate } from '@reach/router'
import Banner from '../components/Banner'
import { Button } from '../components/Button'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <Banner />
        <Button label="Make a new lolly to send to a friend" onClickFunc={() => navigate('/create')} />
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
