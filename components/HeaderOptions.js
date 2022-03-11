import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PlayIcon,
  PhotographIcon,
  SearchIcon,
} from '@heroicons/react/solid';
import React from 'react';
import HeaderOption from './HeaderOption';

function HeaderOptions() {
  return (
    <div
      className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start
    lg:space-x-36 lg:pl-52 border-b-[1px] py-1"
    >
      {/* left */}
      <div className="flex space-x-6 ">
        <HeaderOption ICON={SearchIcon} title="All" selected />
        <HeaderOption ICON={PhotographIcon} title="Images" />
        <HeaderOption ICON={PlayIcon} title="Videos" />
        <HeaderOption ICON={NewspaperIcon} title="News" />
        <HeaderOption ICON={MapIcon} title="Maps" />
        <HeaderOption ICON={DotsVerticalIcon} title="More" />
      </div>
      {/* right */}
      <div className="flex space-x-4 ">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
