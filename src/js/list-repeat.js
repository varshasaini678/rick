import React from 'react';
import DisplayCards from './display-card.js'
import Filters from './filters.js'

class DisplayList extends React.Component{
  constructor(){
    super();
    this.state={items:[],orderme:'asc'};
      this.state.filterMap = {};
    this.applyFilter.bind(this);
  }

  componentWillMount(){
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then((resp) => {
        this.setState({items:resp.results})
      })
  }

  filter(e){
    this.setState({searchStr:e.target.value})
  }
  sort(e){
    this.setState({orderme:e.target.value})
    if(e.target.value == 'dsc'){
      this.sortDescending();
    }else{
      this.sortAscending();
    }
  }

  sortAscending = () => {
    let sortedAsc;
          sortedAsc= this.state.items.sort((a,b)=>{
             return parseInt(a.id)  - parseInt(b.id);
          })

          this.setState({
              items:sortedAsc
          })

 }

 sortDescending = () => {
   let sortedDsc;
   sortedDsc= this.state.items.sort((a, b) => a.id - b.id).reverse()
   this.setState({
       items:sortedDsc
   })
 }

 applyFilter = (type,name)=>{
   console.log(type,name);
   const filtermap = this.state.filterMap;
   //if(filtermap.type){
     filtermap[type] = name;
   //}
   this.setState({
     filterMap:filtermap
   })
 }

  render(){
    const filterConf = [{
      type:'species',
      arr:['Human', 'Alien','Other']
    },
    {
      type:'gender',
      arr:['Male', 'Female','Other']
    }]
    let items = this.state.items;
    debugger;
    if(this.state.filterMap){
      for(let x in this.state.filterMap){
        items = items.filter((item)=>item[x]==this.state.filterMap[x])

      }
      console.log(items);
    }
    return (
      <div>
      <Filters/>

      {filterConf.map(filterobj => (<div>
        {filterobj.type}
        {filterobj.arr.map(name => (
          <div>
          <input type="checkbox" className="validate" value={name}
                onChange={() => this.applyFilter(filterobj.type,name)}     />
          <label>{name}</label>
          </div>
        ))}

      </div>))}
      <div>
        <label>Sort by ID</label>
          <select onChange={this.sort.bind(this)} value ={this.state.orderBy}>
            <option value="asc">Ascending</option>
            <option value="dsc">Descending</option>
          </select>
      </div>
      <div className="character-list">
      {items.map(item => <DisplayCards item={item}/>)}



    </div>
    </div>
  )
  }

}




export default DisplayList;
