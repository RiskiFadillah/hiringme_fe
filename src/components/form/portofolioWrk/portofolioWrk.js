import { React, useState, useEffect } from "react";
import axios from "axios";

const PortofolioWorker = (props) => {
  const idUser = props.userId;
  const [images, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState(null);
  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImagePrev(URL.createObjectURL(file));
    setImage(file);
    console.log(file, "halo");

    // Perbarui nilai inputPortofolio setelah setImage
    setInputPortofolio({
      ...inputPortofolio,
      image: file,
    });
  };

  const [inputPortofolio, setInputPortofolio] = useState({
    name: "",
    link: "",
    image: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      data: inputPortofolio,
      url: `http://localhost:6144/api/v1/portfolio/${idUser}`,
      // url: `https://gas-crack-production.up.railway.app/api/v1/portfolio/${idUser}`,
      //
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        console.log(response.data);
        alert("Portofolio berhasil ditambahkan");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      {" "}
      <section className="flex-12 shadow-xl p-7">
        <h1 className="text-xl font-bold pb-1">Portofolio</h1>
        <div className="border-b-4 mt-2 mb-[3rem] w-full"></div>
        <form onSubmit={handleSubmit}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Nama Portofolio :</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              onChange={(e) =>
                setInputPortofolio({
                  ...inputPortofolio,
                  name: e.target.value,
                })
              }
            />
          </div>
          <div className="form-control w-full pt-8">
            <label className="label">
              <span className="label-text">Link :</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered "
              onChange={(e) =>
                setInputPortofolio({
                  ...inputPortofolio,
                  link: e.target.value,
                })
              }
            />
          </div>
          <div className="pt-8">
            <label className="flex justify-center w-full h-[15rem] px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
              <span className="flex items-center space-x-2 flex-col pt-3 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <span className="font-medium text-gray-600 ">
                  Drag & Drop untuk Upload Gambar Aplikasi Mobile
                  <p className="text-[15px]">
                    Atau cari untuk mengupload file dari direktorimu.
                  </p>
                </span>
                <div className="flex gap-8">
                  {imagePrev ? (
                    imagePrev && (
                      <img
                        src={imagePrev}
                        alt="Portofolio"
                        className="rounded-[2rem] w-[15rem] h-[9rem]"
                      />
                    )
                  ) : (
                    <>
                      <div className="flex w-[5rem] h-[5rem]">
                        <img
                          src={require("../../../assets/images/icon/image.png")}
                          className="mt-10 w-[35px] h-[35px]"
                        />
                        <span className="text-[0.5rem] mt-10">
                          High-Res Image PNG, JPG or GIF
                        </span>
                      </div>
                      <div className="flex w-[5rem] h-[5rem]">
                        <img
                          src={require("../../../assets/images/icon/image.png")}
                          className="mt-10 w-[35px] h-[35px]"
                        />
                        <span className="text-[0.5rem] mt-10">
                          High-Res Image PNG, JPG or GIF
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </span>
              <input
                type="file"
                name="file_upload"
                className="hidden"
                onChange={(e) => onImageUpload(e)}
                img={imagePrev}
              />
            </label>
          </div>
          <button
            type="click"
            className="btn border-warning bg-white hover:bg-warning hover:text-white text-warning w-full mt-8"
          >
            Tambah Portofolio
          </button>
        </form>
      </section>
    </>
  );
};

export default PortofolioWorker;
