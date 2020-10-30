import fetch from 'cross-fetch'
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import React from 'react'
import { ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  link: new HttpLink({
    uri: '/.netlify/functions/lolly',
    fetch
  }),
  cache: new InMemoryCache()
})

export const wrapRootElement = ({ element }) => <ApolloProvider client={client}>{element}</ApolloProvider>
