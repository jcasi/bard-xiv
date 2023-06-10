import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Sidebar from "@/components/Sidebar";
import Results from "@/components/Results";
import Info from "@/components/Info";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-raisin h-screen">
      <Head>
        <title>Bard XIV</title>
        <link rel="icon" href="/icon.ico" />
      </Head>

      <Sidebar />
      <Results />
      <Info />
    </div>
  );
}
