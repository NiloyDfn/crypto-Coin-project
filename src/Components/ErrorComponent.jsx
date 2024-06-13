import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

const ErrorComponent = ({message}) => {
  return (
    <Alert status='error' pos={'fixed'} top={'40'} left={'50%'} 
    transform={'translate(-50%)'}
    w={'container.lg'}>
      <AlertIcon/>
      {message}
    </Alert>
  )
}

export default ErrorComponent