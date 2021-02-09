import { Wrapper } from 'styles/style';
import { MovieData } from 'types/types';

// imdbID

interface DetailProps {
  item?: MovieData;
}

function Detail({ item }: DetailProps) {
  return <Wrapper>{item?.Title}</Wrapper>;
}

export default Detail;
