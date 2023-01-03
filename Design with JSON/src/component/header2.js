import { faBuilding, faContactBook } from '@fortawesome/free-regular-svg-icons';
import { faBookBookmark, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header2.css'
import { Index1 } from './index1';

export function Header2(){
    return(
        <>
        <div className='container-fluid'>
            <div className='row rowbgclr mt-2'>
                <div className='col-lg-2'>&nbsp;</div>
                <div className='col-lg-2 d-flex  hetxt1 mt-3'>
                    <FontAwesomeIcon icon={faBookBookmark} className="ic1he2 p-2 text-light mt-2"/>
                    <p className='text-light txt1he2'>&nbsp;Leads<br/><span className='txt2he2'>&nbsp;12 leads are pending</span></p>
                </div> 
                <div className='col-lg-2 d-flex mt-3'>
                <FontAwesomeIcon icon={faBuilding} className="ic1he2 p-2 text-light mt-2"/>
                    <p className='text-light txt1he2'>&nbsp;Account<br/><span className='txt2he2'>&nbsp;10 active accounts</span></p>
                </div>
                <div className='col-lg-2 d-flex mt-3'>
                <FontAwesomeIcon icon={faContactBook} className="ic1he2 p-2 text-light mt-2"/>
                    <p className='text-light txt1he2'>&nbsp;Contacts<br/><span className='txt2he2'>&nbsp;10 active users</span></p>
                </div>
                <div className='col-lg-2 d-flex mt-3'>
                <FontAwesomeIcon icon={faClockRotateLeft} className="ic1he2 p-2 text-light mt-2"/>
                    <p className='text-light txt1he2'>&nbsp;Tasks<br/><span className='txt2he2'>&nbsp;15 tasks are pending</span></p>
                </div>
                <div className='col-lg-2'>&nbsp;</div>
            </div>
        </div>
        <Index1/>
        </>
    );
}