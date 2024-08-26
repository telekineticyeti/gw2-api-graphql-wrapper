# Guild Wars 2 API GraphQL wrapper

This project is a simple GraphQL wrapper for the Guild Wars 2 game API. It is intended as a learning project and not a fully-featured wrapper, however it does import some useful helper methods from my [Guild Wars 2 Prometheus Exporter project](https://github.com/telekineticyeti/gw2-prometheus-exporter)

## Usage

Clone this repository, then issue the following commands to install dependencies and deploy the wrapper server:

```sh
npm install

npm run start
```

The server will listen on localhost port 4000 for queries.

## Example Queries

### Gold -> Gem exchange rate

```gql
  query GW2Query($gemQuantity: Int) {
    gemExchangeRate(gemQuantity: $gemQuantity) {
      gold
      silver
      copper
      gems
    }
  }
```

Example Result:

```json
{
  "data": {
    "gemExchangeRate": {
      "gold": 172,
      "silver": 40,
      "copper": 0,
      "gems": 400
    }
  }
}
```

### Account & Characters

```gql
  query GW2Query($accessToken: String!, $character: String!) {
    account(accessToken: $accessToken) {
      name
    }

    characters(accessToken: $accessToken)

    character(accessToken: $accessToken, character: $character) {
      name
      age
      title
      deaths
    }
  }
```

Example Result:

```json
{
  "data": {
    "account": {
      "name": "bulletboop.9815"
    },
    "characters": [
      "Cogplink",
      "Gromf Baubleseeker",
      ...
    ],
    "character": {
      "name": "Cogplink",
      "age": 517898,
      "title": 376,
      "deaths": 26
    }
  }
}
```