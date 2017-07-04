import * as React from "react";

import ".././styles/styles.scss";

class Header extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="headerWithLogo">
              <div className="logo">
                <Logo logoPath={require(".././images/logoCegeka.png")}/>
              </div>
            </div>
        );
    }
}

const Logo = (props) => <img src={props.logoPath} alt="The Special Logo" />;

export default Header;
