import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faBolt, faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import img1 from '../user.png';
import {Header2} from "./header2.js";
export function Header() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row mt-2'>
                    <div className='col-lg-1'>
                        <FontAwesomeIcon icon={faBolt} className='iche1 mt-3 text-light p-2 bg-primary' />
                    </div>
                    <div className='col-lg-8'>&nbsp;</div>
                    <div className='col-lg-3 d-flex justify-content-around'>
                        <FontAwesomeIcon icon={faBell} className=" mt-3 iche2 p-2 text-secondary" />
                        <img src={img1} className='prhe1' />
                        <h6 className='namehe1 mt-3'>Vignesh kumar<br /><span className='namehe2'>Welcome.!</span></h6>
                        <FontAwesomeIcon icon={faGear} className=" mt-3 iche2 p-2 text-secondary" />
                    </div>
                </div>
            </div>
            <Header2/>
        </>
    );
}