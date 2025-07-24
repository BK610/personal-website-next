export default interface LeafletRecord {
  cid: string;
  value: {
    title: string;
    description: string;
    publishedAt: string;
    pages: Array<{
      blocks: Array<{
        type: string;
        block: any;
      }>;
    }>;
  };
}
