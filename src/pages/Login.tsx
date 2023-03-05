import { iPageProps } from "../@types/myTypes";
import LoginWrapper from "../components/Wrappers/LoginWrapper";
import MainWrapper from "../components/Wrappers/MainWrapper";

function Login(props: iPageProps) {
  const background = require("../images/background.jpg")
  const { isMobileDevice } = props;
  return (
    <MainWrapper background={background} isInfinite={false}>
      <LoginWrapper type="auth" isMobileDevice={isMobileDevice}></LoginWrapper>
    </MainWrapper>
  );
}

export default Login;
