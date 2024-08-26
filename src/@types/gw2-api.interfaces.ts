export declare namespace GW2 {
  /**
   * export Interface for the current coins to gems exchange rate.
   */
  interface APIExchangeRateCoins {
    /**
     * The number of coins you required for a single gem.
     */
    coins_per_gem: number;
    /**
     * The number of gems you get for the specified quantity of coins.
     */
    quantity: number;
  }

  interface APITradingPostPrices {
    id: number;
    whitelisted: boolean;
    buys: {
      quantity: number;
      unit_price: number;
    };
    sells: {
      quantity: number;
      unit_price: number;
    };
  }

  interface APIItem {
    id: number;
    description: string;
    name: string;
    type: string;
    level: number;
    rarity: string;
    vendor_value: number;
    game_types: ItemGameTypes[];
    flags: ItemFlags[];
    chat_link: string;
    icon: string;
  }

  interface APIAccount {
    id: string;
    name: string;
    age: number;
    world: number;
    guilds: string[];
    guild_leader: [];
    created: string;
    access: string[];
    commander: boolean;
    fractal_level: number;
    daily_ap: number;
    monthly_ap: number;
    wvw_rank: number;
  }

  interface APICharacter {
    name: string;
    race: string;
    gender: string;
    flags: unknown[];
    profession: string;
    level: number;
    guild: string;
    age: number;
    created: string;
    deaths: number;
    title: number;
    backstory: string[];
  }

  interface APIDailyAchievements {
    pve: DailyAchievement[];
    pvp: DailyAchievement[];
    wvw: DailyAchievement[];
    fractals: DailyAchievement[];
  }

  interface DailyAchievement {
    id: number;
    level: { min: number; max: number };
    required_access: DailyAchievementRequiredAccessTypes[];
  }

  type DailyAchievementRequiredAccessTypes =
    | 'GuildWars2'
    | 'HeartOfThorns'
    | 'PathOfFire';

  type ItemFlags = 'NoSalvage' | 'NoSell';

  type ItemGameTypes = 'Activity' | 'Wvw' | 'Dungeon' | 'Pve';

  interface APIAchievement {
    id: number;
    icon: string;
    name: string;
    desription: string;
    requirement: string;
    locked_text: string;
    type: string;
    flags: AchievementFlags[];
    tiers: { count: number; points: number }[];
    rewards: { type: string; id: number; count: number }[];
  }

  type AchievementFlags = 'Daily' | 'PvP';

  interface FriendlyCoinQuantity {
    gold: number;
    silver: number;
    copper: number;
  }

  interface ExchangeRateCoins extends FriendlyCoinQuantity {
    quantity: number;
  }

  interface TradingPostItem {
    name: string;
    buys: {
      quantity: number;
      price: FriendlyCoinQuantity;
      coin: number;
    };
    sells: {
      quantity: number;
      price: FriendlyCoinQuantity;
      coin: number;
    };
  }

  interface DailyAchievementItems {
    [key: string]: { items: APIAchievement[]; title: string };
  }
}
