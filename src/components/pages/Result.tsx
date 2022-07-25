import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const Result: FC = memo(() => {
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <h3>Recoil Result is</h3>
      <p>Pass Value is</p>
      <button onClick={onClickHome}>INPUT PAGE</button>
    </>
  );
});
