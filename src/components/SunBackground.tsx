import { useEffect, useState } from "react";
import FirstCloud from "../assets/cloud1.svg";
import SecondCloud from "../assets/cloud2.svg";
import SmileCloud from "../assets/cloud3.svg";

const cloudsList = [FirstCloud, SecondCloud, SmileCloud];

type Cloud = {
  id: number;
  src: string;
  top: number;
};

export const SunBackground = () => {
  const [clouds, setClouds] = useState<Cloud[]>([]);

  useEffect(() => {
    const createCloud = () => {
      const cloud = cloudsList[Math.floor(Math.random() * cloudsList.length)];
      const top = Math.random() * 300;
      const id = Date.now() + Math.random();

      setClouds((prev) => [...prev, { id, src: cloud, top }]);

      setTimeout(() => {
        setClouds((prev) => prev.filter((item) => item.id !== id));
      }, 80000);
    };

    const interval = setInterval(createCloud, 10000);
    createCloud();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div
        className="sun"
        style={{
          width: "30px",
          height: "30px",
        }}
      ></div>

      {clouds.map(({ id, src, top }) => (
        <div
          key={id}
          className="cloud animate-cloud"
          style={{ width: "100px", height: "100px", top: `${top}px` }}
        >
          <img src={src} />
        </div>
      ))}
    </div>
  );
};
