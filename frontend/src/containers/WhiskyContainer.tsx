import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { MapContainer } from "./MapContainer";
import { DistilleryList } from "../components/DistilleryList";
import { WhiskyList } from "../components/WhiskyList";
import { FavouritesList } from "../components/Favourites";
import { CupboardList } from "../components/CupboardList";
import { Whisky, Distillery, Person } from "../types/types";
import userService from "../services/userService"

interface Props {
    props?: any;
}

export const WhiskyContainer:React.FC<Props> = (props) => {

    const [distilleries, setDistilleries] = useState<Distillery[]>()
    const [whiskies, setWhiskies] = useState<Whisky[]>()
    const [persons, setPersons] = useState<Person[]>()

    useEffect(() => {
        
        userService.getDistilleries()
        .then(response => setDistilleries((response.data)))
        .catch(error => console.error)

        userService.getWhiskies()
        .then(response => setWhiskies((response.data)))
        .catch(error => console.error)

        userService.getPersons()
        .then(response => setPersons((response.data)))
        .catch(error => console.error)
    }, [])

    const filteredWhiskies = (criteria: string): any => {
        // if (whiskies?.length !== 0) {
        //     const filteredWhiskies: Whisky[] = whiskies.filter((whisky) => !whisky[criteria])
        //     return filteredWhiskies
        // } else {
        //     return null
        // }
    }

    return (
        <>
            <Header />
            <MapContainer />
            <div className="bottom-bit">
                <DistilleryList distilleries = {distilleries} />
                <WhiskyList whiskies = {whiskies} />
                <FavouritesList favourites = {filteredWhiskies("starred")} />
                <CupboardList cupboard = {filteredWhiskies("inCupboard")} />
            </div>
        </>
    )

}