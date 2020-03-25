import React from 'react';
import './FlipItem.css';

interface MyProps{

    src:string,
    desc:string,
}

class FlipItem extends React.Component<MyProps>{

    render(){

        return(

            <div className='flipItem'>
                <div className='imgContainer'>
                    <img className='imgJPG' src={this.props.src}></img>
                </div>
                <label>{this.props.desc}</label>
            </div>
        )
    }
}

export default FlipItem;