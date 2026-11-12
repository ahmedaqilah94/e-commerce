import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function getTimeLeft(endDate) {
  const difference = new Date(endDate).getTime() - Date.now();

  if (difference <= 0) {
    return {
      Days: "00",
      Hours: "00",
      Minutes: "00",
      Seconds: "00",
    };
  }

  return {
    Days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
      2,
      "0",
    ),
    Hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(
      2,
      "0",
    ),
    Minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(
      2,
      "0",
    ),
    Seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
  };
}

function SpeakerViewCountdown({ endDate = "2026-12-31T23:59:59" }) {
  const { t } = useTranslation();

  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(endDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(endDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  const units = ["Days", "Hours", "Minutes", "Seconds"];

  return (
    <div className="flex items-center gap-2 md:gap-[24px] ">
      {units.map((unit) => (
        <div key={unit} className="flex items-center ">
          <div className="flex flex-col items-center justify-center bg-[#FFFFFF] text-[#000000] size-[50px] md:size-[62px] rounded-[50%]">
            <span className=" leading-none font-semibold ">
              {timeLeft[unit]}
            </span>
            <span className=" leading-none text-[11px]">{t(unit)}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SpeakerViewCountdown;
