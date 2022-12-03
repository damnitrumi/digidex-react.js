import { useEffect, useRef, useState } from "react";
import * as Styled from "./styles";
import { Card } from "../../Components/Card";
import { SearchComponent } from "../../Components/SearchComponent";
import { Name } from "../../Components/Name";
import { ImageComponent } from "../../Components/ImageComponent";
import { Loading } from "../Loading";
import { PageNotFound } from "../PageNotFound";

export const Home = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const isMounted = useRef(true);

  const handleIChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const digi = await fetch("https://digimon-api.vercel.app/api/digimon");
        const json = await digi.json();

        setData(json);
      } catch (e) {
        setData(undefined);
      }
    };

    if (isMounted.current === true) {
      loadPosts();
    }

    return () => {
      isMounted.current = false;
    };
  }, []);

  const cards = searchValue
    ? data.filter((el) => {
        return el.name.toLowerCase().includes(searchValue.toLowerCase());
      })
    : data;

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && data.length == 0) {
    return <Loading />;
  }

  return (
    <Styled.Wrapper>
      <ImageComponent
        img="https://upload.wikimedia.org/wikipedia/commons/5/5f/Digimon_Logo.svg"
        altText="Digimon Logo"
      />
      <SearchComponent onChange={handleIChange} />
      {searchValue && <Name name={`Pesquisando por: ${searchValue}`} />}
      {cards.length == 0 && (
        <Name name="Não há nenhum Digimon com o nome solicitado em nosso banco de dados" />
      )}
      <Styled.Container>
        {cards.map((digiData) => {
          return <Card key={digiData.name} {...digiData} />;
        })}
      </Styled.Container>
    </Styled.Wrapper>
  );
};
