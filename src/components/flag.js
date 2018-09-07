import React from 'react'

const URL_FLAG = "http://www.sciencekids.co.nz/images/pictures/flags680/"

    const Flag = ({country,className}) => {
        return (
            <div>
                <img className={className} src={`${URL_FLAG}${country}.jpg`} />
            </div>
        )
    }
    
export default Flag