import React from "react";
import { Row, Col, Modal } from "antd";
import { Player } from "@lottiefiles/react-lottie-player";
import Yogi from "../assets/animation/developer.json";
import {
  GithubOutlined,
  GlobalOutlined,
  TwitterOutlined,
  LinkedinFilled,
  InstagramOutlined,
  CloseOutlined,
} from "@ant-design/icons";

import "./css/home.css";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      about: false,
      project: false,
      connect: false,
    };
  }
  render() {
    return (
      <Row>
        <Col xs={0} sm={0} md={0} lg={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Player autoplay loop src={Yogi}></Player>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} style={{ height: "100vh" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              width: "100%",
              flexDirection: "column",
            }}
          >
            <div className="hi-section">
              <h1>
                <span style={{ fontSize: "5vh", color: "#ffffff" }}>Hi👋🏻 </span>
                <br />
                <span style={{ fontSize: "10vh", color: "#ffffff" }}>
                  I'm Shubham.
                </span>
              </h1>
            </div>
            <div style={{ width: "100%", textAlign: "center" }}>
              <div style={{ display: "inline-block" }}>
                <button
                  class="btn"
                  onClick={() => this.setState({ about: true })}
                >
                  About
                </button>
              </div>
              <div style={{ display: "inline-block" }}>
                <button
                  onClick={() => this.setState({ project: true })}
                  class="btn"
                >
                  Projects
                </button>
              </div>
              <div style={{ display: "inline-block" }}>
                <button
                  onClick={() => this.setState({ connect: true })}
                  class="btn"
                >
                  Connect
                </button>
              </div>
            </div>
          </div>
        </Col>
        <Modal
          // title="About"
          centered
          visible={this.state.about}
          onCancel={() => this.setState({ about: false })}
          footer={null}
          bodyStyle={{
            backgroundColor: "#000000",
            color: "#ffffff",
            height: "80vh",
            overflow: "scroll",
          }}
          style={{ width: "80%" }}
        >
          <Row>
            <Col span={20}>
              <h1
                style={{
                  fontSize: "30px",
                  fontWeight: "900",
                  color: "#ffffff",
                  margin: 0,
                }}
              >
                <u>About</u>
              </h1>
            </Col>
            <Col span={4}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <CloseOutlined
                  style={{ fontSize: "20px", fontWeight: "700" }}
                  onClick={() => {
                    this.setState({ about: false });
                  }}
                />
              </div>
            </Col>
          </Row>
          <br />

          <p style={{ fontSize: "20px", fontWeight: "500", color: "#ffffff" }}>
            First and foremost, I love writing code. I still remember sitting in
            front of a computer inside my school, making it print "Hello,
            Shubham" for the very first time. From that very moment I have been
            obsessed with the idea of using programming to solve practical
            problems.
            <br /> <br /> Today I am a Full Stack Developer with experience of
            developing apps that are being used in real world. There's certainly
            yet more to learn, yet more to code and yet more to build. <br />
            <br />
            When I'm not coding, I'm watching cosmos 👩🏻‍🚀, re-runs of cricket
            matches 🏏 or listening to music 🎧.
          </p>
        </Modal>
        <Modal
          // title="About"
          centered
          visible={this.state.project}
          onCancel={() => this.setState({ project: false })}
          footer={null}
          bodyStyle={{
            backgroundColor: "#000000",
            color: "#ffffff",
            height: "80vh",
            overflow: "scroll",
          }}
          style={{ width: "80%" }}
        >
          <Row>
            <Col span={20}>
              <h1
                style={{
                  fontSize: "30px",
                  fontWeight: "900",
                  color: "#ffffff",
                  margin: 0,
                }}
              >
                <u>Projects</u>
              </h1>
            </Col>
            <Col span={4}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <CloseOutlined
                  style={{ fontSize: "20px", fontWeight: "700" }}
                  onClick={() => {
                    this.setState({ project: false });
                  }}
                />
              </div>
            </Col>
          </Row>
          <br />
          <div style={{ marginBottom: "4%" }}>
            <h1
              style={{ fontSize: "25px", fontWeight: "900", color: "#ffffff" }}
            >
              01. What the tweet
            </h1>
            <p
              style={{ fontSize: "20px", fontWeight: "700", color: "#ffffff" }}
            >
              This is a Machine learning project which uses natural language
              processing to categorise tweets as Positive, Negative or Neutral.
            </p>
            <div style={{ display: "flex" }}>
              <a
                href="https://github.com/workdone0/what-the-tweet"
                target="_blank"
                rel="noreferrer"
                style={{ marginRight: "2%" }}
              >
                <GithubOutlined
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                />
              </a>
              <a
                href="https://wttworkdone0.web.app/"
                target="_blank"
                rel="noreferrer"
                style={{ marginRight: "2%" }}
              >
                <GlobalOutlined
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                />
              </a>
            </div>
          </div>
          <div style={{ marginBottom: "4%" }}>
            <h1
              style={{ fontSize: "25px", fontWeight: "900", color: "#ffffff" }}
            >
              02. Direct Gold
            </h1>
            <p
              style={{ fontSize: "20px", fontWeight: "700", color: "#ffffff" }}
            >
              An e-commerce app written in MERN stack. This website is used to
              sell Gold and Silver.
            </p>
            <div style={{ display: "flex" }}>
              <a
                href="https://www.directgold.store/"
                target="_blank"
                rel="noreferrer"
                style={{ marginRight: "2%" }}
              >
                <GlobalOutlined
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    marginRight: "2%",
                  }}
                />
              </a>
            </div>
          </div>
          <div style={{ marginBottom: "4%" }}>
            <h1
              style={{ fontSize: "25px", fontWeight: "900", color: "#ffffff" }}
            >
              03. TakeEasy
            </h1>
            <p
              style={{ fontSize: "20px", fontWeight: "700", color: "#ffffff" }}
            >
              This app was developed for Complaint Booking, Utility Management
              and Healthcare Appointments inside SMIT campus.
            </p>
            <div style={{ display: "flex" }}>
              <a
                href="https://takeeasy-96df6.web.app/"
                target="_blank"
                rel="noreferrer"
                style={{ marginRight: "2%" }}
              >
                <GlobalOutlined
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    marginRight: "2%",
                  }}
                />
              </a>
            </div>
          </div>
        </Modal>
        <Modal
          // title="About"
          centered
          visible={this.state.connect}
          onCancel={() => this.setState({ connect: false })}
          footer={null}
          bodyStyle={{
            backgroundColor: "#000000",
            color: "#ffffff",
            height: "80vh",
            overflow: "scroll",
          }}
          style={{ width: "80%" }}
        >
          <Row>
            <Col span={20}>
              <h1
                style={{
                  fontSize: "30px",
                  fontWeight: "900",
                  color: "#ffffff",
                  margin: 0,
                }}
              >
                <u>Connect</u>
              </h1>
            </Col>
            <Col span={4}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <CloseOutlined
                  style={{ fontSize: "20px", fontWeight: "700" }}
                  onClick={() => {
                    this.setState({ connect: false });
                  }}
                />
              </div>
            </Col>
          </Row>
          <br />
          <p style={{ fontSize: "20px", fontWeight: "500", color: "#ffffff" }}>
            If you fancy a chat feel free to drop me a line.
          </p>

          <div style={{ display: "flex" }}>
            <a
              href="https://twitter.com/workdone0"
              target="_blank"
              rel="noreferrer"
              style={{ marginRight: "2%", color: "#ffffff" }}
            >
              <TwitterOutlined
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginRight: "2%",
                }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/shubham-kumar-0199/"
              target="_blank"
              rel="noreferrer"
              style={{ marginRight: "2%", color: "#ffffff" }}
            >
              <LinkedinFilled
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginRight: "2%",
                }}
              />
            </a>
            <a
              href="https://www.instagram.com/workdone0/"
              target="_blank"
              rel="noreferrer"
              style={{ marginRight: "2%", color: "#ffffff" }}
            >
              <InstagramOutlined
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginRight: "2%",
                }}
              />
            </a>
            <a
              href="https://github.com/workdone0"
              target="_blank"
              rel="noreferrer"
              style={{ marginRight: "2%", color: "#ffffff" }}
            >
              <GithubOutlined
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginRight: "2%",
                }}
              />
            </a>
          </div>
        </Modal>
      </Row>
    );
  }
}

export default Home;
