import * as React from "react";
import { Map } from "../components/Map";
import { DistilleryList } from "../components/DistilleryList";
import { WhiskyList } from "../components/WhiskyList";
import { FavouritesList } from "../components/Favourites";
import { CupboardList } from "../components/CupboardList";
import { Whisky, Distillery, Person } from "../types/types"

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
                <h1>Hey from Container!</h1>
                <Map id="map-id"/>
                <DistilleryList distilleries = {this.state.distilleries} />
                <WhiskyList whiskies = {this.state.whiskies} />
                <FavouritesList favourites = {this.filteredWhiskies("starred")} />
                <CupboardList cupboard = {this.filteredWhiskies("inCupboard")} />
            </>
        )
    }

}