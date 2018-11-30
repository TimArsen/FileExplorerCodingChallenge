import React, { Component } from 'react';
import './File-tree.css';

export default class FileTree extends Component {
  constructor(props) {
    super(props)
    this.state = { expanded: false }
  }

  onClick() {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  render() {
    const depthPadding = (this.props.depth * 24) + "px";
    const childStyles = {
      paddingLeft: depthPadding
    }
    let subchildClass;
    let iconClass;
    let childIconClass = this.props.data.private ? "private" : this.props.data.type;

    switch (this.state.expanded) {
      case true:
        subchildClass = "subchild expanded";
        iconClass = "collapse";
        break;
      case false:
      default:
        subchildClass = "subchild collapsed";
        iconClass = "expand";
      break;
    }
    
    let subChildren = null;
    if(this.props.data.children){
      subChildren = this.props.data.children.map((child, i) => {
        const depth = this.props.depth + 1;
        return <FileTree data={child} key={i} depth={depth}/>;
      })
    }

    if(subChildren){
      return (
        <div>
          <div className="child" style={childStyles}>
            <span className={iconClass} onClick={this.onClick.bind(this)}></span>
            <span className={childIconClass}></span>
            <span className="name">{this.props.data.name}</span>
          </div>
          <div className={subchildClass}>
            {subChildren}
          </div>
        </div>
      )
    }

    return (
      <div className="child" style={{ paddingLeft: depthPadding }}>
        <span className={this.props.data.type}></span>
        <span className="name">{this.props.data.name}</span>
      </div>
    )
  } 
};
