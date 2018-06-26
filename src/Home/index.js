import React, { Component } from 'react';
import ShadowTitle from '../shared/ShadowTitle';
import HomeGrid from './HomeGrid';
import Label from '../shared/Label';
import TitleLg from '../shared/TitleLg';
import Image from '../shared/Image';
import GridOne from './GridOne';
import GridTwo from './GridTwo';
import TitleMd from '../shared/TitleMd';
import TitleSm from '../shared/TitleSm';

class Home extends Component {
  render() {
    return (
      <HomeGrid>
        <HomeGrid.Label>
          <Label>ccclothes</Label>
        </HomeGrid.Label>
        <HomeGrid.Title>
          <TitleLg>men's tops</TitleLg>
        </HomeGrid.Title>

        <GridOne>
          <GridOne.ImageContainer>
            <Image src="https://bit.ly/2tt7sJt" alt="" />
          </GridOne.ImageContainer>
          <GridOne.Title>
            <ShadowTitle title="LINEN BLAZER">LINEN BLAZER</ShadowTitle>
          </GridOne.Title>
          <GridOne.Pattern />
          <GridOne.BorderBox />
          <GridOne.Num>
            <TitleMd>01</TitleMd>
          </GridOne.Num>

          <GridOne.SmallTitle>
            <TitleSm>mens's outfit</TitleSm>
          </GridOne.SmallTitle>
        </GridOne>

        <GridTwo>
          <GridTwo.Title>
            <ShadowTitle title="FREELIFT">FREELIFT</ShadowTitle>
          </GridTwo.Title>
          <GridTwo.Num>
            <TitleMd>02</TitleMd>
          </GridTwo.Num>
          <GridTwo.SmallTitle>
            <TitleSm>mens's basics</TitleSm>
          </GridTwo.SmallTitle>
          <GridTwo.ImageContainer>
            <Image src="https://bit.ly/2yHmmAT" alt=" " />
          </GridTwo.ImageContainer>
          <GridTwo.Box />
        </GridTwo>
      </HomeGrid>
    );
  }
}

export default Home;
