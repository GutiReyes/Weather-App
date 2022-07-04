import { Spinner } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import "../styles/Loading.css";

const Loading = () => {
    return (
        <div className='main'>
            <div className='son'>
                <Spinner color='primary' className='spinnerReactStrap'/>
            </div>
        </div>
    );
};

export default Loading;