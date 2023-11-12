import ReactPaginate from "react-paginate";

interface ReactCustomPaginateProps {
  pageRangeDisplayed?: number;
  marginPagesDisplayed?: number;
  pageCount?: number;
  page?: number;
  onPageChangeHandler: (selected: { selected: number }) => void;
}

const ReactCustomPaginate = ({
  pageRangeDisplayed = 2,
  marginPagesDisplayed = 1,
  pageCount = 0,
  page = 0,
  onPageChangeHandler,
}: ReactCustomPaginateProps) => {
  return pageCount > 1 ? (
    <ReactPaginate
      className="relative mt-4 z-0 inline-flex rounded-md shadow-sm -space-x-px"
      breakLabel="..."
      breakClassName="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-none text-sm font-medium text-gray-700"
      nextLabel="next"
      nextClassName="relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-none text-sm font-medium text-gray-500 hover:bg-white"
      pageRangeDisplayed={pageRangeDisplayed}
      marginPagesDisplayed={marginPagesDisplayed}
      activeClassName="z-10 bg-white border-white text-black relative inline-flex items-center px-4 py-2 border text-sm font-medium"
      onPageChange={onPageChangeHandler}
      forcePage={page - 1}
      pageCount={pageCount}
      pageClassName="bg-none border-gray-300 text-gray-500 hover:bg-white relative inline-flex items-center px-4 py-2 border text-sm font-medium"
      previousLabel="prev"
      previousClassName="relative inline-flex items-center text-sm px-3 py-2 rounded-l-md border border-gray-300 bg-none text-sm font-medium text-gray-500 hover:bg-white"
      renderOnZeroPageCount={undefined}
    />
  ) : null;
};

export default ReactCustomPaginate;
