/*H**********************************************************************
* FILENAME :        js/components/Home.js 
*
* DESCRIPTION :
*       Defines a carousel with markers on the bottom right.  
*
* EXPORTS :
*       class HomeCarousel
*
* NOTES :
*       ---
* 
* AUTHOR :    Jay Sridharan       START DATE :    22 Dec 16
*
*H*/


import Carousel from 'nuka-carousel'
import React from 'react';

export default class HomeCarousel extends React.Component{

  render(){

    var Decorators = 
    [
      {
        component: React.createClass({
          render() {
            var self = this;
            var indexes = this.getIndexes(self.props.slideCount, self.props.slidesToScroll, this.props.scrollMode === 'page');
            return (
              <ul style={self.getListStyles()}>
                {
                  indexes.map(function(index) {
                    var callback = self.props.goToSlide.bind(null, index)
                    return (
                      <li style={self.getListItemStyles()} key={index} onClick={callback}>
                        <div style={self.getMarkerStyles(self.props.currentSlide === index)}>
                        </div>
                      </li>
                    )
                  })
                } 
              </ul>
            )
          },

          getIndexes(count, inc, remainderScroll) {
            const arr = [];
            if (remainderScroll) {
              for (var i = 0; i < count; i += inc) {
                arr.push(i);
              }
              if (arr[arr.length - 1] < count - 1) {
                arr.push(count - 1);
              }
            } else {
              var cellAlign = this.props.cellAlign;
              cellAlign = "left";
              switch (cellAlign) {
              case 'left':
                var lastPossibleIndex = count - this.props.slidesToShow;
                break;
              case 'center':
                var lastPossibleIndex =
                  count - Math.ceil(this.props.slidesToShow / 2)
                  - (this.props.slidesToShow % 2 === 0 ? 1 : 0);
                break;
              case 'right':
                var lastPossibleIndex = count - 1;
                break;
              }
              for (var i = 0; i <= count; i += inc) {
                arr.push(i < lastPossibleIndex ? i : lastPossibleIndex);
              }
            }

            const log = {};

            return arr.filter((val) => {
              if (log[val] === undefined) {
                log[val] = val;

                return true;
              }
            }).sort();
          },
          getListStyles() {
            return {
              paddingLeft: 0,
              listStyle: 'none'
            }
          },
          getListItemStyles() {
            return {
              display: 'block',
              float: 'left',
              marginRight: '5px'
            }
          },
          getMarkerStyles(active) {
            var style={
              width: '32px',
              height: '9px',

            }
            var activeStyle = {
              ...style,
              backgroundColor: '#f0a30a',
              border: '1px #f0a30a solid',
            }
            var inactiveStyle = {
              ...style,
              backgroundColor: '#929292',
              border: '1px #929292 solid',
            }
            return (active ? activeStyle : inactiveStyle)
          }
        }),
        position: 'BottomRight'
      }

    ];


    return(

      <Carousel decorators={Decorators} scrollMode="page" cellAlign="left" speed={500}>
        {this.props.children}
      </Carousel>

    )


  }


}
