import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <form>
        Please Enter a GitHub Username:
        <input value={input} onChange={handleChange}></input>
        <input
          type="submit"
          value="Submit"
          onClick={() => navigate(`/github/${input}`)}
        />
        {/* <button>Enter</button> */}
      </form>
      <style>{`
        form {
          margin: auto;
        }
      `}</style>
    </div>
  );
};

export default Landing;
