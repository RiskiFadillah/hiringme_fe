/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getProfileById } from "../../../redux/actions/ProfileWorker";
import SkillWorker from "../skillform/skill";
import PengalamanWorker from "../pnglmnWrk/pnglmnWrk";
import PortofolioWorker from "../portofolioWrk/portofolioWrk";
import axios from "axios";

const InputFormWorker = () => {
  const { data, error } = useSelector((state) => state.profileWorkers);
  const [formEditProfile, setformEditProfile] = useState({
    namalengkap: "",
    jobdesk: "",
    domisili: "",
    phone_number: "",
    instagram: "",
    github: "",
    gitlab: "",
    deskripsiSingkat: "",
  });
  const userLogin = JSON.parse(localStorage.getItem("@userLogin"));
  const tokenUser = userLogin ? userLogin.token : null;
  const dispatch = useDispatch();
  const { id } = useParams();
  const userSkill = {
    userId: id,
    skill: data ? data.skills : undefined,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const patchForm = {
      fullname: formEditProfile.namalengkap,
      jobType: formEditProfile.jobdesk,
      address: formEditProfile.domisili,
      phone: formEditProfile.phone_number,
      instagram: formEditProfile.instagram,
      github: formEditProfile.github,
      gitlab: formEditProfile.gitlab,
      bio: formEditProfile.deskripsiSingkat,
    };
    console.log(patchForm);
    axios({
      method: "PATCH",
      // url: `https://gas-crack-production.up.railway.app/api/v1/users/${id}`,
      url: `http://localhost:6144/api/v1/users/${id}`,
      data: patchForm,
      headers: {
        "Content-Type": "multipart/form-data",
        token: tokenUser,
      },
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
              placeholder={data ? data.job_type : undefined}
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
              placeholder={data ? data.address : undefined}
              className="input input-bordered w-full"
              onChange={(e) =>
                setformEditProfile({
                  ...formEditProfile,
                  domisili: e.target.value,
                })
              }
            />
          </div>
          <div className="form-control w-full pt-8">
            <label className="label">
              <span className="label-text">Phone Number :</span>
            </label>
            <input
              type="text"
              placeholder={data ? data.phone : undefined}
              className="input input-bordered w-full"
              onChange={(e) =>
                setformEditProfile({
                  ...formEditProfile,
                  phone_number: e.target.value,
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
                placeholder={data ? data.instagram : undefined}
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
                placeholder={data ? data.github : undefined}
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
                placeholder={data ? data.gitlab : undefined}
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
            placeholder={data ? data.bio : undefined}
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
      <SkillWorker dataSkill={userSkill} />
      {/* Penglaman Kerja */}
      <PengalamanWorker userId={id} />
      {/* Portofolio */}
      <PortofolioWorker />
    </>
  );
};

export default InputFormWorker;
