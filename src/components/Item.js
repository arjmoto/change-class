import React, { Component} from 'react';
// import classNames from 'classnames';
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick(){
    // console.log(this.props.item);
    // this.props.item.isClick = !this.props.item
    // item.isClick= !item.isClick
    // if(item.isClick){
    //   item.className = 'ImgChange'
    // }else{
    //   item.className = 'Img'
    // }
    // console.log(item.className);
    // this.props.onClickImg();
  }
  
    render(){
       let className = 'Img';
      
      const {item, index, onClick } = this.props;
      if(item.isClick) {
        className += ' ImgChange'
      }
        return(
                <td className="text-center">
                  <img className = {className} onClick={onClick} src={item.imgLink} alt={index} width={item.withImg}  />
                </td>
        ) 
    }
   
}

export default Item;