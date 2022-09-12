import { getCastDetails } from 'services/MovieApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastItem } from 'components/CastItem/CastItem';
import { CastList } from 'components/CastList/CastList';
export default function Cast() {
  const { movieId } = useParams();
  const [castData, setCastData] = useState([]);
  const [dataId, setDataId] = useState(undefined);

  useEffect(() => {
    if (movieId === null) {
      return;
    }
    async function getCredits() {
      try {
        const { data } = await getCastDetails(movieId);

        setDataId(data.id);
        setCastData(data.cast);
      } catch (error) {
        console.log(error);
      }
    }
    getCredits();
  }, [movieId]);
  return (
    <>
      {dataId !== undefined && (
        <CastList>
          {castData
            .slice(0, 14)
            .map(({ id, name, character, profile_path }) => {
              return (
                <CastItem
                  key={id}
                  actorName={name}
                  character={character}
                  actorPhoto={profile_path}
                />
              );
            })}
        </CastList>
      )}
    </>
  );
}
