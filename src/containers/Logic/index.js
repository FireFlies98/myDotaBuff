import  React from "react";
import './Logic.css'
import { AllHeroes } from '../../components'

class Logic extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            heroesFromBack: [],
            name: '',
        }
    }

    componentDidMount = () => {
        fetch('https://api.opendota.com/api/heroStats')
        .then(res => res.json())
        .then(result => {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    heroesFromBack: result,
                }
            })
        })
    }

    render() {
        return (
            <>
                <AllHeroes heroesContainer={this.state.heroesFromBack} />
            </>
        )
    }
}

export default Logic;