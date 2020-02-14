import React from 'react';
import './SupportCard.css';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from 'reactstrap';

class SupportCard extends React.Component {
    render() {
        return (
            <div className="Align">
                <div className="Comp">
                    <Card body>
                        <CardBody>
                        <CardImg src="support-img-1.jpg" width="180px" height="180px"/>
                            <CardTitle>'ANDN'의 편지</CardTitle>
                            <CardText>드림 팝을 기반으로 고요히 당신의 시간 위에 아물지 못한 순간들을 위로하며 노래하는 ANDN</CardText>
                            <Button>후원하기</Button>
                        </CardBody>
                    </Card>
                </div>
                <div className="Comp">
                    <Card body>
                        <CardBody>
                        <CardImg src="support-img-2.jpg" width="180px" height="180px"/>
                            <CardTitle>Rookieth '박소은'</CardTitle>
                            <CardText>한국 미래를 책임질 실력파 유망주를 발굴하고 성장을 돕는 프로그램 "Rookieth"</CardText>
                            <Button>후원하기</Button>
                        </CardBody>
                    </Card>
                </div>
                <div className="Comp">
                    <Card body>
                        <CardBody>
                        <CardImg src="support-img-3.jpg" width="180px" height="180px"/>
                            <CardTitle>'지나간 너에게'</CardTitle>
                            <CardText>어쿠스틱 악기들과 발라드, 재즈를 기반으로 다양한 음악으로 소통하는 싱어송라이터 백설우</CardText>
                            <Button>후원하기</Button>
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
    }
}

export default SupportCard;