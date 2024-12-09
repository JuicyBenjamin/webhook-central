export interface MetaTFTProfile {
  summoner: Summoner;
  ranked: Ranked;
  ranked_rating_changes: Ranked[];
  matches: Match[];
  app_matches: any[];
  replays: any[];
  ranked_season_stats: Rankedseasonstats;
  server_rank: Serverrank;
}

interface Serverrank {
  rank: number;
  total: number;
}

interface Rankedseasonstats {
  '1100': _1100;
}

interface _1100 {
  total: number;
  placements: number[];
}

interface Match {
  placement: number;
  riot_match_id: string;
  match_timestamp: number;
  queue_id: number;
  rating_queue_id: number;
  tft_set: string;
  avg_rating: null | string;
  avg_rating_numeric: null | number;
  match_data_url: string;
  summary: Summary;
}

interface Summary {
  level: number;
  little_legend: string;
  time_eliminated: number;
  last_round: number;
  total_damage_to_players: number;
  players_eliminated: number;
  units: Unit[];
  augments: any[];
  traits: string[];
  player_rating: null | string;
  player_rating_numeric: null | number;
  headliner_traits: null;
}

interface Unit {
  character_id: string;
  tier: number;
  itemNames: (string | string)[];
}

interface Ranked {
  num_games: number;
  rating_text: string;
  rating_numeric: number;
  created_timestamp: string;
  tft_set_name: string;
  queue_id: number;
}

interface Summoner {
  id: number;
  puuid: string;
  summoner_region: string;
  profile_icon_id: number;
  summoner_level: number;
  revision_date: number;
  riot_id: string;
  account: Account;
  last_refreshed: number;
  last_name_fetch: string;
}

interface Account {
  summoner_id: string;
  account_id: string;
}