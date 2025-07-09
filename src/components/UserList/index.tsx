import React, { useState, useMemo, useEffect } from 'react';
import { useUsers } from '../../context/useUsers';
import type { UserListProps } from './props';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Container } from './styles';
import { UserListHeader } from './UserListHeader';
import { UserTable } from './UserTable';
import { UserCardGrid } from './UserCardGrid';
import { Pagination } from './Pagination';
import { PAGE_SIZE } from '../../constants';

export const UserList: React.FC<UserListProps> = ({ onAddUserClick }) => {
  const { users } = useUsers();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [page, setPage] = useState(Number(searchParams.get('page')) || 1);
  const [showAll, setShowAll] = useState(searchParams.get('showAll') === '1');
  const [cardView, setCardView] = useState(searchParams.get('view') === 'card');
  const navigate = useNavigate();

  useEffect(() => {
    setSearchParams({
      ...(search ? { search } : {}),
      ...(page > 1 ? { page: String(page) } : {}),
      ...(showAll ? { showAll: '1' } : {}),
      ...(cardView ? { view: 'card' } : {}),
    });
  }, [search, page, showAll, cardView, setSearchParams]);

  useEffect(() => {
    setSearch(searchParams.get('search') || '');
    setPage(Number(searchParams.get('page')) || 1);
    setShowAll(searchParams.get('showAll') === '1');
    setCardView(searchParams.get('view') === 'card');
  }, [searchParams]);

  const filtered = useMemo(() => {
    return users.filter(u =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.role.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  const paginated = useMemo(() => {
    if (showAll) return filtered;
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page, showAll]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);

  const handleDetails = (id: string) => navigate(`/users/${id}`);

  return (
    <Container>
      <UserListHeader
        search={search}
        setSearch={setSearch}
        onAddUserClick={onAddUserClick}
        showAll={showAll}
        setShowAll={setShowAll}
        cardView={cardView}
        setCardView={setCardView}
        setPage={setPage}
      />
      {cardView ? (
        <UserCardGrid users={paginated} onDetails={handleDetails} />
      ) : (
        <UserTable users={paginated} onDetails={handleDetails} />
      )}
      {!showAll && (
        <Pagination
          page={page}
          totalPages={totalPages}
          onPrev={() => setPage(p => p - 1)}
          onNext={() => setPage(p => p + 1)}
        />
      )}
    </Container>
  );
}; 