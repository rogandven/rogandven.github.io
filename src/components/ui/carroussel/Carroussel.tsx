import React from 'react';
import { DEFAULT_IMAGE_URL, EDUCATION_CONTAINER_ID } from '../../../constants/daisyui.constants';
import DATA from '../../../data/data';
import { useState } from 'react';
import { mod } from '../../../utils/general.utils';
import { MdSchool } from 'react-icons/md';
import { FaLocationDot } from "react-icons/fa6";
import ShowMoreButton from './ShowMoreButton';

const HIDDEN_PAGINATION_NAME = "hidden_pagination";

function Carroussel() {
    const data = DATA.education;
    const [index, setIndex] = useState(0);

    const element = document?.getElementById(EDUCATION_CONTAINER_ID);
    element && (element.className = "hidden");

    console.log(JSON.stringify(data[index]));
    return (
        <div className="">
            <div className="flex flex-col h-100 overflow-clip mt-5 mb-5">
                <div className=''>
                    <div className="card bg-base-100 h-100 shadow-md max-w-full">
                        <div className="card-body">
                            <h2 className="card-title text-accent">
                                <MdSchool />
                                {data[index].companyName}
                            </h2>
                            <ShowMoreButton id={"education" + index}/>
                            <div className='flex flex-row justify-start text-start items-center align-middle text-info'>
                                <span><FaLocationDot className='mr-1' /></span>
                                <p>{data[index].location}</p>
                            </div>
                        </div>
                        <figure>
                            <img 
                                width={640}
                                height={480}
                                src={(data[index].imageURL || DEFAULT_IMAGE_URL).src}
                                className='object-cover h-full w-full overflow-clip'
                                alt={(data[index].companyName || data[index].name)}
                            /> 
                        </figure>
                    </div>
                </div>            
                <div className="self-center items-center flex justify-center justify-items-center absolute mt-90">
                    <div className="join h-10 overflow-clip shadow-md">
                        <button 
                            className="join-item btn"
                            onClick={() => {setIndex(mod((index - 1), data.length))}}
                        >«</button>

                        <button className="join-item btn w-15 overflow-clip">{data[index].startDate.getFullYear()}</button>

                        <button 
                            className="join-item btn"
                            onClick={() => {setIndex(mod((index + 1), data.length))}}
                        >»</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carroussel;