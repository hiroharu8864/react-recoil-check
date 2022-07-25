import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const Home: FC = memo(() => {
  const navigate = useNavigate();
  const onClickResult = useCallback(() => {
    navigate("/result");
  }, [navigate]);

  return (
    <>
      <h3>Recoil Result is</h3>
      <input placeholder="test"></input>
      <button onClick={onClickResult}>RESULT PAGE</button>
    </>
  );
});
