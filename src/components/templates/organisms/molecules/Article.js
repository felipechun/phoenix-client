import React, { Component, Fragment } from 'react';
import './Article.css';
import Header6 from './atoms/H6Title';
import Paragraph from './atoms/Paragraph';


class Article extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article>
        <Header6
        className="border-bottom"
        >{this.props.children}</Header6>
        <Paragraph
        paragraphClass="text-left"
        >{this.props.children}</Paragraph>
      </article>
    )
  }
}

export default Article;
