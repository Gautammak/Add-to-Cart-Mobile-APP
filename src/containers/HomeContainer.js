import {connect}  from 'react-redux'

import Home from "../components/Home";

import { addToCard,removeToCard } from '../services/Actions/actions';


const mapStateToProps = state =>({
   data:state.cardItems
})

const mapDispatchToProps = dispatch =>({
    addToCardHandler:data=>dispatch(addToCard(data)),
    removeToCardHandler:data=>dispatch(removeToCard(data))

})



export default connect(mapStateToProps,mapDispatchToProps)(Home)








//export default Home;