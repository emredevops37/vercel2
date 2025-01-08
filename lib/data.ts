import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';

import asyncBotImg from '@/public/KubernetesNew.jpeg';
import microservices from '@/public/microservices.jpg';
import hrImg from '@/public/aws.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'DevOps Engineer',
    location: 'Akım Metal R&D Center',
    description:
      'Experience with troubleshooting and debugging Docker containers. Implemented continuous integration and continuous delivery (CI/CD) pipelines using Jenkins and other tools, resulting in a 40% improvement in release velocity. Experienced in installing, configuring, and updating Nginx. Effectively configured Nginx to improve the performance of web servers. Used Grafana to visualize Prometheus metrics, resulting in a 50% reduction in the time required to identify and resolve performance issues.',
    icon: React.createElement(CgWorkAlt),
    date: 'May 2024 – Present',
  },
  {
    title: 'AWS & DevOps Engineer',
    location: 'Upwork',
    description:
      'Various hands-on and project experience with all mentioned DevOps tools as well as in-depth training on AWS as a cloud technology. Developed and maintained custom Terraform modules and plugins, resulting in a 25% improvement in infrastructure management efficiency. Including networking experience with container orchestration, scaling, and Kubernetes. Hands-on experience creating and managing pods, services, deployments, and helm. Designed and implemented Ansible-based disaster recovery solutions.',
    icon: React.createElement(CgWorkAlt),
    date: 'June 2023 – March 2024',
  },
] as const;

export const projectsData = [
  {
    title: 'Kubernetes Project',
    description:
      'Developed a web application with Docker and Kubernetes, integrating a MySQL database. Created frontend and backend services managed by Kubernetes deployments. Utilized persistent volume and persistent volume claim for data preservation.',
    tags: ['Kubernetes', 'Docker', 'MySQL', 'Persistent Volume', 'Backend', 'Frontend'],
    imageUrl: asyncBotImg,
  },
  {
    title: 'AWS Infrastructure Project',
    description:
      'Built an infrastructure with an Application Load Balancer, Auto Scaling Group of EC2 Instances, and RDS on a defined VPC. Integrated CloudFront and Route 53 for secure traffic management. Developed a blog platform with image and video uploads stored on S3 Bucket, ensuring scalability and reliability.',
    tags: ['AWS', 'EC2', 'RDS', 'S3', 'CloudFront', 'Route 53', 'Infrastructure'],
    imageUrl: hrImg,
  },
  {
    title: 'Capstone Project',
    description:
      'Developed robust backend services in Java with Spring Boot for core business logic. Designed and implemented a CI/CD pipeline using Jenkins, facilitating seamless build, test, and deployment processes. Automated infrastructure provisioning with Terraform and implemented a scalable container orchestration platform using Kubernetes for efficient microservices deployment.',
    tags: ['Java', 'Spring Boot', 'Kubernetes', 'Jenkins', 'Terraform', 'CI/CD'],
    imageUrl: microservices,
  },
] as const;

export const skillsData = [
  'Python',
  'JAVA',
  'Bash',
  'AWS Cloud',
  'Terraform',
  'Ansible',
  'Docker',
  'Kubernetes',
  'Jenkins',
  'Prometheus',
  'Grafana',
  'Linux',
  'ChatGPT',
  'Google',
  'Slack',
  'Git',
  'Nexus',
  'Maven',
] as const;
