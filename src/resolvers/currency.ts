import { GW2 } from '../@types/gw2-api.interfaces';
import endpoints from './endpoints';

const currency_resolvers = {
  // API Reference: https://wiki.guildwars2.com/wiki/API:2/currencies
  getCurrencyIds: async () => {
    const response = await fetch(`${endpoints.Api_V2}/currencies`);
    const json = (await response.json()) as number[];
    return json;
  },
  getCurrency: async (id: number) => {
    const response = await fetch(`${endpoints.Api_V2}/currencies/${id}`);
    return await response.json();
  },
  getGemExchangeRate: async (gemQuantity: number = 400) => {
    const response = await fetch(
      `${endpoints.Api_V2}/commerce/exchange/coins?quantity=1000000`
    );
    const json = (await response.json()) as GW2.APIExchangeRateCoins;
    const totalCoins = gemQuantity * json.coins_per_gem;
    // Prettify coins to Gold/Silver/Copper values
    const { gold, silver, copper } = friendlyCoinValue(totalCoins);

    return { gems: gemQuantity, coins: totalCoins, gold, silver, copper };
  },
};

/**
 * Convert total coin coint to the equivalent Gold / Silver / Copper amount
 * @param coins number of copper coins.
 */
const friendlyCoinValue = (coins: number): GW2.FriendlyCoinQuantity => {
  const gold = Math.trunc(coins / 10000);
  // const silver = parseInt(.toString().padStart(4, '0'));
  const silver = Math.trunc((coins % 10000) / 100);
  // const copper = parseInt((coins % 100).toString().padStart(4, '0'));
  const copper = coins % 100;
  console.log(coins, { gold, silver, copper });
  return { gold, silver, copper };
};

export default currency_resolvers;
