import React, { Component } from 'react';
import GridOne from './GridOne';
import GridTwo from './GridTwo';
import GridThree from './GridThree';
import GridFour from './GridFour';
import GridFive from './GridFive';
import GridSix from './GridSix';
import GridSeven from './GridSeven';
import Grid from '../shared/Grid';

class Home extends Component {
  render() {
    return (
      <Grid>
        <Grid.HomeLabel>ccclothes</Grid.HomeLabel>
        <Grid.HomeTitle>men's tops</Grid.HomeTitle>

        <GridOne>
          <GridOne.Num>01</GridOne.Num>
          <GridOne.Title name="LINEN BLAZER">LINEN BLAZER</GridOne.Title>
          <GridOne.SubTitle>Mens's outfit</GridOne.SubTitle>
          <GridOne.Photo src="https://bit.ly/2tt7sJt" alt="" />
          <GridOne.Pattern />
          <GridOne.BorderBox />
        </GridOne>

        <GridTwo>
          <GridTwo.Num>02</GridTwo.Num>
          <GridTwo.Title name="FREELIFT">FREELIFT</GridTwo.Title>
          <GridTwo.SubTitle>Mens's basics</GridTwo.SubTitle>
          <GridTwo.Photo src="https://bit.ly/2yHmmAT" alt=" " />
          <GridTwo.Box />
        </GridTwo>

        <GridThree>
          <GridThree.Num>03</GridThree.Num>
          <GridThree.Title name="SUPER SKINNY">SUPER SKINNY</GridThree.Title>
          <GridThree.SubTitle>Mens's pattern shirts</GridThree.SubTitle>
          <GridThree.Photo src="https://bit.ly/2yRShPs" alt=" " />
          <GridThree.BorderBox />
          <GridThree.Box />
        </GridThree>

        <GridFour>
          <GridFour.Num>04</GridFour.Num>
          <GridFour.Title name="DENIM">DENIM</GridFour.Title>
          <GridFour.SubTitle>Mens's casual</GridFour.SubTitle>
          <GridFour.Photo src="https://bit.ly/2lFcUVf" alt="" />
          <GridFour.Pattern />
          <GridFour.BorderBox />
        </GridFour>

        <GridFive>
          <GridFive.Num>05</GridFive.Num>
          <GridFive.Title name="SWEATSHIRTS">SWEATSHIRTS</GridFive.Title>
          <GridFive.SubTitle>Mens's jacket</GridFive.SubTitle>
          <GridFive.Photo src="https://bit.ly/2tyzZNR" alt="" />
          <GridFive.Pattern />
          <GridFive.BorderBox />
        </GridFive>

        <GridSix>
          <GridSix.Num>07</GridSix.Num>
          <GridSix.Title name="VINTAGE DENIM">VINTAGE DENIM</GridSix.Title>
          <GridSix.SubTitle>Mens's classic</GridSix.SubTitle>
          <GridSix.Photo src="https://bit.ly/2Ke1uGX" alt="" />
          <GridSix.Box />
          <GridSix.BorderBox />
        </GridSix>

        <GridSeven>
          <GridSeven.Num>07</GridSeven.Num>
          <GridSeven.Title name="EDITION">EDITION</GridSeven.Title>
          <GridSeven.SubTitle>Mens's shirts</GridSeven.SubTitle>
          <GridSeven.Photo src="https://bit.ly/2KqFkR8" alt="" />
          <GridSeven.Box />
          <GridSeven.BorderBox />
        </GridSeven>
      </Grid>
    );
  }
}

export default Home;
