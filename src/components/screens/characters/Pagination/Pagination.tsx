import ReactPaginate from "react-paginate";
import { useEffect } from 'react';

type PaginationProps = {
  pageIndex: number
 
  info: {
    pages: number
  
  }
  setPageIndex: (value: number) => void
}

const Pagination = ({ pageIndex, info, setPageIndex }: PaginationProps ) => {


  const handlePageClick = (info:  { selected: number }) => {
   
    window.scrollTo(0, 0);
    setPageIndex(info.selected + 1);
  };

  useEffect(() => {
  
    window.scrollTo(0, 0);
  }, [pageIndex]);

 
  return (
    <>
      <ReactPaginate
        className="pagination justify-content-center my-4 gap-4 pink-pagination"  
        breakLabel="..."
        nextLabel=">"
        forcePage={pageIndex === 1 ? 0 : pageIndex - 1}
        activeClassName="active"
        previousClassName="btn btn-secondary fs-5 prev"
        nextClassName="btn btn-secondary fs-5 next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={info?.pages || 1}
        previousLabel="<"
        renderOnZeroPageCount={null}
        pageClassName="page-item btn-dark"
        pageLinkClassName="page-link btn-dark" 
      />
    </>
  );
};

export default Pagination;
