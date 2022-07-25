import { ChangeEvent, FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import { textReposState } from "../../store/textReposState";
import { MainButton } from "../atoms/MainButton";
import { Input } from "../atoms/Input";

export const Home: FC = memo(() => {
  const navigate = useNavigate();
  const onClickResult = useCallback(() => {
    navigate("/result");
  }, [navigate]);

  const [reposName, setReposName] = useRecoilState(textReposState);

  const onChangeReposName = (event: ChangeEvent<HTMLInputElement>) => {
    setReposName(event.target.value);
  };

  return (
    <>
      <h3>Recoil Result is</h3>
      <Input
        value={reposName}
        onChange={onChangeReposName}
        placeholder="リポジトリ対象ユーザ入力"
      />
      <br />
      <MainButton onClick={onClickResult}>RESULT PAGE</MainButton>
    </>
  );
});
