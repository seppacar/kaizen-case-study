import React, { Component } from 'react';
import "./TextArea.css";


export default class TextArea extends Component {
    //convert html string to plain text for title value from json
    processTitle(text) {
        try{
        return text.replace(/<[^>]+>/g, '');
        }
        catch{}
    }
    //
    render() {
        return(
            <div>
                <h1 className='ContentHeader'>{this.processTitle(this.props.title)}</h1>
                <p className='ContentParagraph' dangerouslySetInnerHTML={{ __html: this.props.description}}/>
            </div>
        )
    }
}
