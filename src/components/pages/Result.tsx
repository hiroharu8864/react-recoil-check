import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { textReposState } from "../../store/textReposState";
import { MainButton } from "../atoms/MainButton";

export const Result: FC = memo(() => {
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const reposName = useRecoilValue(textReposState);
  console.log(reposName);

  return (
    <>
      <h3>Recoil Result is</h3>
      <p>Recoil Value is {reposName}</p>
      <MainButton onClick={onClickHome}>INPUT PAGE</MainButton>
    </>
  );
});
