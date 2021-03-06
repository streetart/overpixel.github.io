import React from 'react';
import {Avatar, Card, Icon } from "antd";
import {PublishedDate} from "../../shared/cards/CardOverlay.style";




const { Meta } = Card;

const IconText = ({ type, text }) => (
  <React.Fragment>
    <Icon type={type} style={{ marginRight: 8 }} />
        {text}
 </React.Fragment>
);


const CardView = (props) => {
    return (
        <React.Fragment>
            <Card
                cover={<img alt="example" src={props.ImagePreview} />}
                actions={[ <IconText type="eye" text="15" />, <IconText type="heart" text="15326" />, <IconText type="message" text="12" /> ]}
            >

                <PublishedDate>
                    <div><span className={props.SrcRef}/>{props.SrcRef}</div>
                    <div>{props.PublishedDate}</div>
                </PublishedDate>
                <Meta

                    avatar={  <Avatar size="large" src={props.AvatarImg}>
                        {props.user}
                    </Avatar>}
                    title={props.title}
                    description={props.TeamMember}
                />
            </Card>
        </React.Fragment>
    )
}


export default CardView;
