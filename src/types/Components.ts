import { Character, Planet, Starship } from "./Api";

export interface DynamicListProps {
  items: Planet[] | Starship[] | Character[];
  isLoading: boolean;
  routeTo: string;
  episode_id: number;
}
