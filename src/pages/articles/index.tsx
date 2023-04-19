import { Modal } from "@/components/Modal";
import { calcReadingTimeInMinutes } from "@/utils";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import React from "react";

const Articles = () => {
  const { t } = useTranslation("articles");
  return (
    <>
      <div className="container mx-auto p-5 flex justify-between flex-wrap">
        <div className="max-w-sm overflow-hidden shadow-lg rounded-md bg-zinc-900 m-2">
          <Image
            className="w-full"
            src="https://v1.tailwindcss.com/img/card-top.jpg"
            alt="Sunset in the mountains"
            width={40}
            height={40}
          />
          <div className="px-6 py-4">
            <div className="font-semibold text-xl mb-2">Title</div>
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              pariatur adipisci, explicabo natus aliquid reiciendis molestias
              eius quia itaque corrupti nesciunt aperiam, architecto sequi quos
              perferendis ipsum ea qui possimus?
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 text-right">
            <span className="inline-block px-3 py-1 text-sm font-semibold  mr-2 mb-2">
              {calcReadingTimeInMinutes(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?`)}{" "}
              min read
            </span>
          </div>
        </div>
        <div className="max-w-sm overflow-hidden shadow-lg rounded-md bg-zinc-900 m-2">
          <Image
            className="w-full"
            src="https://v1.tailwindcss.com/img/card-top.jpg"
            alt="Sunset in the mountains"
            width={40}
            height={40}
          />
          <div className="px-6 py-4">
            <div className="font-semibold text-xl mb-2">Title</div>
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              pariatur adipisci, explicabo natus aliquid reiciendis molestias
              eius quia itaque corrupti nesciunt aperiam, architecto sequi quos
              perferendis ipsum ea qui possimus?
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 text-right">
            <span className="inline-block px-3 py-1 text-sm font-semibold  mr-2 mb-2">
              {calcReadingTimeInMinutes(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?
            `)}{" "}
              min read
            </span>
          </div>
        </div>
        <div className="max-w-sm overflow-hidden shadow-lg rounded-md bg-zinc-900 m-2">
          <Image
            className="w-full"
            src="https://v1.tailwindcss.com/img/card-top.jpg"
            alt="Sunset in the mountains"
            width={40}
            height={40}
          />
          <div className="px-6 py-4">
            <div className="font-semibold text-xl mb-2">Title</div>
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              pariatur adipisci, explicabo natus aliquid reiciendis molestias
              eius quia itaque corrupti nesciunt aperiam, architecto sequi quos
              perferendis ipsum ea qui possimus?
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 text-right">
            <span className="inline-block px-3 py-1 text-sm font-semibold  mr-2 mb-2">
              {calcReadingTimeInMinutes(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?           Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?

            explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus? explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus? explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus? explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?
            `)}{" "}
              min read
            </span>
          </div>
        </div>
        <div className="max-w-sm overflow-hidden shadow-lg rounded-md bg-zinc-900 m-2">
          <Image
            className="w-full"
            src="https://v1.tailwindcss.com/img/card-top.jpg"
            alt="Sunset in the mountains"
            width={40}
            height={40}
          />
          <div className="px-6 py-4">
            <div className="font-semibold text-xl mb-2">Title</div>
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              pariatur adipisci, explicabo natus aliquid reiciendis molestias
              eius quia itaque corrupti nesciunt aperiam, architecto sequi quos
              perferendis ipsum ea qui possimus?
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 text-right">
            <span className="inline-block px-3 py-1 text-sm font-semibold  mr-2 mb-2">
              {calcReadingTimeInMinutes(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?
            `)}{" "}
              min read
            </span>
          </div>
        </div>
        <div className="max-w-sm overflow-hidden shadow-lg rounded-md bg-zinc-900 m-2">
          <Image
            className="w-full"
            src="https://v1.tailwindcss.com/img/card-top.jpg"
            alt="Sunset in the mountains"
            width={40}
            height={40}
          />
          <div className="px-6 py-4">
            <div className="font-semibold text-xl mb-2">Title</div>
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              pariatur adipisci, explicabo natus aliquid reiciendis molestias
              eius quia itaque corrupti nesciunt aperiam, architecto sequi quos
              perferendis ipsum ea qui possimus?
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 text-right">
            <span className="inline-block px-3 py-1 text-sm font-semibold  mr-2 mb-2">
              {calcReadingTimeInMinutes(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?`)}{" "}
              min read
            </span>
          </div>
        </div>
        <div className="max-w-sm overflow-hidden shadow-lg rounded-md bg-zinc-900 m-2">
          <Image
            className="w-full"
            src="https://v1.tailwindcss.com/img/card-top.jpg"
            alt="Sunset in the mountains"
            width={40}
            height={40}
          />
          <div className="px-6 py-4">
            <div className="font-semibold text-xl mb-2">Title</div>
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              pariatur adipisci, explicabo natus aliquid reiciendis molestias
              eius quia itaque corrupti nesciunt aperiam, architecto sequi quos
              perferendis ipsum ea qui possimus?
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 text-right">
            <span className="inline-block px-3 py-1 text-sm font-semibold  mr-2 mb-2">
              {calcReadingTimeInMinutes(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?           Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?

            explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus? explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus? explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus? explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?
            perferendis ipsum ea qui possimus?          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus? explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus? explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?
            perferendis ipsum ea qui possimus?          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus? explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus? explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            pariatur adipisci, explicabo natus aliquid reiciendis molestias eius
            quia itaque corrupti nesciunt aperiam, architecto sequi quos
            perferendis ipsum ea qui possimus?
            `)}{" "}
              min read
            </span>
          </div>
        </div>
      </div>
      <Modal title={t("modal.title")} legend={t("modal.legend")} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "footer",
        "navbar",
        "articles",
      ])),
    },
  };
};

export default Articles;
