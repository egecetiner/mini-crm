export type UserListHeaderProps = {
  search: string;
  setSearch: (v: string) => void;
  onAddUserClick: () => void;
  showAll: boolean;
  setShowAll: (v: boolean) => void;
  cardView: boolean;
  setCardView: (v: boolean) => void;
  setPage: (v: number) => void;
}; 