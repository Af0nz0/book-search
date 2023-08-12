import { gql } from "@apollo/client";

export const GET_SEARCH_RESULTS = gql`
  query GetSearchResults($searchTerm: String!) {
    searchBooks(searchTerm: $searchTerm) {
      title
      description
      bookId
    }
  }
`;


