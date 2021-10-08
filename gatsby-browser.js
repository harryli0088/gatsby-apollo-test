import React from 'react'

//https://www.apollographql.com/docs/react/api/react/hooks/#the-apolloprovider-component
import { ApolloProvider } from '@apollo/client'
import client from "./src/apollo/apolloSetup"

export const wrapPageElement = ({element}) => {
  return (
    <ApolloProvider client={client}>
      {element}
    </ApolloProvider>
  )
}