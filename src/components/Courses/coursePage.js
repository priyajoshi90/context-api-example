import React,{Component} from 'react';
 

class CoursesPage extends Component{
    constructor(props){
        super(props);
        this.state={
            course:{title:""}
        };

        this.onTitleChange=this.onTitleChange.bind(this);
        this.onClickSave=this.onClickSave.bind(this);
    }

    onTitleChange(event){
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course:course});
    }

    onClickSave(){
         let msg="saving Data";
         alert(msg += ' '+`${this.state.course.title}`);
      
         
    }

  
 

    render(){
        return(
            <div>
                <h1>Courses</h1>
               
                <h2>Add Courses</h2>

                <input type="text" onChange={this.onTitleChange}
                defaultValue={this.state.title} />

                <input type="submit" value="Save" onClick={this.onClickSave}/>
            </div>
        );
    }
}
 

 

export default CoursesPage;