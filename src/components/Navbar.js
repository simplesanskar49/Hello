import React from 'react'
import { Layout, Image, Col, Row, View,} from 'antd'
const { Header, Footer, Sider, Content } = Layout;

const Navbar = () => {
    return (
        <div>
            <Header style={{ backgroundColor: 'white', alignContent: 'center' }}>
                <Row>
                    <Col span={12} offset={9}>
                        <img
                            src="https://static.abhibus.com/ap_tg/ts/oprs-web/_assets/images/new/logo.png"
                            alt="LOGO"
                            style={{ height: "73px", width: "408px", paddingTop: "10px", paddingBottom: "10px" }}
                        />
                    </Col>
                </Row>

            </Header>
            <hr
                        style={{
                            width: "100%",
                            border: "10px solid #19bc9c",


                        }}
                    />
        </div>
    )
}

export default Navbar