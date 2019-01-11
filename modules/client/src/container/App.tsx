import * as React from 'react';
import './App.css';
import Header from '../components/Header/Header';
import SideNavigation from '../components/SideNavigation/SideNavigation';

export interface Props {

}

interface State {
    navbarVisible: boolean,
    infobarVisible: boolean
}

class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { navbarVisible: true, infobarVisible: false };
    }

    render() {
        let middleClassList = [];
        if (this.state.navbarVisible) middleClassList.push("middleLeftSpace");
        if (this.state.infobarVisible) {
            middleClassList.push("middleRightSpace");
        } else {
            middleClassList.push("middleHalfRightSpace");
        }
        const middleClassnames = middleClassList.join(' ');

        return (
            <div className="app">
                <div className="header">
                    <Header
                        navbarVisible={this.state.navbarVisible}
                        toggleNavbarHandler={() => 
                            this.setState({navbarVisible: !this.state.navbarVisible})} />
                </div>

                <div className="body">
                    {this.state.navbarVisible ? 
                        <div className="left">
                            <SideNavigation />
                        </div>
                    : <div/>}

                    <div className={`middle ${middleClassnames}`}>
                        <h2>Lorum Ipsum</h2>
                        <p>Lorem ipsum do lor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum do lor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum do lor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum do lor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Lorem ipsum do lor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum do lor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            Lorem ipsum do lor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum do lor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum do lor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum do lor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Lorem ipsum do lor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum do lor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            Lorem ipsum do lor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum do lor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum do lor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum do lor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Lorem ipsum do lor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum do lor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        </p>
                    </div>

                    {this.state.infobarVisible ? 
                        <div className="right">
                            <h2>About</h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        </div>
                    : <div/>}
                </div>

            </div>
        );
    }
}

export default App;
