import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

function FetchData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Axios.get("https://api.tvmaze.com/search/shows?q=all");
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    
    return (
        <div className='container'>
            <div className="mt-3">
                <h3>Fetching data</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Language</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.show.id}</td>
                                <td>{item.show.name}</td>
                                <td>    
                                        {item.show.image && (
                                            <Link to={`/Second/${item.show.id}`} state={{
                                                    imageUrl: item.show.image.medium,
                                                    summary: item.show.summary,
                                                    showId: item.show.id,
                                                    showName: item.show.name,
                                            }}>
                                                <img src={item.show.image.medium} alt={item.show.name} style={{ maxWidth: '100px', maxHeight: '100px' }} />    
                                            </Link>
                                        )}
                                </td>   
                                <td>{item.show.language}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default FetchData;
