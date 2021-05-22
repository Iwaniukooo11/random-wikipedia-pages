import React from 'react'
import Layout from '../../layout/layout'
import Wrap from '../../layout/wrap'

import Button from '../../components/button/button'

const Buttons = () => {
  return (
    <Layout>
      <Wrap>
        <Button full first>
          Read full on Wikipedia
        </Button>
        <Button>Find another article</Button>
      </Wrap>
    </Layout>
  )
}

export default Buttons
