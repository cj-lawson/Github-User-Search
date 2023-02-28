import { useState, useEffect, useDebugValue } from "react";
import { ReactComponent as TwitterLogo } from "../assets/twitter.svg";
import {
  MapPinIcon,
  LinkIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/solid";
import SearchBar from "./SearchBar";

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

const ProfileCard = () => {
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
      <div className="mb-3">
        <SearchBar
          onChange={(e: any) => setSearchQuery(e.target.value)}
          value={searchQuery}
          onSubmit={handleSubmit}
        />
      </div>
      {userData.map((value, i) => (
        <div
          className="flex flex-col p-4 space-y-8 mt-3 bg-[#fff] rounded-lg"
          key={i}
        >
          <div className="flex flex-row">
            {/* Profile Image */}
            <div className="flex items-center mr-8">
              <img
                src={value.avatar_url}
                className="object-cover object-center h-24 w-24 rounded-full"
              />
            </div>
            {/* Profile Details */}
            <div>
              <h1>{value.name}</h1>
              <h1>@{value.login}</h1>
              <h1>Joined {value.created_at}</h1>
            </div>
          </div>
          {/* Bio */}
          <div>
            <p>{value.bio}</p>
          </div>
          {/* Profile Stats */}
          <div className="bg-[#F6F8FF] flex flex-row justify-between py-6 px-6 text-xs">
            <div>
              <h3>Repos</h3>
              <h1>{value.public_repos}</h1>
            </div>
            <div>
              <h3>Followers</h3>
              <h1>{value.followers}</h1>
            </div>
            <div>
              <h3>Following</h3>
              <h1>{value.following}</h1>
            </div>
          </div>
          {/* Social Links */}
          <div className="grid-cols-4 space-y-3 text-[#4B6A9B] fill-[#4B6A9B]">
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
      ))}
    </>
  );
};

export default ProfileCard;
