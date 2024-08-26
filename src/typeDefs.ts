import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Currency {
    id: Int
    name: String
    description: String
    order: Int
    icon: String
  }

  type GemsToCoinsExchangeRate {
    gems: Int
    coins: Int
    gold: Int
    silver: Int
    copper: Int
  }

  type Account {
    name: String
    age: Int
    world: String
    guilds: [String]
    created: String
    access: [String]
    wvw_rank: Int
  }

  type Character {
    name: String
    race: String
    gender: String
    profession: String
    level: Int
    guild: String
    age: Int
    created: String
    deaths: Int
    title: Int
    backstory: [String]
  }

  type Query {
    currencyIds: [Int]
    currency(id: Int!): Currency
    gemExchangeRate(gemQuantity: Int): GemsToCoinsExchangeRate
    account(accessToken: String!): Account
    characters(accessToken: String!): [String]
    character(accessToken: String!, character: String!): Character
  }
`;
