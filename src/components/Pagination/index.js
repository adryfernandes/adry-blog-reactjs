import { ArrowButton, Icon, PageNumber, PaginationWrapper } from "./styled";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export function Pagination({ count, itemsPerPage, currentPage, onPageChage }) {
  const pageNumbers = [];
  const totalNumberPages = Math.ceil(count / itemsPerPage);

  for (let i = 1; i <= totalNumberPages; i++) {
    pageNumbers.push(i);
  }

  const haveItemForPaginate = count > 0;

  return (
    haveItemForPaginate && (
      <PaginationWrapper>
        <ArrowButton
          disabled={currentPage === 1}
          onClick={() => onPageChage(currentPage - 1)}>
          <Icon icon={faChevronLeft} />
        </ArrowButton>
        {pageNumbers.map((pageNumber) => {
          return (
            <PageNumber
              key={pageNumber}
              active={pageNumber === currentPage}
              onClick={() => onPageChage(pageNumber)}>
              {pageNumber}
            </PageNumber>
          );
        })}
        <ArrowButton
          disabled={currentPage === pageNumbers.length}
          onClick={() => onPageChage(currentPage + 1)}>
          <Icon icon={faChevronRight} />
        </ArrowButton>
      </PaginationWrapper>
    )
  );
}
