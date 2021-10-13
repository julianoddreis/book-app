import styled from 'styled-components'

import { Text, Column, Icon } from '@components'

interface NavigationTabsProps {
  currentPath: string
}

const routes = [
  {
    label: 'Home',
    icon: 'home',
    path: '/home'
  },
  {
    label: 'Libraries',
    icon: 'book',
    path: '/libraries'
  },
  {
    label: 'Profile',
    icon: 'profile',
    path: '/profile'
  }
]

const NavigationTabs = ({ currentPath }: NavigationTabsProps) => (
  <Container>
    {routes.map((route) => (
      <Column key={route.path} justifyContent='center' alignItems='center'>
        <Icon name={route.icon} color={currentPath === route.path ? 'black' : '#BFBEBF'} />
        <Text fontSize='10px' fontWeight={400}>
          {route.label}
        </Text>
      </Column>
    ))}
  </Container>
)

const Container = styled.div`
  position: fixed;
  bottom: -1px;
  height: 60px;
  width: 100%;
  background: white;
  display: flex;
  justify-content: space-around;
`

export default NavigationTabs
