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

export const GET_REVIEWS_FOR_RECIPE = gql`
  query GetAllReviews($id: String!) {
    allReviews(filter: {id: $id}) {
      id
      rating
      comment
    }
  }
`;
