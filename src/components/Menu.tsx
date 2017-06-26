import * as React from "react";

import ".././styles/styles.scss";

class Menu extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {activeMenuItem : "(none)"};
        this.clickItem = this.clickItem.bind(this);
    }

    clickItem(menuItem, e) {
       // console.log("Am " + e.target.value);
       this.setState({activeMenuItem : menuItem});
    }

    render() {
        const rows = [];
        this.props.menuItems.forEach( (menuItem) => {
            // rows.push(<div onClick={ () => alert(menuItem.action) }>{menuItem.name}</div>);
            if (menuItem === this.state.activeMenuItem) {
              rows.push(<div onClick={this.clickItem.bind(this, menuItem)} className="selectedMenuItem">
                  {menuItem.name}</div>);
            } else {
              rows.push(<div onClick={this.clickItem.bind(this, menuItem)}>{menuItem.name}</div>);
            }
        });
        return (
            <div>
              <div>
                  {rows}
              </div>
              <br/>
              <div>Active item is: {JSON.stringify(this.state.activeMenuItem)}</div>
            </div>
        );
    }
}

export default Menu;
