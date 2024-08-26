import { GW2 } from '../@types/gw2-api.interfaces';
import endpoints from './endpoints';

const account_resolvers = {
  // API Reference: https://wiki.guildwars2.com/wiki/API:2/currencies
  account: async (token: string) => {
    const response = await fetch(
      `${endpoints.Api_V2}/account?access_token=${token}`
    );
    const json = (await response.json()) as GW2.APIAccount;
    return json;
  },
  characterList: async (token: string) => {
    const response = await fetch(
      `${endpoints.Api_V2}/characters?access_token=${token}`
    );
    const json = (await response.json()) as string[];
    return json;
  },
  character: async (token: string, character: string) => {
    const response = await fetch(
      `${endpoints.Api_V2}/characters/${character}?access_token=${token}`
    );
    const json = (await response.json()) as GW2.APICharacter;
    return json;
  },
};

export default account_resolvers;
