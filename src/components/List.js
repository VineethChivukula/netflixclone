const List = ({ title, param }) => {
    return (
        <div className="list">
            <div className="row">
                <h2 className="text-white title">Netflix</h2>
                <div className="col">
                    <div className="row__posters">
                        <img
                            className="row__poster row__posterLarge"
                            src="https://image.tmdb.org/t/p/original"
                            alt="listimage"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;
