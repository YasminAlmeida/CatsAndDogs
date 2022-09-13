import * as S from './style.js';
import Image from '../../Img/CatsAndDogs.jpg';
const Home = () => {
  return (
    <S.ContainerHome>
      <S.Image src={Image} alt="Cat and Dog" />
      <S.Text>cute pictures of animals to make you feel good</S.Text>
    </S.ContainerHome>
  );
};

export default Home;
