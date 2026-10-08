import FirstCloud from "../assets/cloud1.svg";
import SecondCloud from "../assets/cloud2.svg";
import SmileCloud from "../assets/cloud3.svg";

const clouds = [FirstCloud, SecondCloud, SmileCloud];
export const SunBackground = () => {
  async function createCloud() {
    const secondes = 10 + Math.random() * 10;
    const cloud = Math.floor(Math.random * 3);
    setTimeout(() => {}, secondes * 1000);
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div
        className="sun"
        style={{
          width: "30px",
          height: "30px",
        }}
      ></div>
      <div>
        <div className="cloud animate-cloud">
          <img
            src={FirstCloud}
            alt=""
            style={{
              width: "100px",
              height: "100px",
            }}
          />
        </div>
      </div>
    </div>
  );
};
