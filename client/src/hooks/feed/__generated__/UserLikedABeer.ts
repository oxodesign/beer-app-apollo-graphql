/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LikeAction } from "./../../../globalTypes";

// ====================================================
// GraphQL subscription operation: UserLikedABeer
// ====================================================

export interface UserLikedABeer_userLikedABeer_user {
  __typename: "User";
  id: string;
  name: string;
}

export interface UserLikedABeer_userLikedABeer_beer {
  __typename: "Beer";
  id: string;
  name: string;
}

export interface UserLikedABeer_userLikedABeer {
  __typename: "UserLike";
  action: LikeAction;
  user: UserLikedABeer_userLikedABeer_user;
  beer: UserLikedABeer_userLikedABeer_beer;
}

export interface UserLikedABeer {
  userLikedABeer: UserLikedABeer_userLikedABeer | null;
}
