import React from 'react-router'
import { Card } from 'antd';
import './styles.scss'
const { Meta } = Card;

export const CardContainer = ({title='',imgSrc, descritpion=null}) => {
    return(
        <Card
        hoverable
        cover={
          <img
            alt="example"
            src={imgSrc}
          />
        }
       
      >
        <Meta
          title={title}
          description={descritpion|| 'This is a text'}
        />
      </Card>
        
    )
}

export default CardContainer