"use client";

import React, { useEffect, useState } from "react";

type Timer = {
  endDateTime: string;
};

const Timer = ({ endDateTime }: Timer) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference =
        new Date(Date.parse(endDateTime)).getTime() - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [endDateTime]);

  const formatNumber = (number: number) => number.toString().padStart(2, "0");

  return (
    <div className="w-full bg-red-50 flex items-center justify-center py-5 md:py-8 rounded-md">
      <div className="grid grid-cols-4 gap-[15px] mt-2">
        <div className="py-3 pt-2.5 rounded-md rounded-b-xl px-[15px] sm:px-[23px] shadow-xl bg-red-500 relative flex items-center justify-center flex-col">
          <h5 className="text-white text-[1.3rem] sm:text-[1.9rem] pb-4 font-semibold">
            {formatNumber(timeLeft.days)}
          </h5>
          <span className="absolute bottom-0 z-20 text-[0.8rem] bg-white w-full text-center py-0.5 rounded-b-md">
            Ngày
          </span>
        </div>
        <div className="py-3 pt-2.5 rounded-md rounded-b-xl px-[15px] sm:px-[23px] shadow-xl bg-red-500 relative  flex items-center justify-center flex-col">
          <h5 className="text-white text-[1.3rem] sm:text-[1.9rem] pb-4 font-semibold">
            {formatNumber(timeLeft.hours)}
          </h5>
          <span className="absolute bottom-0 z-20 text-[0.8rem] bg-white w-full text-center py-0.5 rounded-b-md">
            Giờ
          </span>
        </div>
        <div className="py-3 pt-2.5 rounded-md rounded-b-xl px-[15px] sm:px-[23px] shadow-xl bg-red-500 relative flex items-center justify-center flex-col">
          <h5 className="text-white text-[1.3rem] sm:text-[1.9rem] pb-4 font-semibold">
            {formatNumber(timeLeft.minutes)}
          </h5>
          <span className="absolute bottom-0 z-20 text-[0.8rem] bg-white w-full text-center py-0.5 rounded-b-md">
            Phút
          </span>
        </div>
        <div className="py-3 pt-2.5 rounded-md rounded-b-xl px-[15px] sm:px-[23px] shadow-xl bg-red-500 relative flex items-center justify-center flex-col">
          <h5 className="text-white text-[1.3rem] sm:text-[1.9rem] pb-4 font-semibold">
            {formatNumber(timeLeft.seconds)}
          </h5>
          <span className="absolute bottom-0 z-20 text-[0.8rem] bg-white w-full text-center py-0.5 rounded-b-md">
            Giây
          </span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
