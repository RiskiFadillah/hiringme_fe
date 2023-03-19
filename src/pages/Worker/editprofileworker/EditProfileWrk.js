import React, { useState, useEffect } from "react";
import "../../../assets/css/index.css";
import Profilemini from "../../../components/form/Profilemini/profilemini";
import Navbar from "../../../components/Navbar/Navbar";
import InputFormWorker from "../../../components/form/InputFormWrk/InputFormWorker";
import Footer from "../../../components/Footer/Footer";
import { useDispatch, useSelector, connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getProfileById } from "../../../redux/actions/ProfileWorker";

const EditProfileWrk = () => {
  const { data, error } = useSelector((state) => state.profileWorkers);
  const [images, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState(null);
  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImagePrev(URL.createObjectURL(file));
    setImage(file);
    setInputImage({
      ...inputImage,
      image: file,
    });
  };

  const [inputImage, setInputImage] = useState({
    image: "",
  });

  console.log(inputImage);

  const dispatch = useDispatch();
  const { id } = useParams();
  const dataProfileUser = useEffect(() => {
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
          <section className="p-5 bg-white rounded-xl">
            <InputFormWorker userImage={inputImage} />
          </section>
        </section>
        <Footer />
      </body>
    </>
  );
};

export default EditProfileWrk;
