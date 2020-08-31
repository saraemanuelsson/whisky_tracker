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
        
        // fetch(baseURL + "distilleries")
        //     .then(res => res.json())
        //     .then(result => this.setState({ distilleries: result }))
        //     .catch(err => console.error)
        for (const key in this.state) {            
            fetch(baseURL + key.toString())
            .then(res => res.json())
            .then(result => this.setState<never>({[key]: result}))
        }
    }

    render() {
        return (
            <>
                <h1>Hey from Container!</h1>
                <Map id="map-id"/>
                <DistilleryList />
                <WhiskyList />
                <FavouritesList />
                <CupboardList />
            </>
        )
    }

}