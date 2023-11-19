import React from "react";
import {Fade} from "react-reveal";
import { Tabs, Tab } from "react-bootstrap";
import "./Services.scss";
// reactstrap components
import {
  Container,
} from "reactstrap";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import {ImTablet} from 'react-icons/im'
import {IoPhonePortraitOutline} from 'react-icons/io5'
import {AiOutlineLaptop} from 'react-icons/ai'
import {BsSmartwatch} from 'react-icons/bs'

//export default function GithubRepoCard({repo, isDark}) {
//<GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />
//onClick={() => openUrlInNewTab(repo.node.url, repo.node.name)}


//            {repo.map((v, i) => {if (!v) {console.error(`Github:${i}is`);}
 // return (<GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />);         })}


//[{icon:,txt:},{img:,txt:},{img:,txt:}]

export default function ServicesSub({array}) {
  const Demo = () => {
    return <div>Tab 4 using component screen readers</div>;
  };
  return (
    <Fade bottom duration={1000} distance="40px">
                    {array.map((item, index) => (
                      <div key={index} className="d-flex row  justify-content-center align-items-center">
                          {item.icon}

                          								<div className=" d-flex align-items-center justify-content-center">
                <div className="icon d-flex align-items-center justify-content-center"><span className="mx-2 rounded-circle border border-warning"><item.icon className="m-2 m-md-3 fa-1x "/></span></div>
									<div className="text"><span>(+01) 123 456 7890</span></div>
								</div>
                          <h2>{item.title}</h2>
                      </div>
                    ))}
  </Fade>
  );
}
//in this stage we have to add a new tech that can adjust