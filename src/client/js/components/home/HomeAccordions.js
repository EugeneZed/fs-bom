import React from 'react';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import HomeCarousel from './HomeCarousel'
import Box from 'grommet/components/Box';
import chunk from 'lodash/chunk';
import groupBy from 'lodash/groupBy';
import {Link} from 'react-router';
export class HomeAccordions extends React.Component {

  render(){
    let {boms,activeAccordion, onAccordionChange} = this.props

    let groupedBoms = groupBy(boms,e=>e.season)
    var bomYears = Object.keys(groupedBoms).map((e)=>parseInt(e)).sort().reverse();
    var active = [bomYears.indexOf(activeAccordion)];

    return (
      <Box pad={{horizontal:"medium"}}>
        <Accordion className="bomHomeAccordions" active={active} onActive={(i) => onAccordionChange(bomYears[i])}>
        {
          bomYears.map(
            function(year,index){
              var seasonString = year + "-" + (year + 1);
              var yearBoms = groupedBoms[year]
              yearBoms = chunk(yearBoms,12)
              return (
                <AccordionPanel heading={seasonString}>
                <HomeCarousel>
                  {
                    yearBoms.map(function(bomGroup,bomGroupIndex){
                      return (
                        <Box pad="medium" key={bomGroupIndex}>
                          {
                            bomGroup.map((bom,i) => (
                              <Link to={`/bom/${bom.id}/`}>
                              <div className="homeTile" key={bom.id}><span>{bom.name}</span></div>
                              </Link>)
                            )
                          }
                        </Box>
                        )
                  })
                  }
                  </HomeCarousel>
                </AccordionPanel>
              )
          })
        }
        </Accordion>
      </Box>

      )

  }

}
