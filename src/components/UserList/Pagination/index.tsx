import React from 'react';
import { Wrapper, Button } from './styles';
import type { PaginationProps } from './props';

export const Pagination: React.FC<PaginationProps> = ({ page, totalPages, onPrev, onNext }) => (
  <Wrapper>
    <Button onClick={onPrev} disabled={page === 1}>&lt; Prev</Button>
    <span>
      Page {page} of {totalPages}
    </span>
    <Button onClick={onNext} disabled={page === totalPages}>Next &gt;</Button>
  </Wrapper>
); 