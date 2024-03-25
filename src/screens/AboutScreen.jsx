import React from 'react';
import MainLayout from '../layouts/MainLayout';
import {Text} from 'react-native';

const AboutScreen = ({}) => {
  return (
    <MainLayout>
      <Text>Kshitij's Incredible ToDo List App</Text>
      <Text>Created By: Rebecca Chan</Text>
      <Text>Version: March 13, 2024</Text>
    </MainLayout>
  );
};

export default AboutScreen;