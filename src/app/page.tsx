"use client";

import { useState } from "react";
import { menuItems } from "@/data/menuItems";

export default function Home() {
  const [selectedFish, setSelectedFish] = useState<string | null>(null);
  const [isChanging, setIsChanging] = useState(false);

  const selectedItem = menuItems.find(
    (item) => item.english === selectedFish
  );

  const handleSelectFish = (english: string) => {
    if (english === selectedFish) return;

    if (!selectedFish) {
      setSelectedFish(english);
      return;
    }

    setIsChanging(true);

    setTimeout(() => {
      setSelectedFish(english);
      setIsChanging(false);
    }, 220);
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#f3efe5] text-[#222]">

      {/* Decorative branch */}
      <img
        src="/images/branch.png"
        alt=""
        className="
          pointer-events-none
          fixed
          bottom-0
          left-0
          z-0
          w-[220px]
          opacity-55
          sm:w-[280px]
          md:w-[340px]
          lg:w-[420px]
        "
      />

      {/* LEFT FIXED COLUMN */}
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-[calc((100vw-420px)/2)] lg:flex lg:items-center lg:justify-center">
        <p
          className="text-sm tracking-[0.35em] text-[#8f887d]"
          style={{ writingMode: "vertical-rl" }}
        >
          旬を味わい、一期一会を楽しむ
        </p>
      </aside>

      {/* LEFT TEXT - MOBILE */}
      {!selectedFish && (
        <div
          className="
            pointer-events-none
            fixed
            left-4
            top-1/2
            z-10
            -translate-y-1/2
            lg:hidden
          "
        >
          <p
            className="text-[13px] tracking-[0.32em] text-[#8f887d] opacity-50"
            style={{ writingMode: "vertical-rl" }}
          >
            旬を味わい、一期一会を楽しむ
          </p>
        </div>
      )}

      {/* RIGHT OMAKASE */}
      <aside
        className={`
          fixed
          inset-y-0
          right-0
          z-10
          hidden
          w-[calc((100vw-420px)/2)]
          items-start
          justify-center
          pt-[20vh]
          transition-all
          duration-500
          ease-in-out
          lg:flex
          ${
            selectedFish
              ? "pointer-events-none translate-x-6 opacity-0"
              : "translate-x-0 opacity-100"
          }
        `}
      >
        <div className="text-center">
          <div
            className="text-5xl font-bold leading-[1.7] tracking-[0.12em]"
            style={{
              writingMode: "vertical-rl",
              fontFamily:
                '"Yu Mincho", "YuMincho", "Hiragino Mincho ProN", "Noto Serif JP", serif',
            }}
          >
            おまかせ
          </div>

          <div className="mt-7 text-[14px] tracking-[0.3em] text-[#8f887d]">
            OMAKASE
            <br />
            MENU
          </div>
        </div>
      </aside>

      {/* FISH DETAIL */}
      {selectedItem && (
        <aside
          className="
            pointer-events-none
            fixed
            inset-y-0
            right-0
            z-30
            hidden
            w-1/2
            lg:flex
            lg:items-center
            lg:justify-center
            animate-[fadeIn_0.4s_ease-out]
          "
        >
          <div
            className={`
              pointer-events-auto
              w-[78%]
              max-w-[560px]
              transition-all
              duration-300
              ease-in-out
              ${
                isChanging
                  ? "translate-y-2 opacity-0"
                  : "translate-y-0 opacity-100"
              }
            `}
          >

            {/* Close */}
            <button
              type="button"
              onClick={() => setSelectedFish(null)}
              className="
                mb-6
                cursor-pointer
                text-[30px]
                font-light
                text-[#8f887d]
                transition-opacity
                duration-300
                hover:opacity-50
              "
              aria-label="Close fish details"
            >
              ×
            </button>

            {/* Fish image */}
            {selectedItem.image ? (
              <div className="mb-7 overflow-hidden">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.english}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            ) : (
              <div className="mb-7 aspect-[4/3] w-full bg-[#ded8ce]" />
            )}

            {/* Chinese name */}
            <div className="text-[28px] tracking-[0.08em]">
              {selectedItem.chinese}
            </div>

            {/* English name */}
            <div className="mt-2 text-[14px] tracking-[0.16em] text-[#665f57]">
              {selectedItem.english}
            </div>

            {/* Fish information */}
            <div className="mt-6 border-t border-[#c9c1b6] pt-5">

              {selectedItem.description && (
                <p className="text-[14px] leading-7 text-[#6f685f]">
                  {selectedItem.description}
                </p>
              )}

              {selectedItem.season && (
                <div className="mt-5">
                  <div className="text-[11px] tracking-[0.18em] text-[#8f887d]">
                    SEASON
                  </div>
                  <div className="mt-1 text-[14px]">
                    {selectedItem.season}
                  </div>
                </div>
              )}

              {selectedItem.taste && (
                <div className="mt-4">
                  <div className="text-[11px] tracking-[0.18em] text-[#8f887d]">
                    TASTE
                  </div>
                  <div className="mt-1 text-[14px]">
                    {selectedItem.taste}
                  </div>
                </div>
              )}

            </div>

          </div>
        </aside>
      )}

      {/* MOBILE FISH DETAIL */}
      {selectedItem && (
        <div
          className="
            fixed
            inset-0
            z-50
            overflow-y-auto
            bg-[#f3efe5]
            px-5
            py-5
            lg:hidden
          "
        >
          {/* Close */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setSelectedFish(null)}
              className="
                cursor-pointer
                text-[32px]
                font-light
                text-[#8f887d]
              "
              aria-label="Close fish details"
            >
              ×
            </button>
          </div>

          <div className="mx-auto mt-2 max-w-[520px]">

            {/* Fish image */}
            {selectedItem.image ? (
              <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-white">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.english}
                  className="h-full w-full object-contain"
                />
              </div>
            ) : (
              <div className="aspect-[4/3] w-full bg-[#ded8ce]" />
            )}

            {/* Chinese name */}
            <div className="mt-7 text-[26px] tracking-[0.08em]">
              {selectedItem.chinese}
            </div>

            {/* English name */}
            <div className="mt-2 text-[13px] tracking-[0.16em] text-[#665f57]">
              {selectedItem.english}
            </div>

            {/* Fish info */}
            <div className="mt-6 border-t border-[#c9c1b6] pt-5">

              {selectedItem.description && (
                <p className="text-[14px] leading-7 text-[#6f685f]">
                  {selectedItem.description}
                </p>
              )}

              {selectedItem.season && (
                <div className="mt-5">
                  <div className="text-[11px] tracking-[0.18em] text-[#8f887d]">
                    SEASON
                  </div>
                  <div className="mt-1 text-[14px]">
                    {selectedItem.season}
                  </div>
                </div>
              )}

              {selectedItem.taste && (
                <div className="mt-4">
                  <div className="text-[11px] tracking-[0.18em] text-[#8f887d]">
                    TASTE
                  </div>
                  <div className="mt-1 text-[14px]">
                    {selectedItem.taste}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
      {/* CENTER MENU */}
      <section
        className={`
          relative
          z-20
          mx-auto
          w-full
          max-w-[420px]
          px-6
          py-12
          text-center

          transform-gpu
          transition-transform
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          sm:px-8
          lg:px-0

          ${
            selectedFish
              ? "lg:-translate-x-[200px]" 
              /*? "lg:translate-x-[calc(210px-36vw)]"*/
              : "lg:translate-x-0"
          }
        `}
      >

        {/* MOBILE TITLE */}
        <div className="mb-10 lg:hidden">

          <div className="text-3xl tracking-[0.18em]">
            おまかせ
          </div>

          <div className="mt-3 text-[12px] tracking-[0.3em] text-[#8f887d]">
            OMAKASE MENU
          </div>

        </div>

        {/* MENU ITEMS */}
        {menuItems.map((item, index) => {

          const showSectionLine =
            index === 7 ||
            index === 10 ||
            index === 13;

          const showDot =
            index < menuItems.length - 1 &&
            ![6, 9, 12].includes(index);

          const isSelected =
            selectedFish === item.english;

          return (
            <div key={item.english}>

              {/* SECTION DIVIDER */}
              {showSectionLine && (
                <div className="relative mx-auto my-5 flex w-64 items-center justify-center">

                  {/* Left line */}
                  <div
                    className="h-[2px] flex-1"
                    style={{
                      background:
                        "linear-gradient(to right, #ddd7ce 0%, #c8c0b5 55%, #8f887d 100%)",
                    }}
                  />

                  {/* Center dot */}
                  <div className="mx-[3px] h-[5px] w-[5px] rounded-full bg-[#8f887d]" />

                  {/* Right line */}
                  <div
                    className="h-[2px] flex-1"
                    style={{
                      background:
                        "linear-gradient(to left, #ddd7ce 0%, #c8c0b5 55%, #8f887d 100%)",
                    }}
                  />

                </div>
              )}

              {/* MENU ITEM */}
              <button
                type="button"
                onClick={() => handleSelectFish(item.english)}
                className={`
                  block
                  w-full
                  cursor-pointer
                  py-1.5
                  text-center
                  transition-all
                  duration-300
                  hover:opacity-60
                  ${
                    isSelected
                      ? "scale-[1.10] opacity-100"
                      : selectedFish
                        ? "opacity-45"
                        : "opacity-100"
                  }
                `}
              >

                <div
                  className={`
                    text-[18px]
                    tracking-[0.08em]
                    transition-all
                    duration-300
                    ${isSelected ? "font-semibold" : "font-normal"}
                  `}
                >
                  {item.chinese}
                </div>

                <div
                  className={`
                    mt-1
                    text-[12px]
                    tracking-[0.14em]
                    transition-all
                    duration-300
                    ${isSelected ? "font-semibold" : "font-normal"}
                  `}
                >
                  {item.english}
                </div>

              </button>

              {/* DOT BETWEEN ITEMS */}
              {showDot && (
                <div className="text-[24px] leading-[0.7] text-[#a59d92]">
                  •
                </div>
              )}

            </div>
          );
        })}

        {/* LOGO */}
        <img
          src="/images/logo.png"
          alt="Homakase"
          className="mx-auto mt-10 w-[90px] opacity-60 sm:w-[105px]"
        />

      </section>

    {/* QR CODE - DESKTOP ONLY */}
    {!selectedFish && (
      <div
        className="
          fixed
          bottom-6
          right-6
          z-40
          hidden
          text-center
          lg:block
        "
      >
        <div className="bg-white p-2 shadow-sm">
          <img
            src="/images/chengmakase-qr.png"
            alt="Scan to open Chengmakase menu"
            className="h-[90px] w-[90px]"
          />
        </div>

        <div className="mt-2 text-[9px] tracking-[0.18em] text-[#8f887d]">
          SCAN TO EXPLORE
        </div>
      </div>
    )}

    </main>
  );
}