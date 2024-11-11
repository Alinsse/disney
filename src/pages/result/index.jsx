import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Bannerr from "../../componentes/Bannerr";
import { SectionHome, SectionResult } from "../../componentes/section";

export const Result = () => {
  const [params] = useSearchParams();
  const name = params.get("name");
  const [resultado, setResultado] = useState([]);
  const url = "https://api.disneyapi.dev";

  useEffect(() => {
    if (name) {
      axios.get(`${url}/character?name=${name}`).then((res) => {
        setResultado(res.data.data);
      });
    }
  }, [name]);

  return (
    <><Bannerr image="/images/teladois.png"/>
    <Bannerr image="images/retangulo.png"/>
     <SectionResult>
      
      <h1>Resultado</h1>
      {resultado.length > 0 ? (
        <div style={{ display: "flex" , justifyContent: "space-around" ,  width:"100%" , }}>
          {resultado.map((character) => (
            <div key={character._id} >
              
              <img src={character.imageUrl} alt={character.name} style={{ width: "190px" , height: "190px" , border:"2px" , borderRadius: "50%"}} />
              <p style={{ width: "63px" , height: "19px" , weight: "700" , size: "16px" , font: "inter" , justifySelf: "center" , color: " #FFFFFF" , lineHeight: "19.36px" , fontFamily: "inter"}}>{character.name} </p>
            </div>
          ))}
        </div>
      ) : (
        <p>Nenhum resultado encontrado.</p>
      )}
    </SectionResult>
    </>
    
   
  );
};