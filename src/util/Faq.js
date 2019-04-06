import React, { Component } from 'react';

class Faq extends Component {
    render() {
        return (
            <div style={{ marginTop: 50 }}>
                <h1>About EasyManagement (GoSFU-New)</h1>
                <p>Have you gotten tired of the old and slow system that your school is using?</p>
                    
                <p>EasyManagement (GoSFU-New) is a College Management System which initially aimed to become an upgraded version
                    of Simon Fraser University's GoSFU (go.sfu.ca) system, and it can also be applied to your school.</p>

                <p>The project is still under development by a team of 2, to check out our progress and source code, please go to our
                    <a href="https://github.com/erminwang/gosfunew/tree/develop"> Github </a>page
                </p>
                
            </div>
        );
    }
}

export default Faq;