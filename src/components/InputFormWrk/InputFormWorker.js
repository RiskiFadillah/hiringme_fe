import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { patchProfile } from "../../../redux/actions/ProfileWorker";
import { useParams } from "react-router-dom";
import { getProfileById } from "../../../redux/actions/ProfileWorker";

const InputFormWorker = () => {
  const { data, error } = useSelector((state) => state.profileWorkers);
  console.log(data, "ini data");
  // console.log(error)

  const [formEditProfile, setformEditProfile] = useState({
    namalengkap: "",
    jobdesk: "",
    domisili: "",
    instagram: "",
    github: "",
    gitlab: "",
    deskripsiSingkat: "",
  });
  // console.log(formEditProfile);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id, "ini id");
  const onSubmit = (e) => {};
  const dataProfileUser = useEffect(() => {
    dispatch(getProfileById(id));
  }, [dispatch, id]);
  
  return (
    <>
      {/* Data Diri */}
      <section className="flex-12 shadow-xl p-7">
        <h1 className="text-xl font-bold pb-1">Data Diri</h1>
        <div className="border-b-4 mt-2 mb-[3rem] w-full"></div>
        <form onSubmit={onSubmit}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Nama Lengkap :</span>
            </label>
            <input
              type="text"
              placeholder={data ? data.name : undefined}
              className="input input-bordered w-full"
              onChange={(e) =>
                setformEditProfile({
                  ...formEditProfile,
                  namalengkap: e.target.value,
                })
              }
            />
          </div>
          <div className="form-control w-full pt-8">
            <label className="label">
              <span className="label-text">Job Desk :</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              onChange={(e) =>
                setformEditProfile({
                  ...formEditProfile,
                  jobdesk: e.target.value,
                })
              }
            />
          </div>
          <div className="form-control w-full pt-8">
            <label className="label">
              <span className="label-text">Domisili :</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              onChange={(e) =>
                setformEditProfile({
                  ...formEditProfile,
                  domisili: e.target.value,
                })
              }
            />
          </div>
          <div className="flex max-[765px]:flex-wrap pt-8 gap-5">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Instagram</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) =>
                  setformEditProfile({
                    ...formEditProfile,
                    instagram: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Github</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) =>
                  setformEditProfile({
                    ...formEditProfile,
                    github: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Gitlab</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) =>
                  setformEditProfile({
                    ...formEditProfile,
                    gitlab: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <label className="label pt-8">
            <span className="label-text">Deskripsi Singkat</span>
          </label>
          <input
            type="text"
            class="input input-bordered w-full p-4 outline-pale h-20"
            onChange={(e) =>
              setformEditProfile({
                ...formEditProfile,
                deskripsiSingkat: e.target.value,
              })
            }
          />
          <button type="submit" className="btn btn-warning mt-8">
            Simpan
          </button>
        </form>
      </section>
      {/* Skill */}
      <section className="flex-12 mt-8 p-7 shadow-xl">
        <h1 className="text-xl font-bold ">Skill</h1>
        <div className="border-b-4 mt-2 mb-[3rem] w-full"></div>
        <form className="flex gap-3">
          <div className="form-control w-full">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>

          <button type="click" className="btn btn-warning">
            Simpan
          </button>
        </form>
        <section className="flex flex-row m-3 gap-3">
          <div className="bg-primary p-2 rounded-md flex gap-2">
            Pyhton
            <button>
              <img
                src={require("../../assets/images/icon/pen.png")}
                className="w-4"
              ></img>
            </button>
            <button>
              <img
                src={require("../../assets/images/icon/trash-bin.png")}
                className="w-4"
              ></img>
            </button>
          </div>
          <div className="bg-primary p-2 rounded-md flex gap-2">
            Pyhton
            <button>
              <img
                src={require("../../assets/images/icon/pen.png")}
                className="w-4"
              ></img>
            </button>
            <button>
              <img
                src={require("../../assets/images/icon/trash-bin.png")}
                className="w-4"
              ></img>
            </button>
          </div>
        </section>
      </section>
      {/* Penglaman Kerja */}
      <section className="flex-12 shadow-xl p-7">
        <h1 className="text-xl font-bold pb-1">Pengalaman Kerja</h1>
        <div className="border-b-4 mb-[3rem] w-full"></div>
        <form>
          <div className="flex max-[765px]:flex-wrap gap-5">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Nama Perusahaan</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Posisi</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="flex max-[765px]:flex-wrap gap-5">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Tanggal Masuk</span>
              </label>
              <input type="Date" className="input input-bordered w-full" />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Tanggal Keluar</span>
              </label>
              <input type="Date" className="input input-bordered w-full " />
            </div>
          </div>

          <label className="label pt-8">
            <span className="label-text">Deskripsi Singkat</span>
          </label>
          <textarea
            type="textarea"
            class="input input-bordered w-full p-2 outline-pale h-20"
          />
          <button
            type="click"
            className="btn border-warning bg-white hover:bg-warning hover:text-white text-warning w-full mt-8"
          >
            Tambah Pengalaman Kerja
          </button>
        </form>
      </section>

      {/* Portofolio */}
      <section className="flex-12 shadow-xl p-7">
        <h1 className="text-xl font-bold pb-1">Data Diri</h1>
        <div className="border-b-4 mt-2 mb-[3rem] w-full"></div>
        <form>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Nama Lengkap :</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full pt-8">
            <label className="label">
              <span className="label-text">Job Desk :</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered "
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
                  <div className="flex w-[5rem] h-[5rem]">
                    <img
                      src={require("../../assets/images/icon/image.png")}
                      className="mt-10 w-[35px] h-[35px]"
                    />
                    <span className="text-[0.5rem] mt-10">
                      High-Res Image PNG, JPG or GIF
                    </span>
                  </div>
                  <div className="flex w-[5rem] h-[5rem]">
                    <img
                      src={require("../../assets/images/icon/image.png")}
                      className="mt-10 w-[35px] h-[35px]"
                    />
                    <span className="text-[0.5rem] mt-10">
                      High-Res Image PNG, JPG or GIF
                    </span>
                  </div>
                </div>
              </span>
              <input type="file" name="file_upload" className="hidden" />
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

export default InputFormWorker;
