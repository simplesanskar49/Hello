import React from 'react'
import { Layout, Image, Col, Row, View } from 'antd'
import FormDetails from './FormDetails'
import Hello from './hello';
import Navbar from './Navbar';
import Foot from './Foot';
const { Header, Footer, Sider, Content } = Layout;


export default function Home() {
    return (
        <div>
                <Content >
                <FormDetails />
                </Content>
                <Content>
                    <div className="container" >
                        <div className="home-bot-wrap">
                            <Row type="flex" justify="center">
                                <Col span={7} style={{ "border-right": "1px solid black", "border-left": "1px solid black" }}>
                                    <div className="h-b-left">
                                        <h2>Popular Routes</h2>
                                        <Row type="flex" justify="center">
                                            <Col>
                                                
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col span={6} >
                                    
                                </Col>
                                <Col span={6} style={{ "border-right": "1px solid black", "border-left": "1px solid black" }}>
                                    <div className="h-b-right">
                                        <h2>News &amp; Updates</h2>

                                        <div className="newsupdate">
                                            <div
                                                className="autoScroller-container"
                                                style={{ position: "relative", overflow: "hidden" }}
                                            >
                                                <marquee
                                                    onmouseover="this.stop();"
                                                    onmouseout="this.start();"
                                                    scrollamount="3"
                                                    behavior="scroll"
                                                    height="220;"
                                                    direction="up"
                                                    loop="infinite"
                                                >
                                                    <div className="newsTitle">30 DAYS BOOKINNG&nbsp;</div>

                                                    <div className="newsLine1">
                                                        Now you can book tickets for 30 days in advance.
                                                    </div>
                                                    <div className="newsTitle">IMPROVISED ONLINE BOOKING&nbsp;</div>

                                                    <div className="newsLine1">
                                                        1. Revamped Online booking page.
                                                    </div>
                                                    <div className="newsLine2">
                                                        2. Login is not mandatory, you can book now as Guest user!
                                                    </div>
                                                    <div className="newsLine2">
                                                        3. More options available for choosing service(by Bus
                                                        Type, sort by departure time and fare).{" "}
                                                    </div>
                                                </marquee>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Content>


        </div >
    )
}