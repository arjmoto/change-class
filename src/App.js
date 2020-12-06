
import React, { Component} from 'react';
import Title from './components/Title';
import Item from './components/Item';
class App extends Component {
  constructor(){
    super()
    
    this.state  = {
    items: [
      {
        imgLink:"http://bit.ly/3ayPusa",
        altImg:"Image 1",
        withImg:"200",
        isClick: false,
        className: "Img"
      },
      {
        imgLink:"http://bit.ly/3ayPusa",
        altImg:"Image 2",
        withImg:"200",
        isClick: false,
        className: "Img"
      },
      {
        imgLink:"http://bit.ly/3ayPusa",
        altImg:"Image 3",
        withImg:"200",
        isClick: false,
        className: "Img"
      },
      {
        imgLink:"http://bit.ly/3ayPusa",
        altImg:"Image 4",
        withImg:"200",
        isClick: false,
        className: "Img"
      },
      {
        imgLink:"http://bit.ly/3ayPusa",
        altImg:"Image 1",
        withImg:"200",
        isClick: false,
        className: "Img"
      },
      {
        imgLink:"http://bit.ly/3ayPusa",
        altImg:"Image 1",
        withImg:"200",
        isClick: false,
      },
      {
        imgLink:"http://bit.ly/3ayPusa",
        altImg:"Image 1",
        withImg:"200",
        isClick: false,
        className: "Img"
      },
      {
        imgLink:"http://bit.ly/3ayPusa",
        altImg:"Image 1",
        withImg:"200",
        isClick: false,
        className: "Img"
      },
      {
        imgLink:"http://bit.ly/3ayPusa",
        altImg:"Image 1",
        withImg:"200",
        isClick: false,
        className: "Img"
      },
    ]
 
 }
}

  handleClicked(item){
    return(event)=>{
    console.log(item);
    const isClick = item.isClick;
    const {items} = this.state
    const index = items.indexOf(item)
    this.setState({
      items: [
        ...items.slice(0, index),
        {
          ...item,
          isClick: !isClick
        },
        ...items.slice(index + 1)
      ]
    })
  }
  }
  render(){

    let items = [];
    items = this.state.items
    const elmItem = items.map((item, index) =>{
      return (
        <Item 
        key = {index} 
        item = {item} 
        index = {index}
        onClick = {this.handleClicked(item)}
         />
      );
    })
    return(
      <div>
        <Title/>
        <div className="panel panel-success">
          <div className="panel-heading">List Item</div>
          <table className="table table-hover ">
            <thead>
              <tr>
                <th style={{width: '34%'}} className="text-center">Image column 1</th>
                <th style={{width: '34%'}} className="text-center">Image column 2</th>
                <th style={{width: '34%'}} className="text-center">Image column 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  {elmItem}
              </tr>
              <tr>
                  {elmItem}
              </tr>
              <tr>
                  {elmItem}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ) 
}
}

export default App;
