import { useEffect } from "react";
import { fetchData } from "../api/api";
import { useState } from "react";

/**
 * Renders a list component with a title and fetches data based on a parameter.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the list.
 * @param {string} props.param - The parameter used to fetch data.
 * @returns {JSX.Element} The rendered list component.
 */
const List = ({ title, param }) => {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetchData(param).then((res) => {
            setList(res.data.results);
        });
    }, [param]);

    return (
        <div className="list">
            <div className="row">
                <h2 className="text-white title">{title}</h2>
                <div className="col">
                    <div className="row__posters">
                        {list.map((item) => (
                            <img
                                className="row__poster row__posterLarge"
                                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                                alt={item.title}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;
