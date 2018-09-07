import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getCountries,getMortality} from '../actions/index'
    
    class SearchBar extends Component {

        constructor(props){
            super(props)
            this.state = {selectedCountry:this.props.defaultCountry}
        }

        //Recup list country
        componentWillMount () {
            this.props.getCountries()
        }

        //Création liste select countries
        renderSelectBox(){
            const {countries} = this.props
            if (countries) {
                return (
                    <select className="col-md-4 input-group" value={this.state.selectedCountry} onChange={(e) => this.search(e)}>
                        {
                            countries.map((country) => {
                                return <option key={country} value={country}>{country}</option>
                            })
                        }
                    </select>
                )
            }else{
                return <div>No coutry found</div>
            }
        }

        //Clic sur new pays = Changement du state selectedCountry
        search(e){
            this.setState({selectedCountry:e.target.value},() => {
                this.props.getMortality(this.state.selectedCountry)
            })
        }

        render () {
            return (
                <div className="search_bar">
                    {this.renderSelectBox()}
                </div>
            )
        }
    }

    const mapStateToProps = (state) => {
        return {
            countries : state.countries
        }
    }

    function mapDispatchToProps (dispatch) {
        return bindActionCreators ({getCountries,getMortality}, dispatch)
    }
    
export default connect(mapStateToProps, mapDispatchToProps) (SearchBar)