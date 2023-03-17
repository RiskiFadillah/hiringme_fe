import React from "react";
import "../../../assets/css/index.css";
import Profilemini from "../../../components/form/Profilemini/profilemini";
import Navbar from "../../../components/Navbar/Navbar";
import InputFormWorker from "../../../components/form/InputFormWrk/InputFormWorker";
import Footer from "../../../components/Footer/Footer";

const EditProfileWrk = () => {
  return (
    <>
      <body className="background">
        <Navbar />
        <section className="flex max-[965px]:flex-wrap gap-8 m-[8rem] justify-center">
          <section className="">
            <Profilemini />
          </section>
          <section className="p-5 bg-white rounded-xl">
            <InputFormWorker />
          </section>
        </section>
        <Footer />
      </body>
    </>
  );
};

export default EditProfileWrk;
