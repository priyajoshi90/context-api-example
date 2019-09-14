import React,{Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import * as courseAction from '../../actions/courseAction';
import { bindActionCreators } from 'redux';

class CoursesPage extends Component{
    constructor(props){
        super(props);
        // this.state={
        //     course:{title:""}
        // };

        // this.onTitleChange=this.onTitleChange.bind(this);
        // this.onClickSave=this.onClickSave.bind(this);
    }

    // onTitleChange(event){
    //     const course = this.state.course;
    //     course.title = event.target.value;
    //     this.setState({course:course});
    // }

    // onClickSave(){
    //      let msg="saving Data";
    //      alert(msg += ' '+`${this.state.course.title}`);
    //      this.props.actions.createCourse(this.state.course);
    // }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>
    }

    render(){
        return(
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Courses</h2>

                {/* <input type="text" onChange={this.onTitleChange}
                defaultValue={this.state.title} />

                <input type="submit" value="Save" onClick={this.onClickSave}/> */}
            </div>
        );
    }
}

CoursesPage.propTypes = {
    actions: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired
}

function mapStateToProps(state) {
    return {
        courses: state.courses
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);