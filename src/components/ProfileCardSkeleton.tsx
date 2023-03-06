import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { ReactComponent as TwitterLogo } from "../assets/twitter.svg";
import {
  MapPinIcon,
  LinkIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/solid";

const ProfileCardSkeleton = () => {
  return (
    <div className="bg-[#FEFEFE] dark:bg-gray-dark dark:shadow-transparent p-10 rounded-3xl font-normal shadow-lg shadow-[#DEE4F6]">
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-row animate-pulse">
          {/* IMAGE SKELETON */}
          <div className="rounded-full bg-slate-200 h-24 w-24 dark:bg-blue-dark"></div>
          <div className="flex flex-col gap-y-4 ml-6">
            <div className="h-2 w-40 bg-slate-200 dark:bg-blue-dark rounded"></div>
            <div className="h-2 w-20 bg-slate-200 dark:bg-blue-dark rounded"></div>
            <div className="h-2 w-28 bg-slate-200 dark:bg-blue-dark rounded"></div>
          </div>
        </div>
        <div>
          <div className="space-y-3 w-3/4 animate-pulse">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 dark:bg-blue-dark rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 dark:bg-blue-dark rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 dark:bg-blue-dark rounded"></div>
          </div>
        </div>
        {/* Profile Stats */}
        <div className="animate-pulse bg-blue-light dark:bg-blue-dark rounded-xl flex flex-row justify-between py-8 px-6 text-xs md:px-12 gap-y-8">
          <div>
            <h3 className="text-xs text-gray-secondary-dark dark:text-slate-100 dark:opacity-90 mb-1">
              Repos
            </h3>
          </div>
          <div>
            <h3 className="text-xs text-gray-secondary-dark dark:text-slate-100 dark:opacity-90 mb-1">
              Followers
            </h3>
          </div>
          <div>
            <h3 className="text-xs text-gray-secondary-dark dark:text-slate-100 dark:opacity-90 mb-1">
              Following
            </h3>
          </div>
        </div>
        {/* Social Links */}
        <div className="animate-pulse grid grid-rows-1 sm:grid-cols-2 text-gray-secondary-dark fill-gray-secondary-dark dark:text-slate-100 dark:fill-slate-100 gap-y-8">
          <div className="flex flex-row space-x-4">
            <MapPinIcon className="w-5" />
            <div className="h-2 w-40 bg-slate-200 dark:bg-blue-dark rounded"></div>
          </div>
          <div className="flex flex-row space-x-4">
            <LinkIcon className="w-5" />
            <div className="h-2 w-40 bg-slate-200 dark:bg-blue-dark rounded"></div>
          </div>
          <div className="flex flex-row space-x-4">
            <BuildingOffice2Icon className="w-5" />
            <div className="h-2 w-40 bg-slate-200 dark:bg-blue-dark rounded"></div>
          </div>
          <div className="flex flex-row space-x-4">
            <TwitterLogo className="w-5 " />
            <div className="h-2 w-40 bg-slate-200 dark:bg-blue-dark rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCardSkeleton;
