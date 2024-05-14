"use client";

import { cn } from "@/lib/utils";
import { Message } from "ai";
import { useChat } from "ai/react";
import {
  Aperture,
  Bot,
  ToggleRight,
  Trash,
  WandSparkles,
  XCircle,
} from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useEffect, useRef, useState } from "react";

interface ChatBoxEmbedProps {
  open: boolean;
  onClose: () => void;
}

export default function ChatBox({ open, onClose }: ChatBoxEmbedProps) {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setMessages,
    isLoading,
    error,
    setInput,
  } = useChat(); // /api/chat

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  });

  return (
    <div className="absolute flex flex-col 100vw 100vh top-0 left-0">
      <div className="fixed w-[100vw] h-[10%] top-0 left-0 bg-slate-500"> Header </div>
      <div className="flex w-[100vw] h-[70%] bg-white overflow-auto"> Chats </div>
      <div className="fixed w-[100vw] h-[20%] bottom-0 left-0 bg-gray-200 p-4 flex items-center">
        <form onSubmit={handleSubmit} className="m-3 flex gap-3">
          <Button
            title="Clear chat"
            variant="outline"
            size="icon"
            className="shrink-0"
            type="button"
            onClick={() => setMessages([])}
          >
            <Trash width={15} height={15} />
          </Button>
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Pregunta algo..."
            ref={inputRef}
          />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  );
}
