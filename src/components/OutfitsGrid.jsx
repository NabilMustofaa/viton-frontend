import React from 'react';
import {Link} from 'react-router-dom';

function OutfitsGrid({outfits}) {
    return (
        <div className="flex flex-row flex-wrap justify-center items-center">
            {outfits.map((outfit) => (
                <Link to={"/outfits/"+outfit.image} 
                className=" w-[45%] p-2 border m-3 border-gray-300 rounded-lg" key={outfit.image}>
                    <img src={"/images/"+outfit.image+".jpg"}  alt={outfit.name}/>
                </Link>
            ))}
        </div>
    )
}

export default OutfitsGrid