"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";

export function Room({ children }: { children: ReactNode }) {
 const params = useParams();
  return (
    <LiveblocksProvider publicApiKey={"pk_dev_XUXm3bsSEWx3c0lCrjbiQH7ZDacBPrLd6hneByW54qo3Yvdx9DSGUCvwVYkShmhj"}>
      <RoomProvider id={params.documentId as string}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}