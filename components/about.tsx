'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about">
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hi, I’m Emre, a passionate <span className="font-medium">DevOps Engineer</span> with over <span className="font-medium">3 years of experience</span> in the industry. My primary focus is on
        automating IT processes and building efficient <span className="font-medium">CI/CD pipelines</span> to streamline development and operations. I have hands-on experience with{' '}
        <span className="font-medium">containerization, orchestration, and infrastructure automation tools</span>, and I specialize in leveraging cloud solutions like{' '}
        <span className="font-medium">AWS, GCP, and Azure</span> to create scalable, reliable systems. My expertise also includes{' '}
        <span className="font-medium">monitoring and analyzing performance</span> using tools such as AWS CloudWatch, Prometheus, and Grafana. Beyond my technical skills, I take pride in applying
        Agile methodologies and fostering collaboration within teams. I’m always eager to learn and explore the latest in <span className="font-medium">cloud-native technologies</span>, ensuring that
        my solutions are both innovative and impactful.
      </p>
    </motion.section>
  );
}
