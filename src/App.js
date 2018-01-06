import React, { Component } from 'react';
import { Layout } from 'antd';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './components/Navbar/Navbar';
import Coverpage from './components/Coverpage/Coverpage';
import Gallerygrid from './components/Gallerygrid/Gallerygrid';
import Timeline from './components/Timeline/Timeline';
import CoverImg from './components/Coverpage/coverImg.jpg';
import './App.css';
const { Content, Footer } = Layout;

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Layout style={{ height:'100%' }}>
                    <Navbar />
                    <Content style={{ height:'100%', width: '100%' }}>
                        <Coverpage img={ CoverImg } />
                        <Timeline />
                        <Gallerygrid />
                    </Content>
                </Layout>
            </MuiThemeProvider>
        );
    }
}

export default App;
