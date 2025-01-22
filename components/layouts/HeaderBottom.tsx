"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Category } from "@/types/Category";
import { getCategoryInMenu } from "@/services/CategoryService";
import Link from "next/link";
import Error from "./Error";

const HeaderBottom = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const { data: menus, isError } = useQuery<Category[]>({
    queryKey: ["menus"],
    queryFn: getCategoryInMenu,
  });

  if (isError) {
    return <Error />;
  }

  const MenuItem = ({ name, slug }: { name: string; slug: string }) => (
    <Link href={`/danh-muc/${slug}`}>
      <p className="text-gray-600 hover:text-[#3B9DF8]">{name}</p>
    </Link>
  );

  return (
    <div className="w-full shadow-xl py-5">
      <nav className="flex items-center justify-center w-full max-w-[1280px] mx-auto relative">
        <ul className="items-center gap-[20px] text-[1rem] text-[#424242] lg:flex hidden">
          {menus?.map((menu) => (
            <li
              key={menu.id}
              className={`${
                hoveredItem === menu.id ? "text-red-500" : "text-gray-600"
              } flex items-center gap-[5px] cursor-pointer text-md font-semibold`}
              onMouseEnter={() => setHoveredItem(menu.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {menu.name}
              {menu.children.length > 0 && hoveredItem === menu.id && (
                <div className="bg-white border rounded-md w-full absolute top-[100%] left-0 p-[30px] transition-all duration-300 boxShadow flex flex-wrap gap-[30px] z-10">
                  <div className="grid grid-cols-2 gap-[30px]">
                    {menu.children.map((child) => (
                      <div key={child.id} className="flex flex-col gap-[20px]">
                        <h3 className="text-[1.2rem] text-gray-500 font-[500]">
                          {child.name}
                        </h3>
                        {child.children.map((subChild) => (
                          <MenuItem
                            key={subChild.id}
                            name={subChild.name}
                            slug={subChild.slug}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}

          <li className="text-gray-600 flex items-center gap-[5px] cursor-pointer">
            <Link href="/lien-he" className="text-md font-semibold">
              <p>Liên hệ</p>
            </Link>
          </li>

          <li className="text-gray-600 flex items-center gap-[5px] cursor-pointer">
            <Link href="/tin-tuc" className="text-md font-semibold">
              <p>Tin tức</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderBottom;
