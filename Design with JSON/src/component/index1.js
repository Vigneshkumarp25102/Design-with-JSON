import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faList, faSearch, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import {Details} from './details.js';
export function Index1() {
    return (
        <>
            <div className="container-fluid mt-2">
                <div className="row">
                    <div className="col-lg-3">
                        <p className="txt1idx1 text-primary">All Leads<br></br><span className="txt2idx1 text-dark">from 20 September to 20 December 2015</span></p>
                    </div>
                    <div className="col-lg-3">&nbsp;</div>
                    <div className="col-lg-2 mt-2 inpbtnidx h-25">
                            <input type="text" className="inpidx1" placeholder="Search a leaf"  />
                            <FontAwesomeIcon icon={faSearch} className="btn1idx1" />
                    </div>
                    <div className="col-lg-2 mt-2">
                            <select className="selectbar">
                                <option>All Leads</option>
                            </select>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <FontAwesomeIcon icon={faList}/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <FontAwesomeIcon icon={faShareNodes}/>
                    </div>
                    <div className="col-lg-2 d-flex plusidx1 text-center">
                        <FontAwesomeIcon icon={faCirclePlus} className="ic4idx1 text-light"/>
                        &nbsp;&nbsp;
                        <p className="txt4idx1 text-light">Add new</p>
                    </div>
                </div>

            </div>
           <Details/>
        </>
    );
}