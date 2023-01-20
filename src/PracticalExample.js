import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import logo from './favicon.ico';
import { WiMoonAltNew } from "react-icons/wi";
import CardWithPreLoader, { userData1 } from './CardWithPreLoader';


const PracticalExample = () => {

    const [data, setdata] = useState([]);

    useEffect(() => {

        // Methods - 1
        // fetch('url')
        // .then(()=>{

        // })
        // .catch(()=>{

        // })

        // Methods - 2
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
            <div className="text-bg-dark p-md-5 p-sm-4 p-1">
                <div className='text-center pb-mb-5 pb-sm-4 pb-1 fw-bolder font_size location_hover'>API - Card</div>
                <div className="container">
                    <div className="row d-flex justify-content-xxl-start justify-content-xl-between align-items-center text-break">
                        {
                            data.map((item) => {
                                return (
                                    <>
                                        <div className="col-xxl-4 col-lg-6 col-md-12" key={item.id}>
                                            <div className="d-flex m-2 rounded-3 overflow-hidden flex-wrap" style={{ backgroundColor: '#3C3E44' }}>
                                                <div className="col-sm-4 col-12">
                                                    <img src={item.image} alt="" className='' style={{ width: '100%', height: '100%' }} />
                                                </div>
                                                <div className="col-sm-8 col-12 px-3">
                                                    <div className="top py-2">
                                                        <a href="#" className='fw-bolder fs-3 location_hover'>
                                                            <div>{item.name}</div>
                                                        </a>
                                                        <div className="fw-bold">
                                                            {
                                                                (item.status == 'Alive') ? <WiMoonAltNew className='pe-1 text-success' /> : (item.status == 'Dead') ? <WiMoonAltNew className='pe-1 text-danger' /> : <WiMoonAltNew className='pe-1 text-secondary' />
                                                            }
                                                            {item.status} - {item.gender} - {item.species}</div>
                                                    </div>
                                                    <div className="middle py-2">
                                                        <div className="fw-bolder" style={{ color: '#9E9E9E' }}>Last known location :</div>
                                                        <a href="#" className='location_hover'>
                                                            <div>{item.location.name}</div>
                                                        </a>
                                                    </div>
                                                    <div className="bottom py-2">
                                                        <div className="fw-bolder" style={{ color: '#9E9E9E' }}>First seen in :</div>
                                                        <a href="#" className='location_hover'>
                                                            <div>{item.origin.name}</div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default PracticalExample;