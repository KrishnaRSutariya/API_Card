import { createContext, useContext, useEffect, useState } from "react";
import PracticalExample from "./PracticalExample";
import { WiMoonAltNew } from "react-icons/wi";
import PreLoader from "./PreLoader";
import axios from "axios";


const CardWithPreLoader = () => {

    const [data, setdata] = useState([]);

    useEffect(() => {

        axios.get('https://rickandmortyapi.com/api/character')
            .then(function (response) {
                // handle success
                console.log(response.data.results);
                setdata(response.data.results)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    });
            
    return (
        <>
            
            {
                (data == '')
                    ? <PreLoader/>
                    : <PracticalExample/>
            }

        </>
    )
}

export default CardWithPreLoader;