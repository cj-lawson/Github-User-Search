import { useState, useEffect } from "react";
import useConvertDate from "../hooks/useConvertDate";
import { ReactComponent as TwitterLogo } from "../assets/twitter.svg";
import {
  MapPinIcon,
  LinkIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/solid";
import SearchBar from "./SearchBar";
import ProfileCardSkeleton from "./ProfileCardSkeleton";

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
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<UserData[]>([]);
  const [searchQuery, setSearchQuery] = useState("octocat");
  const githubURL = `https://api.github.com/users/`;

  async function fetchData() {
    try {
      console.log("loading...");
      setLoading(true);
      const data = await (await fetch(`${githubURL}${searchQuery}`)).json();
      setUserData([data]);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData().then(() => {
      // setTimeout for showcasing loading states
      setTimeout(() => {
        setLoading(false);
        console.log("done loading");
      }, 2000);
    });
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetchData().then(() => {
      // setTimeout for showcasing loading states
      setTimeout(() => {
        setLoading(false);
        console.log("done loading");
      }, 2000);
    });
  };

  if (loading) {
    return (
      <>
        <div className="mb-10">
          <SearchBar
            onChange={(e: any) => setSearchQuery(e.target.value)}
            value={searchQuery}
            onSubmit={handleSubmit}
          />
        </div>
        <ProfileCardSkeleton />
      </>
    );
  }
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
          key={key}
          className="bg-[#FEFEFE] dark:bg-gray-dark dark:shadow-transparent p-10 rounded-3xl font-normal shadow-lg shadow-[#DEE4F6]"
        >
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-row">
              <img
                src={value.avatar_url}
                className="object-cover object-center h-24 w-24 rounded-full"
              />
              <div className="flex flex-col gap-y-2 ml-6">
                <h1 className="text-xl font-bold text-gray-primary-dark dark:text-slate-100">
                  {value.name}
                </h1>
                <h1 className="text-blue-crayola">@{value.login}</h1>
                <h1 className="text-gray-tertiary dark:text-slate-100  dark:opacity-95 order-last">
                  Joined {useConvertDate(value.created_at)}
                </h1>
              </div>
            </div>
            <div>
              <p className="shrink opacity-75 text-gray-secondary-dark dark:text-slate-100 order-last">
                {value.bio ? (
                  value.bio
                ) : (
                  <p className="opacity-50">This profile has no bio</p>
                )}
              </p>
            </div>
            {/* Profile Stats */}
            <div className="bg-blue-light dark:bg-blue-dark rounded-xl flex flex-row justify-between py-4 px-6 text-xs md:px-12 gap-y-8">
              <div>
                <h3 className="text-xs text-gray-secondary-dark dark:text-slate-100 dark:opacity-90 mb-1">
                  Repos
                </h3>
                <h1 className="text-xl font-bold text-gray-primary-dark dark:text-slate-100">
                  {value.public_repos}
                </h1>
              </div>
              <div>
                <h3 className="text-xs text-gray-secondary-dark dark:text-slate-100 dark:opacity-90 mb-1">
                  Followers
                </h3>
                <h1 className="text-xl font-bold text-gray-primary-dark dark:text-slate-100">
                  {value.followers}
                </h1>
              </div>
              <div>
                <h3 className="text-xs text-gray-secondary-dark dark:text-slate-100 dark:opacity-90 mb-1">
                  Following
                </h3>
                <h1 className="text-xl font-bold text-gray-primary-dark dark:text-slate-100">
                  {value.following}
                </h1>
              </div>
            </div>
            {/* Social Links */}
            <div className="grid grid-rows-1 sm:grid-cols-2 text-gray-secondary-dark fill-gray-secondary-dark dark:text-slate-100 dark:fill-slate-100 gap-y-8">
              <div className="flex flex-row space-x-4">
                {value.location ? (
                  <>
                    <MapPinIcon className="w-5" />
                    <a href="">{value.location}</a>
                  </>
                ) : (
                  <>
                    <MapPinIcon className="w-5 opacity-50" />
                    <a href="" className="opacity-50">
                      Not Available
                    </a>
                  </>
                )}
              </div>
              <div className="flex flex-row space-x-4">
                {value.blog ? (
                  <>
                    <LinkIcon className="w-5" />
                    <a href="">{value.blog}</a>
                  </>
                ) : (
                  <>
                    <LinkIcon className="w-5 opacity-50" />
                    <a href="" className="opacity-50">
                      Not Available
                    </a>
                  </>
                )}
              </div>
              <div className="flex flex-row space-x-4">
                {value.company ? (
                  <>
                    <BuildingOffice2Icon className="w-5" />
                    <a href="">{value.company}</a>
                  </>
                ) : (
                  <>
                    <BuildingOffice2Icon className="w-5 opacity-50" />
                    <a href="" className="opacity-50">
                      Not Available
                    </a>
                  </>
                )}
              </div>
              <div className="flex flex-row space-x-4">
                {value.twitter_username ? (
                  <>
                    <TwitterLogo className="w-5 " />
                    <a href="">{value.twitter_username}</a>
                  </>
                ) : (
                  <>
                    <TwitterLogo className="w-5 opacity-50" />
                    <a href="" className="opacity-50">
                      Not available
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProfileCard;
