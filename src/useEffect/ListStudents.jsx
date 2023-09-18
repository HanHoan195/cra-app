import React, { useEffect, useState } from "react";

function ListStudents() {

    const [student, setStudent] = useState([])
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [action, setAction] = useState('next');
    const [pages, setPage] = useState([])


    useEffect(() => {
        setLoading(true);

        async function getList() {
            let reps = await fetch(`https://js-post-api.herokuapp.com/api/students?_page=${currentPage}`)
            let json = await reps.json();
            setStudent(json.data)

            let arrpage = []
            for (let i = 1; i <= totalPage; i++) {
                arrpage.push(i)
            }
            setPage(arrpage)

            setLoading(false);
            setTotalPage(Math.ceil(Number(json.pagination._totalRows) / Number(json.pagination._limit)))
        }
        getList();

        //clean up function - Component will unmount:
        return () => {
            console.log('component will unmount');
        }
    }, [currentPage])

    const handleNextPage = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1)
            setAction('next')
        }
    }
    const handlePrevPage = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage - 1)
            setAction('prev')
        }
    }

    const handleFirstPage = () => {
        setCurrentPage(1)
        setAction('first')
    }

    const handleLastPage = () => {
        setCurrentPage(totalPage)
        setAction('last')
    }

    const handleClickPagination = (page) => {
        setCurrentPage(page)
    }

    return (
        <div>
            <div className="row">
                <nav className="navigation">
                    <ul className="pagination">

                        <li className={`${currentPage <= 1 ? 'page-item disabled' : 'page-item'}`}>
                            <a role="button" className="page-link" onClick={handleFirstPage}>
                                <i class="fas fa-angle-double-left"></i>
                            </a>
                        </li>

                        <li className={`${currentPage <= 1 ? 'page-item disabled' : 'page-item'} ${action == 'prev' ? 'active' : ''}`}>
                            <a role="button" className="page-link"
                                onClick={handlePrevPage}
                            >Prev</a>
                        </li>
                        <li className={`${currentPage <= 1 ? 'page-item disabled' : 'page-item'} ${action == 'next' ? 'active' : ''}`}>
                            <a role="button" className="page-link"
                                onClick={handleNextPage}
                            >Next</a>
                        </li>

                        <li className={`${currentPage >= totalPage ? 'page-item disabled' : 'page-item'}`}>
                            <a role="button" className="page-link" onClick={handleLastPage}>
                                <i class="fas fa-angle-double-right" title="last"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="row">
                {
                    loading ? <p className="text-danger">Loading...</p> : (

                        student.map((str) => (
                            <div className="card m-2" style={{ width: 240 }}>
                                <img className="card-img-top" style={{ height: 380 }}
                                    src={str.gender == 'male' ? "https://toigingiuvedep.vn/wp-content/uploads/2022/03/hinh-nen-nguoi-nhen-chibi-cute-cho-dien-thoai.jpg" :
                                        "https://i.pinimg.com/474x/6a/a9/b9/6aa9b9a96388a5b13ad70eb69fbde34f.jpg"}
                                    alt="Card image" />
                                <div className="card-body">
                                    <h4 className="card-title">{str.name}</h4>
                                    <p className="card-text">Age: {str.age}.</p>
                                    <p className="card-text">Mark: {str.mark}.</p>
                                    <p className="card-text">Gender: {str.gender}.</p>
                                    <a href="#" className="btn btn-primary">
                                        See Profile
                                    </a>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    )
}

export default ListStudents;