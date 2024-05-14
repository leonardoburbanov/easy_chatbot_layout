"use client"
import ChatBox from "@/components/ChatBox";
import Image from "next/image";

export default function Home() {
  return <>
  <ChatBox open={true} onClose={() => true}/>
  </>;
}
