import type { NextPage } from 'next'

import { Column, Input, Icon } from '@components'

const Home: NextPage = () => {
  return (
    <Column bg='background' minHeight='100vh' px='20px' py='40px'>
      <Input icon={<Icon name='search' />} placeholder='Search book' />
    </Column>
  )
}

export default Home
