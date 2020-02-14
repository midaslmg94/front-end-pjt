import React, { Component } from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
  } from 'reactstrap';

class LiveList extends Component {
    render() {
        return (
            <CardDeck>
                <Card>
                
                <CardBody>
                    <CardImg top width="100%" src="/Singing1.png" style={{width : 200, height:150}} />
                    <CardTitle> <p></p><b>가을 방학 - 홍대 버스킹</b> </CardTitle>
                    <Button> Live View </Button>
                </CardBody>
                </Card>
                <Card>
                
                <CardBody>
                    <CardImg top width="100%" src="/Singing2.png" style={{width : 200, height:150}}/>
                    <CardTitle> <p></p><b>Fuzzy Pug - 얼라운드 공연</b> </CardTitle>
                    <Button> Live View </Button>
                </CardBody>
                </Card>
                <Card>
                
                <CardBody>
                    <CardImg top width="100%" src="/wing.png" style={{width : 200, height:150}}/>
                    <CardTitle> <p></p><b>스텔라장 - 뜨거운 안녕 공연</b> </CardTitle>
                    <Button> Live View </Button>
                </CardBody>
                </Card>
          </CardDeck>
        );
    }
}

export default LiveList;