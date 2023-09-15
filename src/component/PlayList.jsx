import React, { useState } from "react";

function PlayList() {

    const [list, setList] = useState([
        'My Heart Will Go On',
        'Không cảm xúc',
        'Mãi mãi một tình yêu'

    ])


    const [nameSong, setNameSong] = useState('')

    const addNewSong = (e) => {
        e.preventDefault();
        setList([
            ...list,
            nameSong
        ])
        setNameSong('')
    }

    const handleRemoveSong = (songRemove) => {
        let confirm = window.confirm(` Xóa ${songRemove} ra khỏi danh sách??`)
        if (!confirm) return;

        setList((prev) => {
            let newList = prev.filter((item) => item != songRemove)
            return newList;
        })
    }

    const handleEditSong = (songEdit) => {
        let newSongName = prompt('Nhập tên mới: ', songEdit);
        if (newSongName != null) {
            setList((prev) =>
                prev.map((item) => {
                    if (item === songEdit) {
                        return newSongName;
                    }
                    return item;
                })
            );
        }
    };





    return (
        <div className="d-flex justify-content-center">
            <div className="row col-md-6">
                <h3>PlayList</h3>
                <form onSubmit={addNewSong}>
                    <div className="form-group d-flex align-item-center">
                        <input type="text" className="form-control me-2"
                            onInput={(e) => setNameSong(e.target.value)} value={nameSong}
                        />

                        <button type="submit" className="btn btn-outline-success">ADD</button>
                    </div>
                </form>

                <ul className="list-group mt-3">
                    {
                        list.map((song, index) => (
                            <li key={index} className="list-group-item list-group-item-primary d-flex justify-content-between mt-2">{song}
                                <div>
                                    <span role="button" className="fw-bolder text-danger"
                                        onClick={() => handleRemoveSong(song)}
                                    > &times;</span>
                                    <span role="button" className="fw-bolder text-success"
                                        onClick={() => handleEditSong(song)}
                                    >🖋</span>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default PlayList;