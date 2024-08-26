import account_resolvers from './resolvers/account';
import currency_resolvers from './resolvers/currency';

export const resolvers = {
  Query: {
    currencyIds: () => currency_resolvers.getCurrencyIds(),
    currency: (_: any, args: { id: number }) =>
      currency_resolvers.getCurrency(args.id),
    gemExchangeRate: (_: any, args: { gemQuantity: number }) =>
      currency_resolvers.getGemExchangeRate(args.gemQuantity),
    account: (_: any, args: { accessToken: string }) =>
      account_resolvers.account(args.accessToken),
    characters: (_: any, args: { accessToken: string }) =>
      account_resolvers.characterList(args.accessToken),
    character: (_: any, args: { accessToken: string; character: string }) =>
      account_resolvers.character(args.accessToken, args.character),
  },
};
