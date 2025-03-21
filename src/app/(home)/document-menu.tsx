import { ExternalLink, FilePenIcon, MoreVertical, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuItem,
 DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Id } from "../../../convex/_generated/dataModel";
import { RemoveDialog } from "@/components/remove-dialog";
import { RenameDialog } from "@/components/rename-dialog";

interface DocumentsMenuProps {
 documentId: Id<"documents">;
 title : string;
 onNewTab:(id: Id<"documents">) => void;
};

export const DocumentMenu = ({ documentId, title, onNewTab }:DocumentsMenuProps) => {
  return (
   <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" size="icon" className="rounded-full">
        <MoreVertical className="size-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
    <RenameDialog documentId={documentId} initialTitle={title}>
      <DropdownMenuItem
      onSelect={(e) => e.preventDefault()}
      onClick={(e) => e.stopPropagation()}
      >
       <FilePenIcon className="size-4 mr-2" />
       Rename
      </DropdownMenuItem>
     </RenameDialog>
     <RemoveDialog documentId={documentId}>
      <DropdownMenuItem
      onSelect={(e) => e.preventDefault()}
      onClick={(e) => e.stopPropagation()}
      >
       <Trash2 className="size-4 mr-2" />
       Remove
      </DropdownMenuItem>
     </RemoveDialog>
      <DropdownMenuItem
      onClick={() => onNewTab(documentId)}>
       <ExternalLink className="size-4 mr-2" />
       open in a new tab
       </DropdownMenuItem> 
    </DropdownMenuContent>
   </DropdownMenu>
  );
};
