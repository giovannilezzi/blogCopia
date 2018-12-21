import connect from "react-redux/es/connect/connect";
import AllPost from "../Component/AllPost";




const mapStateToProps = (state) => {
    return {
        posts: state
    }
}


const AllPostContainer = connect (
    mapStateToProps,
    null
)(AllPost)

export default AllPostContainer;