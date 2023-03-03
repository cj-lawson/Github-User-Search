import { useState, useEffect, useDebugValue } from "react";
import useConvertDate from "../hooks/useConvertDate";
import { ReactComponent as TwitterLogo } from "../assets/twitter.svg";
import {
  MapPinIcon,
  LinkIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/solid";
import SearchBar from "./SearchBar";

useConvertDate();

interface UserData {
  avatar_url: string;
  login: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  location: string;
  blog: string;
  company: string;
  twitter_username: string;
}

const ProfileCard2 = () => {
  const [userData, setUserData] = useState<UserData[]>([]);
  const [searchQuery, setSearchQuery] = useState("spicybeefpho");
  const githubURL = `https://api.github.com/users/`;

  async function fetchData() {
    const data = await (await fetch(`${githubURL}${searchQuery}`)).json();
    setUserData([data]);
    console.log(searchQuery);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <>
      {/* searchbar */}
      <div className="mb-10">
        <SearchBar
          onChange={(e: any) => setSearchQuery(e.target.value)}
          value={searchQuery}
          onSubmit={handleSubmit}
        />
      </div>

      {userData.map((value, key) => (
        <div
          className="bg-[#FEFEFE] p-10 rounded-3xl font-normal shadow-lg shadow-[#DEE4F6] "
          key={key}
        >
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-row">
              <img
                src={value.avatar_url}
                className="object-cover object-center h-24 w-24 rounded-full"
              />
              <div className="flex flex-col gap-y-2 ml-6">
                <h1 className="text-xl font-bold text-gray-primary-dark">
                  {value.name}
                </h1>
                <h1 className="text-blue-crayola">@{value.login}</h1>
                <h1 className="text-gray-tertiary order-last">
                  Joined {value.created_at}
                </h1>
              </div>
            </div>
            <div>
              <p className="shrink opacity-75 text-gray-secondary-dark">
                {value.bio}
              </p>
            </div>
            {/* Profile Stats */}
            <div className="bg-blue-light dark:bg-blue-dark rounded-xl flex flex-row justify-between py-4 px-6 text-xs md:px-12 gap-y-8">
              <div>
                <h3 className="text-xs text-gray-secondary-dark mb-1">Repos</h3>{" "}
                <h1 className="text-xl font-bold text-gray-primary-dark">
                  {value.public_repos}
                </h1>
              </div>
              <div>
                <h3 className="text-xs text-gray-secondary-dark mb-1">
                  Followers
                </h3>
                <h1 className="text-xl font-bold text-gray-primary-dark">
                  {value.followers}
                </h1>
              </div>
              <div>
                <h3 className="text-xs text-gray-secondary-dark mb-1">
                  Following
                </h3>
                <h1 className="text-xl font-bold text-gray-primary-dark">
                  {value.following}
                </h1>
              </div>
            </div>
            {/* Social Links */}
            <div className="grid grid-cols-2 text-[#4B6A9B] fill-[#4B6A9B] gap-y-8">
              <div className="flex flex-row space-x-4">
                <MapPinIcon className="w-5" />
                <a href="">{value.location}</a>
              </div>
              <div className="flex flex-row space-x-4">
                <LinkIcon className="w-5" />
                <a href="">{value.blog}</a>
              </div>
              <div className="flex flex-row space-x-4">
                <BuildingOffice2Icon className="w-5" />
                <a href="">{value.company}</a>
              </div>
              <div className="flex flex-row space-x-4">
                <TwitterLogo className="w-5 " />
                <a href="">{value.twitter_username}</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

// {userData.map((value, i) => (
//     // Main Parent Grid container
//     <div
//       className="grid grid-cols-4 p-8 pt-10 gap-2 mt-3 bg-gray-light dark:gray-dark rounded-lg"
//       key={i}
//     >
//       {/* Profile Image */}
//       <div className="">
//         <img
//           src={value.avatar_url}
//           className="object-cover object-center h-24 w-24 rounded-full"
//         />
//       </div>

//       {/* Profile Details */}
//       <div className="col-span-3 grid-flow-row auto-rows-min">
//         <div className="flex flex-row mb-8">
//           <div className="flex flex-col justify-between">
//             <h1>{value.name}</h1>
//             <h1 className="text-blue-crayola">@{value.login}</h1>
//             <h1 className="order-last">Joined {value.created_at}</h1>
//           </div>
//         </div>

//         {/* Bio */}
//         <div className="w-fit flex items-center mb-8">
//           <p className="shrink opacity-75 text-gray-secondary-dark">
//             {value.bio}
//           </p>
//         </div>

//         {/* Profile Stats */}
//         <div className="bg-blue-light dark:bg-blue-dark rounded-xl flex flex-row justify-between py-4 px-6 text-xs md:px-12 gap-y-8 mb-8">
//           <div>
//             <h3 className="text-xs text-gray-secondary-dark mb-1">Repos</h3>
//             <h1 className="text-xl font-bold text-gray-primary-dark">
//               {value.public_repos}
//             </h1>
//           </div>
//           <div>
//             <h3 className="text-xs text-gray-secondary-dark mb-1">
//               Followers
//             </h3>
//             <h1 className="text-xl font-bold text-gray-primary-dark">
//               {value.followers}
//             </h1>
//           </div>
//           <div>
//             <h3 className="text-xs text-gray-secondary-dark mb-1">
//               Following
//             </h3>
//             <h1 className="text-xl font-bold text-gray-primary-dark">
//               {value.following}
//             </h1>
//           </div>
//         </div>
//         {/* Social Links */}
//         <div className="content-center grid grid-cols-2 space-y-3 text-[#4B6A9B] fill-[#4B6A9B]">
//           <div className="flex flex-row space-x-4">
//             <MapPinIcon className="w-5" />
//             <a href="">{value.location}</a>
//           </div>
//           <div className="flex flex-row space-x-4">
//             <LinkIcon className="w-5" />
//             <a href="">{value.blog}</a>
//           </div>
//           <div className="flex flex-row space-x-4">
//             <BuildingOffice2Icon className="w-5" />
//             <a href="">{value.company}</a>
//           </div>
//           <div className="flex flex-row space-x-4">
//             <TwitterLogo className="w-5 " />
//             <a href="">{value.twitter_username}</a>
//           </div>
//         </div>
//       </div>
//     </div>

export default ProfileCard2;
