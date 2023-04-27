import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <HStack borderBottom="1px solid whitesmoke" backgroundColor={'blackAlpha.900'} p={'4'} shadow={'base'} >
        <Button color={'white'} variant={'unstyled'}>
          <Link to={'/'}>Home</Link>
        </Button>

        <Button color={'white'} variant={'unstyled'}>
          <Link to={'/exchanges'}>Exchanges</Link>
        </Button>

        <Button color={'white'} variant={'unstyled'}>
          <Link to={'/coins'}>Coins</Link>
        </Button>
      </HStack>
    </div>
  )
}

export default Header