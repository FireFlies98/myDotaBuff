import  React from "react";
import './Logic.scss'
import { AllHeroes, Loader } from '../../components'


class Logic extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            heroesFromBack: [],
            name: '',
            isLoading: true,
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
        .catch((e) => console.error(e))
        .finally(() => {
            this.setState({ isLoading: false})
        })
    }

    

    

    render() {
        return (
            <>  
                {this.state.isLoading && <Loader />}
                <AllHeroes heroesContainer={this.state.heroesFromBack} />
            </>
        )
    }
}

export default Logic;