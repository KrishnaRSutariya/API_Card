import { useEffect, useState } from 'react';
import axios from 'axios';

const RickAndMorty = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(function (response) {
                // handle success
                console.log(response.data.results);
                setdata(response.data.results);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    });
    return (
        <>
            <div className="App">
                {
                    data.map((items) => {
                        return (
                            <>
                                <img src={items.image}></img>
                                <h1>{items.id} - {items.name}</h1>
                                <h2>Status :- {items.status}</h2>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
export default RickAndMorty;