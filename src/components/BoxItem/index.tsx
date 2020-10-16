import React from 'react';

import './styles.css'

interface BoxItemProps{
  title: string;
  color?: string;
  paragraph1: string;
  paragraph2?: string;
  paragraph3?: string;
  paragraph4?: string;
}

const BoxItem: React.FC<BoxItemProps> = (props) => {
  return(
    <article className="box-item">
      <header>
        <div>
          <strong>{props.title}</strong>
        </div>
      </header>
          <p> {props.paragraph1}</p>
          <p> {props.paragraph2}</p>
          <p> {props.paragraph3}</p>
          <p> {props.paragraph4}</p>
    </article>
  )
}

export default BoxItem;