import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './details.css';
import { faCircle, faEllipsisVertical, faMessage, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
export function Details() {

    const [info, setInfo] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/details.json")
            .then(response => response.json())
            .then(json => setInfo(json))
    })
    return (
        <>
            <div>
                <div className='Container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='table-responsive'>
                                <table className='table table-bordered table-hover'>
                                    <thead>
                                        <tr className="text-center">
                                            <th>Company details</th>
                                            <th>Project tag</th>
                                            <th>Contact person</th>
                                            <th>Status</th>
                                            <th>Follow-up date</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            info.map((value, index) => (
                                                <tr>
                                                    <td>
                                                        <div className="row">
                                                            <div className="col-lg-2">
                                                                <img src={value.img} className="col-lg-12" />
                                                            </div>
                                                            <div className="col-lg-10">
                                                                <h4>{value.name}</h4>
                                                                <p>{value.description}</p>
                                                            </div>
                                                        </div>
                                                    </td>

                                                    <td>{value.tag}</td>
                                                    <td>
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <h4>{value.person}</h4>
                                                                <p>{value.persondesc}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="row">
                                                            <div className="col-lg-2 mt-1">
                                                                <FontAwesomeIcon icon={faCircle} className="color1" />
                                                            </div>
                                                            <div className="col-lg-10">
                                                                <h4 >{value.status}</h4>
                                                                <p>{value.statusdesc}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <h4>{value.date}</h4>
                                                                <p>{value.datedesc}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="row">
                                                            <div className="col-lg-4">
                                                                <FontAwesomeIcon icon={faPhoneVolume} />
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <FontAwesomeIcon icon={faMessage} />
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <FontAwesomeIcon icon={faEllipsisVertical} />
                                                            </div>
                                                        </div>
                                                    </td>

                                                </tr>

                                            ))

                                        }
                                    </tbody>
                                    

                                </table>
                                <div className="row">
                                        <div className="col-lg-4">&nbsp;</div>
                                        <div className="col-lg-4 text-center">
                                            <button className="mt-3 butt">Load More</button>
                                        </div>
                                        <div className="col-lg-4">
                                            &nbsp;
                                        </div>
                                    </div>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}