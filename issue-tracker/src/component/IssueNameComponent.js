import React from 'react';
class IssueNameComponent extends React.Component{
constructor(props){
  super(props);
  this.renderForm=this.renderForm.bind(this);
  this.renderIssue=this.renderIssue.bind(this);
  this.toggleStatus=this.toggleStatus.bind(this);
  this.state={
    isEditing:false
  }
}

toggleStatus(){
  const isEditing=this.state.isEditing;
  this.setState({
    isEditing:!isEditing
  })
}
renderForm(){
 return (<form>
  <input type="text" defaultValue={this.props.issue.name} onChange={this.props.updateIssue}/>
  <button onClick= {(event)=>{event.stopPropagation();this.props.editIssue(this.props.index)}} >Update</button>
  </form> );
}
renderIssue(){
return(<li className={this.props.issue.completed ? "completed":""} onClick={()=>{this.props.clickHandler(this.props.index)}}>
        
{this.props.issue.name}
<button onClick= {(event)=>{event.stopPropagation();this.props.deleteIssue(this.props.index)}}>X</button>
<button onClick= {(event)=>{event.stopPropagation();this.toggleStatus()}}>Edit Issue</button>
</li>);
}

render(){
  const {isEditing}=this.state; //const isEditing=this.state.isEditing
    return (<section>
      {
        isEditing?this.renderForm():this.renderIssue()
      

      }


      
      
     
</section> );
}

}
export default IssueNameComponent;