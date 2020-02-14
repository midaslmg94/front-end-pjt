import React from 'react';
import './SupportCard.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

class SupportCard extends React.Component {
    render() {
        return (
          <div>
            <Card body>
              <CardImg src="/로고.png" width="180px" height="180px"/>
              <CardBody>
                <CardTitle>후원뮤지션</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </div>
        );
    }
}

export default SupportCard;