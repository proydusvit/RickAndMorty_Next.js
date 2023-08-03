import ReactPaginate from "react-paginate";

type Prop = {
  data: any;
  pageIndex: number;
  setPageIndex: any;
};

const Pagination = ({ pageIndex, data, setPageIndex }: Prop) => {
  const handlePageClick = (data: any) => {
    setPageIndex(data.selected + 1);
  };

  return (
    <>
      <ReactPaginate
        className="pagination justify-content-center my-4 gap-4"
        breakLabel="..."
        nextLabel="next >"
        forcePage={pageIndex === 1 ? 0 : pageIndex - 1}
        activeClassName="active"
        previousClassName="btn btn-primary fs-5 prev"
        nextClassName="btn btn-primary fs-5 next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={data.info.pages}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        pageClassName="page-item"
        pageLinkClassName="page-link"
      />
    </>
  );
};

export default Pagination;
