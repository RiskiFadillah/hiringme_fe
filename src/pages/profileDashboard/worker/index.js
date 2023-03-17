import React, { useState, useEffect } from "react";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import { Link, useParams, useNavigate } from "react-router-dom";
import Portofolio from "../../../components/poftofolio";
import Experience from "../../../components/workExperience";

const ProfileWorker = () => {
  const {id} = useParams();
  const [data, setData] = useState("");
  useEffect(() => {
    const storageData = localStorage.getItem("@userLogin");
    if (storageData) {
      setData(storageData);
    }
  }, []);
  console.log(data);
  const dataUser = data ? data.user : null;
  console.log(dataUser);

  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <Navbar />
      <div className="bg-secondary w-full h-[30vh] hidden lg:block"></div>
      <div className="lg:flex lg:-mt-40 lg:mx-20">
        <div className="bg-secondary text-center w-full lg:text-start px-5 pb-20 text-white pt-1 lg:flex-1 lg:mx-10 lg:bg-white lg:rounded-lg lg:px-10">
          <img className="bg-header h-40 w-40 rounded-full mt-20 mx-auto" />
          <h2 className="mt-10 lg:mt-0 text-2xl font-bold mb-2">
            Lois Tomlinson
          </h2>
          <p className="mb-2">Web Developer</p>
          <p className="text-pale">Freelancer</p>
          <div className="mb-2 text-pale">
            <img
              className="bg-black"
              src={require("../../../assets/images/icon/map.png").default}
            />
            <p>purwokerto, Jawa tengah</p>
          </div>
          <div className="mb-2 text-pale">
            <img
              className="bg-black"
              src={require("../../../assets/images/icon/phone.png").default}
            />
            <p>0812 - 3456 - 789</p>
          </div>
          <p className="mb-10 pb-10 lg:mb-5 text-pale ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu
            lacus fringilla, vestibulum risus at.
          </p>

          <Link
            className="flex content-center justify-center px-40 py-5 border border-white bg-white text-secondary rounded-md font-bold  hover:text-white hover:bg-indigo-900 lg:w-full lg:text-white lg:bg-secondary"
            to="/homeworker"
          >
            Hire
          </Link>

          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-3 lg:text-header">Skill</h2>
            <div className="flex sm:justify-evenly lg:justify-start lg:flex-wrap gap-2">
              <p className="bg-primary bg-opacity-60 inline-block px-5 rounded-lg py-1">
                html
              </p>
              <p className="bg-primary bg-opacity-60 inline-block px-5 rounded-lg py-1">
                Wordpress
              </p>
              <p className="bg-primary bg-opacity-60 inline-block px-5 rounded-lg py-1">
                Skill
              </p>
              <p className="bg-primary bg-opacity-60 inline-block px-5 rounded-lg py-1">
                Skill
              </p>
              <p className="bg-primary bg-opacity-60 inline-block px-5 rounded-lg py-1">
                Skill
              </p>
              <p className="bg-primary bg-opacity-60 inline-block px-5 rounded-lg py-1">
                Skill
              </p>
              <p className="bg-primary bg-opacity-60 inline-block px-5 rounded-lg py-1">
                Skill
              </p>
            </div>
          </div>

          <div id="social-media" className="pb-10 mt-10 lg:text-pale">
            <a className="px-2 mb-1 bg-none lg:block" href="">
              Email
            </a>
            <a className="px-2 mb-1 bg-none lg:block" href="">
              Instagram
            </a>
            <a className="px-2 mb-1 bg-none lg:block" href="">
              Github
            </a>
            <a className="px-2 bg-none lg:block" href="">
              Git
            </a>
          </div>
        </div>

        <div className=" bg-white mb-32 lg:grow rounded-lg min-h-[40vh]">
          <div
            id="portoexperience"
            className="flex justify-evenly lg:justify-start lg:gap-2"
          >
            <button
              id="portofolio"
              onClick={() => setIsToggled(false)}
              className="pr-5 font-bold text-header border-b-4 border-secondary "
            >
              Portofolio
            </button>
            <button
              id="experience"
              onClick={() => setIsToggled(true)}
              className="font-bold border-b-4 text-header border-secondary"
            >
              Pengalaman Kerja
            </button>
          </div>
          <div>{isToggled ? <Experience /> : <Portofolio />}</div>
          <Link
            className="flex content-center mx-20 justify-center text-center py-3 border-4 border-indigo-900 bg-white text-secondary hover:text-white hover:bg-secondary font-semibold rounded-md lg:mt-20"
            to={`/edit-profile-work/${id}`}
          >
            Edit Profile
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProfileWorker;
