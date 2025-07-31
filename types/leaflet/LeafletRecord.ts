import LeafletDocumentPage from "@/types/leaflet/LeafletDocumentPage";

export default interface LeafletRecord {
  cid: string;
  value: {
    title: string;
    description: string;
    publishedAt: string;
    pages: Array<LeafletDocumentPage>;
  };
}
