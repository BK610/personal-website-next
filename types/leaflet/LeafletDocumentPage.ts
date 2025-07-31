import LeafletDocumentBlock from "./LeafletDocumentBlock";

export default interface LeafletDocumentPage {
  blocks: Array<{
    $type: string;
    block: LeafletDocumentBlock<any>;
  }>;
}
