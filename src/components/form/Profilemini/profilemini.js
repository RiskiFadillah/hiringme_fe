import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getProfileById } from "../../../redux/actions/ProfileWorker";

const Profilemini = () => {
  const { data, error } = useSelector((state) => state.profileWorkers);
  const [images, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState(null);

  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id, "ini id");
  const dataProfileUser = useEffect(() => {
    dispatch(getProfileById(id));
  }, [dispatch, id]);

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImagePrev(URL.createObjectURL(file));
    setImage(file);
    console.log(file);
  };
  return (
    <>
      <div className="card bg-base-100 shadow-xl max-[375px]:w-[19rem] max-[465px]:w-[25rem] sm:w-[28rem]">
        <form>
          <figure className="p-10 flex-col gap-2">
            {imagePrev ? (
              imagePrev && (
                <img
                  src={imagePrev}
                  alt="Shoes"
                  className="rounded-full w-[10rem] h-[10rem]"
                />
              )
            ) : (
              <img
                src={require("../../../assets/img/default.png")}
                alt="Shoes"
                className="rounded-full w-[10rem] h-[10rem]"
              />
            )}
            <label className="block">
              <input
                type="file"
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-white file:text-pale hover:file:font-bold"
                onChange={(e) => onImageUpload(e)}
                img={imagePrev}
              />
            </label>
          </figure>
          <div className="card-body ">
            <h2 className="card-title">{data ? data.name : undefined}</h2>
            <h3>{data ? data.job_type : undefined}</h3>
            <h3>Freelance</h3>
            <span>{data ? data.address : undefined}</span>
            <span>0{data ? data.phone : undefined}</span>
            <p>
            {data ? data.bio : undefined}
            </p>
            <div className="items-center card-actions flex-col">
              <button className="btn btn-primary  text-white  w-[100%]">
                Ubah Password
              </button>
              <button className="btn btn-primary  outline-secondary bg-white text-secondary hover:bg-white w-[100%]">
                Kembali
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profilemini;
