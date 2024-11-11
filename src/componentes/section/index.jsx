import { BannerResult } from "../../pages/result/styled"
import { BannerHome } from "./styled"

export const SectionHome = ({children}) => {
    return(
        <BannerHome> {children} </BannerHome>

    )
}

export const SectionResult = ({children}) => {
    return(
       <BannerResult> {children} </BannerResult>
    
    )
}