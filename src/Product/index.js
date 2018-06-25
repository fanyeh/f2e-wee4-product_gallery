import React, { Component } from 'react';
import GridTop from './GridTop';
import GridBottom from './GridBottom';
import GridContent from './GridContent';
import TitleSmall from './TitleSmall';
import Label from './Label';
import Icon from './Icon';
import Subtitle from '../shared//Subtitle';
import Title from '../shared//Title';
import Image from '../shared/Image';
class Product extends Component {
  render() {
    return (
      <div>
        <GridTop>
          <GridTop.Label>
            <Label>ccclothes</Label>
          </GridTop.Label>

          <GridTop.Icon>
            <Icon className="fas fa-arrow-left" />
          </GridTop.Icon>
          <GridTop.TitleTop>
            <Title>vintage</Title>
          </GridTop.TitleTop>
          <GridTop.TitleBottom>
            <Title>top</Title>
          </GridTop.TitleBottom>
          <GridTop.TitleLeft>
            <Title>90</Title>
          </GridTop.TitleLeft>
          <GridTop.TitleRight>
            <Title>denim</Title>
          </GridTop.TitleRight>
          <GridTop.SolidBox />
          <GridTop.ImageContainer>
            <Image src="https://bit.ly/2Kjq6dp" alt="" />
          </GridTop.ImageContainer>
          <GridTop.BorderBox />
        </GridTop>

        <GridContent>
          <GridContent.Caption>
            <TitleSmall>Product details</TitleSmall>
          </GridContent.Caption>
          <GridContent.Header>
            <Title>vintage denim</Title>
            <Subtitle>Kogi Cosby sweater ethical squid irony</Subtitle>
          </GridContent.Header>
          <GridContent.Detail>
            <p>
              n the tumultuous business of cutting-in and attending to a whale, there is much
              running backwards and forwards among the crew. Now hands are wanted here, and then
              again hands are wanted there. There is no staying in any one place; for at one and the
              same time everything has to be done everywhere. It is much the same with him who
              endeavors the description of the scene. We must now retrace our way a little. It was
              mentioned that upon first breaking ground in the whale's back, the blubber-hook was
              inserted into the original hole there cut by the spades of the mates. But how did so
              clumsy and weighty a mass as that same hook get fixed in that hole? It was inserted
              there by my particular friend Queequeg, whose duty it was, as harpooneer.
            </p>
          </GridContent.Detail>
        </GridContent>

        <GridBottom>
          <GridBottom.SolidBox />
          <GridBottom.BorderBox />
          <GridBottom.SlashBox />
          <GridBottom.ImageContainerSm>
            <Image src="https://bit.ly/2Kl9qC6" alt="" />
          </GridBottom.ImageContainerSm>
          <GridBottom.ImageContainerLg>
            <Image src="https://bit.ly/2Kixusv" alt="" />
          </GridBottom.ImageContainerLg>
        </GridBottom>
      </div>
    );
  }
}

export default Product;
