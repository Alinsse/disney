import { useState } from "react"
import Bannerr from "../../componentes/Bannerr"
import Fprlogo from "../../componentes/Fprlogo"
import { Input } from "../../componentes/input"
import { SectionHome } from "../../componentes/section"
import { useNavigate } from "react-router-dom"
import { MdSearch } from "react-icons/md"

export const Home = () => {
    const navigate = useNavigate()
    const [name,setName] =  useState("")
    return(
    <>
        <Bannerr image="/images/bannerr.png"/>
        <SectionHome>
        <Fprlogo/>
        <MdSearch />
        <Input type="text" value={name} onChange={(e) => setName(e.target.value)}  />

        <button style={{position: "absolute"}} onClick={() => navigate(`/result?name=${name}`)}>Enviar</button>
        
    </SectionHome>
    </>
    )
}