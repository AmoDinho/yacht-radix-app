import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { styled } from '@stitches/react';
import Tabs from '../components/ui/Tabs';
export default function Home() {
  console.log(Tabs);
  return (
    <div>
      <Tabs />
    </div>
  );
}
