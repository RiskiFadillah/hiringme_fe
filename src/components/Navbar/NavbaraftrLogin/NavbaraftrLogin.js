import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfileById } from "../../../redux/actions/ProfileWorker";
import { useParams } from "react-router-dom";

const NavbaraftrLogin = ({ setIsLogin }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("@userLogin")) {
      navigate("/");
    }
  }, []);

  const { data, loading, error } = useSelector((state) => state.profileWorkers);
  console.log(data);

  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getProfileById(id));
  }, [dispatch, id]);
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <h2 className="btn btn-ghost normal-case text-xl">Peworld</h2>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <img
                  className="w-[1.8rem] h-[1.8rem]"
                  src={require("../../../assets/images/icon/bell.png")}
                />
                <span className="badge badge-sm indicator-item">1</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">1 Notification</span>
                <span className="text-info">From : Admin</span>
                <img
                  src={require("../../../assets/images/chat/Chat.png")}
                ></img>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View Notification
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <img
                  className="w-[1.8rem] h-[1.8rem]"
                  src="https://img.icons8.com/ios/50/null/filled-message.png"
                />
                <span className="badge badge-sm indicator-item">1</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">2 Message</span>
                <span className="text-info">From : Admin</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View Message
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={require("../../../assets/images/christopher-campbell.jpg")}
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li onClick={() => navigate(`/edit-profile-work/${id}`)}>
                Profile
                <span className="badge">New</span>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li
                onClick={() => {
                  localStorage.removeItem("@company");
                  localStorage.removeItem("@userLogin");
                  localStorage.removeItem("@token");
                  localStorage.removeItem("@userCompany");
                  localStorage.removeItem("@id");
                  // localStorage.removeItem("@token");
                  // localStorage.removeItem("@userCompany");
                  // localStorage.removeItem("@ompany");
                  setIsLogin(false);
                }}
              >
                <Link to="/">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbaraftrLogin;

// import { Link } from "react-router-dom";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getProfileById } from "../../../redux/actions/ProfileWorker";
// import { useParams } from "react-router-dom";

// const NavbaraftrLogin = ({ setIsLogin }) => {
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (!localStorage.getItem("@userLogin")) {
//       navigate("/");
//     }
//   }, []);
//   const { id } = useParams();
//   const { data, loading, error } = useSelector((state) => state.profileWorkers);
//   console.log(data);
//   const dispatch = useDispatch();
//   useEffect(
//     (id) => {
//       dispatch(getProfileById(id));
//     },
//     [dispatch, id]
//   );
//   return (
//     <>
//       <div className="navbar bg-base-100">
//         <div className="flex-1">
//           <h2 className="btn btn-ghost normal-case text-xl">Peworld</h2>
//         </div>
//         <div className="flex-none">
//           <div className="dropdown dropdown-end">
//             <label tabIndex={0} className="btn btn-ghost btn-circle">
//               <div className="indicator">
//                 <img
//                   className="w-[1.8rem] h-[1.8rem]"
//                   src={require("../../../assets/images/icon/bell.png")}
//                 />
//                 <span className="badge badge-sm indicator-item">1</span>
//               </div>
//             </label>
//             <div
//               tabIndex={0}
//               className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
//             >
//               <div className="card-body">
//                 <span className="font-bold text-lg">1 Notification</span>
//                 <span className="text-info">From : Admin</span>
//                 <img
//                   src={require("../../../assets/images/chat/Chat.png")}
//                 ></img>
//                 <div className="card-actions">
//                   <button className="btn btn-primary btn-block">
//                     View Notification
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="dropdown dropdown-end">
//             <label tabIndex={0} className="btn btn-ghost btn-circle">
//               <div className="indicator">
//                 <img
//                   className="w-[1.8rem] h-[1.8rem]"
//                   src="https://img.icons8.com/ios/50/null/filled-message.png"
//                 />
//                 <span className="badge badge-sm indicator-item">1</span>
//               </div>
//             </label>
//             <div
//               tabIndex={0}
//               className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
//             >
//               <div className="card-body">
//                 <span className="font-bold text-lg">2 Message</span>
//                 <span className="text-info">From : Admin</span>
//                 <div className="card-actions">
//                   <button className="btn btn-primary btn-block">
//                     View Message
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="dropdown dropdown-end">
//             <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
//               <div className="w-10 rounded-full">
//                 <img
//                   src={require("../../../assets/images/christopher-campbell.jpg")}
//                 />
//               </div>
//             </label>
//             <ul
//               tabIndex={0}
//               className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
//             >
//               {data?.map((item) => (
//                 <li onClick={() => navigate(`/editprofilework/${item.id}`)}>
//                   Profile
//                   <span className="badge">New</span>
//                 </li>
//               )) ?? <div>Home</div>}
//               <li>
//                 <a>Settings</a>
//               </li>
//               <li
//                 onClick={() => {
//                   localStorage.removeItem("@company");
//                   localStorage.removeItem("@userLogin");
//                   // localStorage.removeItem("@token");
//                   // localStorage.removeItem("@userCompany");
//                   // localStorage.removeItem("@ompany");
//                   setIsLogin(false);
//                 }}
//               >
//                 <Link to="/">Logout</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NavbaraftrLogin;
