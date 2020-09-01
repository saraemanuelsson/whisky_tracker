import * as React from "react";
import { Map } from "../components/Map";
import { DistilleryList } from "../components/DistilleryList";
import { WhiskyList } from "../components/WhiskyList";
import { FavouritesList } from "../components/Favourites";
import { CupboardList } from "../components/CupboardList";
import { DistilleryInfo } from "../components/DistilleryInfo";
import { Whisky, Distillery, Person } from "../types/types";
const Logo = require("../assets/logo.png");

interface Props {
    props?: any;
}

interface State {
    distilleries: Distillery[];
    whiskies: Whisky[];
    persons: Person[];
}

export class WhiskyContainer extends React.Component<Props, State> {

    state: State = {
        distilleries: [],
        whiskies: [],
        persons: []
    }

    componentDidMount() {
        const baseURL = "http://localhost:8080/"

        for (const key in this.state) {            
            fetch(baseURL + key.toString())
            .then(res => res.json())
            .then(result => this.setState<never>({[key]: result}))
            .catch(error => console.error)
        }
    }

    filteredWhiskies(criteria: string): Whisky[] {
        return this.state.whiskies.filter((whisky) => !whisky[criteria])
    }

    render() {
        return (
            <>
                <div className="top-section">
                    <img src={Logo} alt="Logo" className="logo"/>
                    <Map className="map"/>
                    <DistilleryInfo className="distillery-info"/>
                </div>
                <div className="bottom-bit">
                    <DistilleryList distilleries = {this.state.distilleries} />
                    <WhiskyList whiskies = {this.state.whiskies} />
                    <FavouritesList favourites = {this.filteredWhiskies("starred")} />
                    <CupboardList cupboard = {this.filteredWhiskies("inCupboard")} />
                </div>
            </>
        )
    }

}