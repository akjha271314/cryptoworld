import React from 'react';
import { Card, Typography } from 'antd';
import { LinkedinOutlined, GithubOutlined, MailOutlined } from '@ant-design/icons';

const { Title } = Typography;

const About = () => {
    return (
        <div>
            <Card>
                <Title level={3}>About Us</Title>
            </Card>
        </div>
    )
}

export default About
