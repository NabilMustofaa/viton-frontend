import React from "react";
import { FiFile, FiCamera, FiRotateCcw } from "react-icons/fi";

function PhotoBar({ onUploadClick, onPhotoClick, onRotateClick }) {
    return (
        <div className="flex flex-row justify-around items-center bg-black h-32 absolute bottom-0 w-full z-10">
            <button className="photo-bar__button" onClick={onUploadClick}> <FiFile className=" h-12 w-12 text-white" /> </button>
            <button className="photo-bar__button" onClick={onPhotoClick}> <FiCamera className=" h-12 w-12 text-white" /> </button>
            <button className="photo-bar__button" onClick={onRotateClick}> <FiRotateCcw className=" h-12 w-12 text-white" /> </button>
        </div>
    )


}

export default PhotoBar;