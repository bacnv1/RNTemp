import {connect} from "react-redux";
import DemoScreen from '../components/screen/DemoScreen';
import {EPIC} from "../const/Const";

const mapStateToProps = (state: any) => ({
    data: state.demo.data
});

const checkLogic = (text: string) =>{
    return !!text
}
/*
* define logic for component
* */
const mapDispatchToProps = (dispatch: any) => ({
    // observable logic
    getUser: () => dispatch({type: EPIC.GET_USER.value}),
    // component logic
    checkLogic: (text: string) => checkLogic(text)
})


export default connect(mapStateToProps, mapDispatchToProps)(DemoScreen);