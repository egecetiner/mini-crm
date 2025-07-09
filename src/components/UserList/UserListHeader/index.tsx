import React from 'react';
import { Header, Button, Toggle, SearchInput } from './styles';
import type { UserListHeaderProps } from './props';

export const UserListHeader: React.FC<UserListHeaderProps> = ({
  search,
  setSearch,
  onAddUserClick,
  showAll,
  setShowAll,
  cardView,
  setCardView,
  setPage,
}) => (
  <Header>
    <div>
      <Button onClick={onAddUserClick}>➕ Add User</Button>
      <Toggle onClick={() => setShowAll(!showAll)}>
        {showAll ? 'Show Paginated' : 'Show All'}
      </Toggle>
      <Toggle onClick={() => setCardView(!cardView)}>
        {cardView ? 'Table View' : 'Card View'}
      </Toggle>
    </div>
    <SearchInput
      placeholder="Search by name, email, or role..."
      value={search}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setSearch(e.target.value); setPage(1); }}
    />
  </Header>
); 