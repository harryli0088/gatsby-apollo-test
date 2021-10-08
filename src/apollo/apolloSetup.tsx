import React from 'react'
import fetch from 'isomorphic-fetch'
import { createHttpLink } from 'apollo-link-http'
// import { setContext } from 'apollo-link-context'
import {
  ApolloClient,
  ApolloConsumer,
  ApolloLink,
  // HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  fetch, //https://stackoverflow.com/questions/64362315/gatsby-webpackerror-invariant-violation-error-with-apolloclient
  uri: "https://graphql-weather-api.herokuapp.com/" //process.env.REACT_APP_GRAPHQL_URL
})

//customize request headers https://www.apollographql.com/docs/react/networking/authentication/
const authLink = setContext(async (_, { headers }) => {
  const token = await new Promise((resolve) => setTimeout(() => resolve("test-token"), 1))

  return {
    headers: {
      ...headers,
      'token': token,
    }
  }
});


const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
})

export default client


export const withApolloClient = Component => props => (
  <ApolloConsumer>
    {client => <Component {...props} client={client}/>}
  </ApolloConsumer>
);
