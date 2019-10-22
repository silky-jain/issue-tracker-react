import React from 'react';
import IssueNameComponent from './IssueNameComponent';
import IssueForm from './IssueForm';
class IssueListComponent extends React.Component{
    constructor(props){
        super(props);
        this.changeStatus=this.changeStatus.bind(this);
        this.updateIssue=this.updateIssue.bind(this);
        this.addIssue=this.addIssue.bind(this);
        this.deleteIssue=this.deleteIssue.bind(this);
        this.editIssue=this.editIssue.bind(this);
        this.state={
            issues:[
            {name: "create ",completed:false},
            {name: "download ",completed:false},
            {name: "upload ",completed:false}],
            currentIssue:""
             
        }
    }

    editIssue(index){
      
       var issues= this.state.issues;
        var issue=  issues[index];
        issue.name=this.state.currentIssue;
        this.setState({
            issues:issues,
            currentIssue:''
        })
       

    }
    addIssue(event){
        event.preventDefault();
        let issues=this.state.issues;
        issues.push({
            name:this.state.currentIssue,
            completed:false

        })
        this.setState({
            issues,
            currentIssue:''
        })
     
    
    }
    deleteIssue(elementToBeDeleted){
        
        let issues=this.state.issues;
        issues.splice(elementToBeDeleted,1);
        this.setState({
            issues
        })
        console.log("delete");

    }
    updateIssue(newValue){
       
     this.setState({
         currentIssue:newValue.target.value
     })

    }

    changeStatus(index){
        let issues=this.state.issues;
        let issue=issues[index];
      
        issue.completed=!issue.completed;
        this.setState({
            issues:issues
        })

    }
render(){
   
    return (
        <div>
            <h1>Issue Tracker Application</h1>
            <hr/>
            <section>
                <IssueForm currentIssue={this.state.currentIssue} updateIssue={this.updateIssue} addIssue={this.addIssue} />
            </section>

    <ul>
    {
        this.state.issues.map((issue,index)=>{ 
            return ( <IssueNameComponent key={issue.name} issue={issue} clickHandler={this.changeStatus} updateIssue={this.updateIssue} index={index} deleteIssue={this.deleteIssue} editIssue={this.editIssue}/>

    );})
        }
    
    </ul>
    </div>);
}

}
export default IssueListComponent;