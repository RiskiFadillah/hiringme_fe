import { React, useState } from "react";
import axios from "axios";

const PengalamanWorker = (props) => {
  const idUser = props.userId;
  //console.log(idUser, "work");
  const [inputExperience, setinputExperience] = useState({
    company: "",
    role: "",
    start: "",
    end: "",
    desc: "",
    user_id: idUser,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputExperience);
    axios({
      method: "POST",
      data: inputExperience,
      url: `https://gas-crack-production.up.railway.app/api/v1/experience/${idUser}`,
    })
      .then((response) => {
        console.log(response.data);
        alert("Pengalaman berhasil ditambahkan");
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
        <h1 className="text-xl font-bold pb-1">Pengalaman Kerja</h1>
        <div className="border-b-4 mb-[3rem] w-full"></div>
        <form onSubmit={handleSubmit}>
          <div className="flex max-[765px]:flex-wrap gap-5">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Nama Perusahaan</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                onChange={(e) =>
                  setinputExperience({
                    ...inputExperience,
                    company: e.target.value,
                  })
                }
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
                onChange={(e) =>
                  setinputExperience({
                    ...inputExperience,
                    role: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <div className="flex max-[765px]:flex-wrap gap-5">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Tanggal Masuk</span>
              </label>
              <input
                type="Date"
                className="input input-bordered w-full"
                onChange={(e) =>
                  setinputExperience({
                    ...inputExperience,
                    start: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Tanggal Keluar</span>
              </label>
              <input
                type="Date"
                className="input input-bordered w-full"
                onChange={(e) =>
                  setinputExperience({
                    ...inputExperience,
                    end: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <label className="label pt-8">
            <span className="label-text">Deskripsi Singkat</span>
          </label>
          <textarea
            type="textarea"
            class="input input-bordered w-full p-2 outline-pale h-20"
            onChange={(e) =>
              setinputExperience({
                ...inputExperience,
                desc: e.target.value,
              })
            }
          />
          <button
            type="submit"
            className="btn border-warning bg-white hover:bg-warning hover:text-white text-warning w-full mt-8"
          >
            Tambah Pengalaman Kerja
          </button>
        </form>
      </section>
    </>
  );
};

export default PengalamanWorker;
