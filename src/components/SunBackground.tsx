import cloud from "../assets/cloud1.svg";
export const SunBackground = () => {
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
        <img
          src={cloud}
          className="cloud "
          style={{
            width: "100px",
            height: "100px",
            top: "30px",
          }}
        />
      </div>
    </div>
  );
};
