import { useState } from "react"

import { RoleIcons } from "./RoleIcons"

interface ShipTags {
  hullType: string
  faction: string
  roles: string[]
}

export const ShipTags: React.FC<ShipTags> = ({ hullType, faction, roles }) => {
  const [roleDropdownOpen, setRoleDropdown] = useState(false)

  return (
    <>
      {/* Small Screen Tag Trigger */}
      <button
        onClick={() => setRoleDropdown(!roleDropdownOpen)}
        className={`bg-[#3b444bb9] absolute top-0 left-0 p-[4px] rounded-lg text-base flex items-center space-x-2 border-2 border-gray-400 text-gray-300 ${roleDropdownOpen ? "border-pink-300 text-amber-500" : ""} hover:text-cyan-300 hover:border-amber-500 md:hidden`}
      >
        <i
          className={`fa-solid translate-y-[1px] ${roleDropdownOpen ? "fa-angle-up" : "fa-angle-down"}`}
        />
      </button>
      
      {/* Tags (Smaller Screen) */}
      <div
        className={`${
          roleDropdownOpen ? "max-h-[500px] border" : "max-h-0 border-0"
        } bg-slate-800 absolute md:hidden text-center top-[31px] left-0 w-[150px] border-gray-400 shadow-2xl overflow-hidden z-50 transition-all ease-in-out duration-300`}
      >
        {/* Faction Icon */}
        <div className="w-full flex justify-between border border-transparent border-b-gray-600 hover:border-[#ffa500] hover:bg-[#3b444bb9] py-1 px-5">
          <span className="w-[40px] h-[40px] overflow-hidden relative inline-block">
            <img
              loading="lazy"
              src={`/test_ecgc_2/images/faction/${faction}.png`}
              alt={`${faction}`}
              className="absolute top-0 left-0 w-full h-auto"
            />{" "}
          </span>
          <span className="flex items-center justify-center fake-modal-link">
            {faction}
          </span>
        </div>

        {/* HullType Icon */}
        <div className="w-full flex justify-between border border-transparent border-b-gray-600 hover:border-[#ffa500] hover:bg-[#3b444bb9] py-1 px-5">
          <span className="w-[40px] h-[40px] flex items-center justify-center overflow-hidden relative">
            <img
              loading="lazy"
              src={`/test_ecgc_2/images/ship_type/${hullType}.png`}
              alt={`${hullType}`}
              className="w-full h-full object-contain"
            />
          </span>
          <span className="flex items-center justify-center fake-modal-link">
            {hullType}
          </span>
        </div>

        {/* Role Icons */}
        {roles.map((role) => (
          <div
            key={role}
            className="w-full flex justify-between border border-transparent border-b-gray-600 hover:border-[#ffa500] hover:bg-[#3b444bb9] py-1 px-5"
          >
            <span className="w-[40px] h-[40px] flex items-center justify-center overflow-hidden relative">
              {RoleIcons[role]}
            </span>
            <span className="flex items-center justify-center fake-modal-link">
              {role}
            </span>
          </div>
        ))}
      </div>

      {/* Tags (Larger Screen) */}
      <div className="absolute top-0 left-0 transform translate-x-0 hidden md:inline-block">
        <span className="w-[40px] h-[40px] overflow-hidden relative inline-block">
          <img
            loading="lazy"
            src={`/test_ecgc_2/images/faction/${faction}.png`}
            alt={`${faction}`}
            className="absolute top-0 left-0 w-full h-auto translate-y-[1px]"
          />
        </span>
        <span className="w-[40px] h-[40px] overflow-hidden relative inline-block">
          <img
            loading="lazy"
            src={`/test_ecgc_2/images/ship_type/${hullType}.png`}
            alt={`${hullType}`}
            className="w-full h-auto translate-y-1/2"
          />
        </span>
        {roles.map((role) => (
          <span
            key={role}
            className="w-[40px] h-[40px] overflow-hidden relative inline-block"
          >
            {RoleIcons[role]}
          </span>
        ))}
      </div>
    </>
  )
}
