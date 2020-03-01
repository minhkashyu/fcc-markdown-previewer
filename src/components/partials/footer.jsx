import React from 'react';

class Footer extends React.Component {
    render() {
        var dtDate = new Date();
        return (
            <div className="site-footer">
                <p>Copyright &copy; { dtDate.getFullYear() } <a href="http://minhta.com.au" title="Home">Minh Ta</a>. All Rights Reserved.</p>
            </div>
        );
    }
}

export default Footer;
