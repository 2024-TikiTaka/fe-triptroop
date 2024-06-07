import { Pagination } from "react-bootstrap";

function PagingBar({ pageInfo, setCurrentPage }) {

    const pageNumber = [];
    for (let i = pageInfo.startPage; i <= pageInfo.endPage; i++) {
        pageNumber.push(i);
    }

    return (
        <>
            <Pagination>
                <Pagination.First
                    onClick={() => setCurrentPage(0)}
                />
                <Pagination.Prev
                    disabled={pageInfo.currentPage <= 1}
                    onClick={() => setCurrentPage(pageInfo.currentPage - 1)}
                />

                {
                    pageNumber.map(num =>
                        <Pagination.Item
                            key={num}
                            active={pageInfo.currentPage === num}
                            disabled={pageInfo.currentPage === num}
                            onClick={() => setCurrentPage(num)}
                        >
                            {num}
                        </Pagination.Item>)
                }

                <Pagination.Next
                    disabled={pageInfo.currentPage >= pageInfo.maxPage}
                    onClick={() => setCurrentPage(pageInfo.currentPage + 1)}
                />
                <Pagination.Last
                    onClick={() => setCurrentPage(pageInfo.maxPage - 1)}
                />
            </Pagination>
        </>
    );
}

export default PagingBar;