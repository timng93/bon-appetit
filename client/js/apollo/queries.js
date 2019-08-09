import gql from "graphql-tag";
export const ALL_RECIPES_QUERY = gql`
  query {
    allRecipes {
      id
      title
      description
      tags {
        id
        name
      }
      reviews {
        rating
      }
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation AddReview($id: String!, $rating: Float!) {
    createReview(id: $id, rating: $rating) {
      id
      rating
    }
  }
`;
