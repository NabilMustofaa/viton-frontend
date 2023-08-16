import React from "react";
import Webcam from "react-webcam";
import { Link, useParams } from "react-router-dom";
import PhotoBar from "../components/PhotoBar";
import { postRekomendasi } from "../utils/api";
import { FiCheck, FiX } from "react-icons/fi";

const FACING_MODE_USER = "user";
const FACING_MODE_ENVIRONMENT = "environment";

const videoConstraints = {
	width: 192,
	height: 256,
	facingMode: FACING_MODE_USER,
};
function PhotoPage({ id }) {
	const { image } = useParams();
	const webcamRef = React.useRef(null);
	const [imgSrc, setImgSrc] = React.useState(null);

	const [photoSelected, setPhotoSelected] = React.useState(false);
	const [loading, setLoading] = React.useState(false);
  const [rekomendasi, setRekomendasi] = React.useState(null);

	const capture = React.useCallback(() => {
		const imageSrc = webcamRef.current.getScreenshot();
		setImgSrc(imageSrc);
		setPhotoSelected(true);
	}, [webcamRef]);

	const [facingMode, setFacingMode] = React.useState(FACING_MODE_USER);
	const handleClick = React.useCallback(() => {
		setFacingMode((prevState) =>
			prevState === FACING_MODE_USER ? FACING_MODE_ENVIRONMENT : FACING_MODE_USER
		);
	}, []);
	function openFileOption() {
		document.getElementById("file").click();
	}
	//set the selected file to displayed on imgSrc
	function handleFileSelect(evt) {
		var files = evt.target.files; // FileList object
		var file = files[0];
		var reader = new FileReader();
		reader.onload = function (e) {
			setImgSrc(e.target.result);
			setPhotoSelected(true);
		};
		reader.readAsDataURL(file);
	}

	//set input file from image
	async function getBase64FromUrl(url) {

		let reader = new FileReader();
		const response = await fetch(url);
		const data = await response.blob();

		return await new Promise((resolve, reject) => {
			reader.onload = () => resolve(reader.result);
			reader.onerror = reject;
			reader.readAsDataURL(data);
		});
	}

	async function sendRekomendasi() {
    setLoading(true);
		const input_image = await getBase64FromUrl(imgSrc);
		const style_image = await getBase64FromUrl("/images/" + image + ".jpg");

		const response = await postRekomendasi({ input_image, style_image, id }).then(
      (res) => {
        console.log(res);
        setRekomendasi(res.data[0].fileUrl);
        return res;
      } 
    );
  }  

  if (rekomendasi !== null) {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <img src={rekomendasi} alt="" className="w-1/2 h-1/2" />
      <Link to="/" className="text-2xl h-20 bg-teal-500 rounded-lg w-1/2 flex justify-center items-center text-white mt-6"> Kembali ke Beranda </Link>
    </div>
  );
  }

	if (loading){
		return (
			<div className="flex flex-row justify-center items-center h-screen">
				<p className="text-2xl">Loading...</p>
			</div>
		);
    }
	if (photoSelected)
		return (
			<div className="">
				<div className="flex flex-row justify-around items-center bg-black  ">
					<img src={"/images/" + image + ".jpg"} alt="" className="w-1/2 h-1/2" />
					<img src={imgSrc} alt="" className="w-1/2 h-1/2" />
				</div>
				<div className="flex flex-row justify-around items-center bg-black h-32 absolute bottom-0 w-full z-10">
					<button
						className="photo-bar__button"
						onClick={() => setPhotoSelected(false)}
					>
						{" "}
						<FiX className=" h-12 w-12 text-white" />{" "}
					</button>
					<button className="photo-bar__button" onClick={sendRekomendasi}>
						{" "}
						<FiCheck className=" h-12 w-12 text-white" />{" "}
					</button>
				</div>
			</div>
		);

	return (
		<div className="-mt-[2%] h-screen">
			<Webcam
				audio={false}
				ref={webcamRef}
				videoConstraints={{
					...videoConstraints,
					facingMode,
				}}
				screenshotFormat="image/jpeg"
				className="h-[100vh] -mt-[20vh]"
			/>
			<img src={"/images/" + image + ".jpg"} alt="" className="hidden" />
			<img src={imgSrc} alt="" className="hidden" />
			<PhotoBar
				onPhotoClick={capture}
				onRotateClick={handleClick}
				onUploadClick={openFileOption}
			/>
			<input
				type="file"
				accept="image/*"
				className="hidden"
				id="file"
				onChange={handleFileSelect}
			/>
		</div>
	);
}

export default PhotoPage;
