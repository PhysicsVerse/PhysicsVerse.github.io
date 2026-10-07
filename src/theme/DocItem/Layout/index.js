import React from 'react';
import Layout from '@theme-original/DocItem/Layout';
import TopNavBar from '@site/src/components/TopNavBar';
import PhysicsAI from '@site/src/components/PhysicsAI';

export default function LayoutWrapper(props) {
  return (
    <>
      {/* প্রতিটি থিওরি ও পড়ার পেজের ওপরে ব্যাক নেভিগেশন বার */}
      <TopNavBar />

      <Layout {...props} />

      {/* সাদাত ভাইয়ার এআই ক্লোন */}
      <PhysicsAI />
    </>
  );
}