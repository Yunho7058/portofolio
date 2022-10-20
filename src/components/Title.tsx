import styled from 'styled-components';
import { BackCenter } from '../components/Global/style/GlobalStyle';
import { changeColor, flicker } from './Global/style/animation';

const Back = styled(BackCenter)`
  background-color: #151316;
`;

const TitleContent = styled.div`
  color: rgba(255, 255, 255, 0.6);
  animation: ${flicker} 4s linear both;
  font-size: 50px;
  font-family: 'Gamja Flower', cursive;
  //font-family: 'Nanum Pen Script', cursive;
`;

const Title = () => {
  return (
    <Back>
      <TitleContent>
        안녕하세요! <br /> Front-End 개발자 문윤호입니다.
      </TitleContent>
    </Back>
  );
};

export default Title;
