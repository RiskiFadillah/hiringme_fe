import React from "react";
import { useEffect } from "react";
import InputFormCmpny from "../../../components/InputFormCmpny/InputFormCmpny";
import Navbar from "../../../components/Navbar/Navbar";
import Profilemini from "../../../components/form/Profilemini/profilemini";
import "../../../assets/css/index.css";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../../components/Footer/Footer";
import { getProfileById } from "../../../redux/actions/ProfileWorker";
import { useParams } from "react-router-dom";

const EditProfilCmpny = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.profileWorkers);
  console.log(data, "Halo");
  console.log(loading);
  const { id } = useParams();
  console.log(id, "ini id");

  useEffect(() => {
    dispatch(getProfileById(id));
  }, [dispatch, id]);
  return (
    <>
      <body className="background">
        <Navbar />
        <section className="flex max-[965px]:flex-wrap gap-8 m-[8rem] justify-center">
          <section className="">
            <Profilemini />
          </section>
          <section className="p-5 ">
            <InputFormCmpny />
          </section>
        </section>
        <Footer />
      </body>
    </>
  );
};

export default EditProfilCmpny;
