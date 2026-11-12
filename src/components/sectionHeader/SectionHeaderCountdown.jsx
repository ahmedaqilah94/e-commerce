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

function SectionHeaderCountdown({ endDate = "2026-12-31T23:59:59" }) {
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
    <div className="flex items-center gap-2 md:gap-4 sm:gap-6 ">
      {units.map((unit, index) => (
        <div key={unit} className="flex items-center gap-2 md:gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium sm:text-base">{t(unit)}</span>

            <span className="text-3xl leading-none font-bold sm:text-4xl">
              {timeLeft[unit]}
            </span>
          </div>

          {index < units.length - 1 && (
            <span className="mt-5 text-2xl font-bold text-primary">:</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default SectionHeaderCountdown;
