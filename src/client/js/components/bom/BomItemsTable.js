import React from 'react';
import {transition} from '../../css-transition'
import ReactTable from 'react-table';
class BomItemsTable extends React.Component{
  render(){
    let {animationClasses} = this.props;
    const data = [{
      name: 'Tanner Linsley',
      age: 26,
      friend: {
        name: 'Jason Maurer',
        age: 23,
      }
    }]

    const columns = [{
        id: 'name',
        header: 'Name',
        accessor: 'name' // String-based value accessors !
      }, {
        id: 'age',
        header: 'Age',
        accessor: 'age',
        render: props => <span className='number'>props.value</span> // Custom cell components!
      }, {
        id: 'friend_name',
        header: 'Friend Name',
        accessor: d => d.friend.name // Custom value accessors!
      }, {
        id: 'friend_age',
        header: props => <span>Friend Age</span>, // Custom header components!
        accessor: 'friend.age'
      }]
    return(
      <div className={"bomItemsView " + animationClasses}>
      <ReactTable
        data={data}
        columns={columns}
      />
      </div>)
  }
}
export default transition(BomItemsTable,{
  key: "bomItemsTable",
  willEnter: {
    classNames: "section animated fadeInRightBig",
    duration: 1000
  },
  willLeave: {
    classNames: "section animated fadeOutRightBig" ,
    duration: 1000
  },
})
