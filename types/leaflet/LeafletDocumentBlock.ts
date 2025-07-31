import { Facet } from "@atproto/api";

export default interface LeafletDocumentBlock<T> {
  $type: string;
}

export interface LeafletDocumentBlockText
  extends LeafletDocumentBlock<"pub.leaflet.blocks.text"> {
  $type: "pub.leaflet.blocks.text";
  plaintext: string;
  facets?: Array<Facet>;
}

export interface LeafletDocumentBlockHeader
  extends LeafletDocumentBlock<"pub.leaflet.blocks.header"> {
  $type: "pub.leaflet.blocks.header";
  level: 1 | 2 | 3;
  facets?: Array<Facet>;
  plaintext: string;
}

export interface LeafletDocumentBlockImage
  extends LeafletDocumentBlock<"pub.leaflet.blocks.image"> {
  $type: "pub.leaflet.blocks.image";
  image: {
    $type: string;
    ref: {
      $link: string;
    };
    mimeType: string;
    size: number;
  };
  aspectRatio: {
    width: number;
    height: number;
  };
}

export interface LeafletDocumentBlockCode
  extends LeafletDocumentBlock<"pub.leaflet.blocks.code"> {
  $type: "pub.leaflet.blocks.code";
  language: string;
  plaintext: string;
}
