import { useState } from "react";
import { createPortal } from "react-dom";

import ProfileModal from "../Modal/profileModal";
import useUserStore from "../../../store/userProfile";

function Profile() {
  const [isModalOpen, setModalOpen] = useState(false);
  const { userData } = useUserStore();

  function openWebPage() {
    chrome.tabs.create({ url: import.meta.env.VITE_CLIENT_URL });
  }

  return (
    <div className="flex items-center text-xl font-bold border-gray-300 drop-shadow-lg">
      <button className="mr-3 ml-2" onClick={() => setModalOpen(true)}>
        <img
          className="h-12 w-12 mt-6 rounded-full p-[3px] hover:bg-slate-200 cursor-pointer"
          src={userData.icon}
          alt="User Icon"
        />
      </button>
      <button
        className="p-2 mt-6 text-white border border-solid rounded-md text-balance hover:bg-gray-400 mr-5 cursor-pointer"
        onClick={openWebPage}
      >
        Open addComment Web
      </button>
      {isModalOpen &&
        createPortal(
          <ProfileModal onClose={() => setModalOpen(false)} />,
          document.body,
        )}
    </div>
  );
}

export default Profile;
