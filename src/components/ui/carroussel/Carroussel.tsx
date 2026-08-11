import React from 'react';
import { DEFAULT_IMAGE_URL, EDUCATION_CONTAINER_ID } from '../../../constants/daisyui.constants';
import DATA from '../../../data/data';
import { useState } from 'react';
import { mod } from '../../../utils/general.utils';
import Picture from 'astro/components/Picture.astro';

const HIDDEN_PAGINATION_NAME = "hidden_pagination";

function Carroussel() {
    const data = DATA.education;
    const [index, setIndex] = useState(0);

    const element = document?.getElementById(EDUCATION_CONTAINER_ID);
    element && (element.className = "size-0 hidden");

    return (
        <div>
            <p>{index}</p>

            <div className="join">
                <img 
                    width={480}
                    height={480}
                    src={(data[index].imageURL || DEFAULT_IMAGE_URL).src}
                    className='object-cover overflow-clip'
                />
                <button 
                    className="join-item btn"
                    onClick={() => {setIndex(mod((index - 1), data.length))}}
                >«</button>

                <button className="join-item btn">{data[index].startDate.getFullYear()}</button>

                <button 
                    className="join-item btn"
                    onClick={() => {setIndex(mod((index + 1), data.length))}}
                >»</button>
            </div>
        </div>
    );
}

export default Carroussel;