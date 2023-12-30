import React from 'react';
import dbConfigs from "../api/configs/dbconfigs";
import uiConfigs from "../configs/uiConfigs";
import Container from '../components/childrenComponent/Container';
import MediaSlide from '../components/childrenComponent/MediaSlide';
import HeroSlide from '../components/childrenComponent/Heroslide';
import { Col, Layout, Row } from 'antd';


const HomePage = () => {
  const { Content } = Layout;
  return (
    <>
      <HeroSlide mediaType={dbConfigs.mediaType.movie} mediaCategory={dbConfigs.mediaCategory.popular} />
      <Row style={{ ...uiConfigs.style.mainContent }}>
        <Col span={24}>
          <Container header="popular movies">
            <MediaSlide mediaType={dbConfigs.mediaType.movie} mediaCategory={dbConfigs.mediaCategory.popular} />
          </Container>
        </Col>
        <Col span={24}>
          <Container header="popular series">
            <MediaSlide mediaType={dbConfigs.mediaType.tv} mediaCategory={dbConfigs.mediaCategory.popular} />
          </Container>
        </Col>
        <Col span={24}>
          <Container header="top rated movies">
            <MediaSlide mediaType={dbConfigs.mediaType.movie} mediaCategory={dbConfigs.mediaCategory.top_rated} />
          </Container>
        </Col>
        <Col span={24}>
          <Container header="top rated series">
            <MediaSlide mediaType={dbConfigs.mediaType.tv} mediaCategory={dbConfigs.mediaCategory.top_rated} />
          </Container>
        </Col>
      </Row>
      HomePage
    </>
  );
};

export default HomePage;