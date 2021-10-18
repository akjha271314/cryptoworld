import React from 'react';
import { Button, Card, Space, Typography } from 'antd';
import { LinkedinOutlined, GithubOutlined } from '@ant-design/icons';

const { Title } = Typography;
const github = "https://www.github.com/akjha271314";
const linkedin = "https://www.linkedin.com/in/akjha271314";

const About = () => {
    return (
        <div>
            <Card>
                <Title level={3}>About Us</Title>
                <p>
                    I am Aashutosh Kashyap Jha. Currently persuing my Bachelor's of Technology from IIIT Una.
                </p>
                <Space>
                    <Button type="text" icon={<GithubOutlined style={{ fontSize: "30px" }} />} onClick={()=> window.open(github, "_blank")} />
                    <Button type="text" icon={<LinkedinOutlined style={{ fontSize: "30px" }} onClick={()=> window.open(linkedin, "_blank")} />} />
                </Space>
            </Card>
        </div>
    )
}

export default About
