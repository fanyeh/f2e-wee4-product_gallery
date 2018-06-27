import React, { Component } from 'react';
import GridTop from './GridTop';
import GridBottom from './GridBottom';
import GridContent from './GridContent';
import Grid from '../shared/Grid';
class Product extends Component {
  render() {
    return (
      <Grid>
        <Grid.ProductIcon className="fas fa-arrow-left" />
        <Grid.ProductLabel>ccclothes</Grid.ProductLabel>
        <GridTop>
          <GridTop.Box />
          <GridTop.BorderBox />
          <GridTop.TitleTop>vintage</GridTop.TitleTop>
          <GridTop.TitleBottom>top</GridTop.TitleBottom>
          <GridTop.TitleLeft>90</GridTop.TitleLeft>
          <GridTop.TitleRight>denim</GridTop.TitleRight>
          <GridTop.Photo src="https://bit.ly/2Kjq6dp" alt="" />
        </GridTop>

        <GridContent>
          <GridContent.Caption>Product details</GridContent.Caption>
          <GridContent.Header>
            <GridContent.Header.Title>vintage denim</GridContent.Header.Title>
            <GridContent.Header.SubTitle>
              Kogi Cosby sweater ethical squid irony
            </GridContent.Header.SubTitle>
          </GridContent.Header>
          <GridContent.Detail>
            n the tumultuous business of cutting-in and attending to a whale, there is much running
            backwards and forwards among the crew. Now hands are wanted here, and then again hands
            are wanted there. There is no staying in any one place; for at one and the same time
            everything has to be done everywhere. It is much the same with him who endeavors the
            description of the scene. We must now retrace our way a little. It was mentioned that
            upon first breaking ground in the whale's back, the blubber-hook was inserted into the
            original hole there cut by the spades of the mates. But how did so clumsy and weighty a
            mass as that same hook get fixed in that hole? It was inserted there by my particular
            friend Queequeg, whose duty it was, as harpooneer.
          </GridContent.Detail>
        </GridContent>

        <GridBottom>
          <GridBottom.Box />
          <GridBottom.BorderBox />
          <GridBottom.Pattern />
          <GridBottom.PhotoSm src="https://bit.ly/2Kl9qC6" alt="" />
          <GridBottom.PhotoLg src="https://bit.ly/2Kixusv" alt="" />
        </GridBottom>
      </Grid>
    );
  }
}

export default Product;
