import gql from "graphql-tag";
export const ALL_RECIPES_QUERY = gql`
  query {
    allRecipes {
      id
      title
      description
      recipePicture
      rating
      numberOfReviews
      created
      tags {
        name
      }
    }
  }
`;
