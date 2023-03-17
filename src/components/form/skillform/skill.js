import React, { useState, useEffect } from "react";
import { getProfileById } from "../../../redux/actions/ProfileWorker";
import axios from "axios";

const SkillWorker = (props) => {
  const { userId, skill } = props.dataSkill;

  const [inputSkill, setInputSkill] = useState({
    userId: userId,
    skillName: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    axios({
      method: "POST",
      data: inputSkill,
      url: `https://gas-crack-production.up.railway.app/api/v1/skills/${userId}`,
    })
      .then((response) => {
        console.log(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    console.log(id, "ini id skill");
    axios
      .delete(`http://localhost:6144/api/v1/skills/${id}`)
      .then((response) => {
        console.log(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        // do something after failed delete
      });
  };

  return (
    <>
      <section className="flex-12 mt-8 p-7 shadow-xl">
        <h1 className="text-xl font-bold ">Skill</h1>
        <div className="border-b-4 mt-2 mb-[3rem] w-full"></div>
        <form onSubmit={onSubmit} className="flex gap-3">
          <div className="form-control w-full">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              onChange={(e) =>
                setInputSkill({
                  ...inputSkill,
                  skillName: e.target.value,
                })
              }
            />
          </div>

          <button type="submit" className="btn btn-warning">
            Simpan
          </button>
        </form>
        <section className="flex flex-row m-3 gap-3 flex-wrap">
          {skill &&
            skill.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-primary p-2 rounded-md flex gap-2"
                >
                  {item.skill_name}
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => handleDelete(item.id)}
                  >
                    <img
                      src={require("../../../assets/images/icon/trash-bin.png")}
                      className="w-4"
                    ></img>
                  </button>
                </div>
              );
            })}
        </section>
      </section>
    </>
  );
};

export default SkillWorker;
