import React, { RefObject } from 'react';
import FlipItem from './FlipItem';
import './FlipAlbum.css';

class FlipAlbum extends React.Component{

    constructor(props:any){

        super(props);

        this.refDivAlbum = React.createRef();
    }

    arrImages:Array<any> = [
                                {src:'assets/1.jpg', desc:'图片1'},
                                {src:'assets/2.jpg', desc:'图片2'},
                                {src:'assets/3.jpg', desc:'图片33333'},
                                {src:'assets/4.jpg', desc:'图片4'},
                                {src:'assets/5.jpg', desc:'图片5'},
                                {src:'assets/6.jpg', desc:'图片6'},
                           ];


    /**
     * 相册容器的引用
     */
    refDivAlbum:RefObject<HTMLDivElement>;


    /**
     * 将要滚动到的位置
     */
    private scrollToX:number = 0;

    /**
     * 每次滚动执行累加的值;
     * 根据方向不同, 它的"正" "负"值是不同的.
     */
    private scrollStep:number = 0;

    /**
     * 为了方便左右方向时设置step的步长
     */
    static SCROLL_STEP:number = 5;
    /**
     * 翻动相册
     * @param type 类型;0 = 左, 1= 右.
     */
    private goFlipAlbum(type:number):void{
        
        if(this.refDivAlbum.current){
            console.log(this.scrollToX, this.refDivAlbum.current.clientWidth);
            //div的显示宽度
            let cWidth:number = this.refDivAlbum.current.clientWidth;

            if(type === 0){

                this.scrollToX = this.scrollToX - cWidth;
                this.scrollStep = -FlipAlbum.SCROLL_STEP;

                if(this.scrollToX < 0){

                    this.scrollToX = 0;
                }
            }else if(type === 1){
    
                this.scrollToX = this.scrollToX + cWidth;
                this.scrollStep = FlipAlbum.SCROLL_STEP;

                if(this.scrollToX > this.refDivAlbum.current.scrollWidth - cWidth){

                    this.scrollToX = this.refDivAlbum.current.scrollWidth - cWidth;
                }
            }
    
            if(this.scrollToX >= 0 && this.scrollToX <= this.refDivAlbum.current.scrollWidth){
    
                this.startScroll();
            }
        }
    }

    /**
     * setInterval的返回值
     */
    private interval:any;
    /**
     * 执行移动的速度, 也就是移动的频率.这里是每1毫秒移动一次.
     */
    private speed:number = 1;

    /**
     * 是否正在滚动中, 暂时没有用到.可以用来扩展, 用它判断是否正在移动当中.
     */
    private isScrolling:boolean = false;

    /**
     * 开始滚动
     */
    private startScroll(){

        clearInterval(this.interval);
        this.isScrolling = true;

        this.interval = setInterval(() => {
            
            if(this.refDivAlbum.current){

                if(this.refDivAlbum.current.scrollLeft !== this.scrollToX){

                    this.refDivAlbum.current.scrollLeft += this.scrollStep;

                    //如果步长(step的值)是一个非整数, 或者div容器的宽度不是步长的整数倍, 由此可能造成setInterval无法结束的情况
                    if(this.refDivAlbum.current.scrollLeft < 0){

                        this.refDivAlbum.current.scrollLeft = 0;
                    }else if(this.refDivAlbum.current.scrollLeft > (this.refDivAlbum.current.scrollWidth - this.refDivAlbum.current.clientWidth)){

                        this.refDivAlbum.current.scrollLeft = (this.refDivAlbum.current.scrollWidth - this.refDivAlbum.current.clientWidth) + 1;//+ 1是为了确保到达最大值, 这里只要加一个大于等于1的数就可以了.
                    }
                }else{

                    clearInterval(this.interval);
                }
            }
            
        }, this.speed)
    }

    render(){
        return (

            <div className='album-container'>

                <div className="flip-album" ref={this.refDivAlbum}>

                {this.arrImages.map((value:any, index) => {
                    console.log(value);
                    return <FlipItem src={value.src} key={index} desc={value.desc}></FlipItem>
                })}

                </div>

                <button className='album-prev-button' onClick={() => {this.goFlipAlbum(0)}}>prev</button>
                <button className='album-next-button' onClick={() => {this.goFlipAlbum(1)}}>next</button>

            </div>
            
        )
    }
}

export default FlipAlbum;
