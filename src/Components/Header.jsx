import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HStack p={'4'} shadow={'base'} bgColor={'blue.900'}>
      <Button variant={'unstyle'} color={'white'}>
       <Link to={'/'}>Home</Link>
      </Button>
      <Button variant={'unstyle'} color={'white'}>
       <Link to={'/exchanges'}>Exchanges</Link>
      </Button>
      <Button variant={'unstyle'} color={'white'}>
       <Link to={'/coins'}>Coins</Link>
      </Button>
  
    </HStack>
  )
}

export default Header