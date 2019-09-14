import * as types from './actionTypes';
import courseApi from '../Api/mockCourseApi';
export function createCourse(course) {
    return {
        type: types.CREATE_COURSE,
        course
    }
}
export function loadCourseSuccess(courses) {
    return{
        type: types.LOAD_COURSES_SUCCESS,
        courses
    }
}
export function loadCourse() {
    return function(dispatch){
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCourseSuccess(courses));
        }).catch(error => {
            throw(error);
        })
    }
}