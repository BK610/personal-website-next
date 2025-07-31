import type {
  LeafletDocumentBlockCode,
  LeafletDocumentBlockHeader,
  LeafletDocumentBlockImage,
  LeafletDocumentBlockText,
} from "@/types/leaflet/LeafletDocumentBlock";
import LeafletDocumentPage from "@/types/leaflet/LeafletDocumentPage";
import Image from "next/image";
import { renderCode } from "@/utils/renderCode";

interface BlogPostContentProps {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  pages: Array<LeafletDocumentPage>;
}

export default async function BlogPostContent({
  id,
  title,
  description,
  pages,
  publishedAt,
}: BlogPostContentProps): Promise<React.ReactElement> {
  const formattedPublishedDate = new Date(publishedAt).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  // const formattedUpdatedDate = new Date(updatedDate).toLocaleDateString(
  //   "en-US",
  //   {
  //     month: "long",
  //     day: "numeric",
  //     year: "numeric",
  //   }
  // );

  const renderedLeafletContent = await renderLeafletPage(pages[0]);

  return (
    <div>
      <p className="text-sm text-stone-500 dark:text-stone-400">
        Published on {formattedPublishedDate}
      </p>
      <h1 className="mt-4">{title}</h1>
      <p className="mt-2 italic text-sm text-stone-600 dark:text-stone-300">
        {description}
      </p>
      <div className="mt-4 w-full max-w-none prose prose-stone dark:prose-invert leading-relaxed">
        <div className="text-sm px-2 py-1 mb-4 bg-stone-200 dark:bg-stone-800 border-2 border-stone-300 dark:border-stone-700 rounded-md">
          I use{" "}
          <span>
            <a href="https://about.leaflet.pub/" target="_blank">
              Leaflet
            </a>
          </span>
          , an AT Protocol-based blogging platform, to write my blog. If
          something's not rendering correctly or you want to see the original,{" "}
          <span>
            <a href={`https://baileykane.leaflet.pub/${id}`} target="_blank">
              check it out on Leaflet
            </a>
          </span>
          .
        </div>

        {renderedLeafletContent}
      </div>
    </div>
  );
}

async function renderLeafletPage(
  page: LeafletDocumentPage
): Promise<React.ReactElement> {
  const renderedBlocks: Array<React.ReactElement> = await Promise.all(
    page.blocks.map(async (block) => {
      switch (block.block.$type) {
        case "pub.leaflet.blocks.text":
          return renderLeafletBlockText(
            block.block as LeafletDocumentBlockText
          );
        case "pub.leaflet.blocks.header":
          return renderLeafletBlockHeader(
            block.block as LeafletDocumentBlockHeader
          );
        case "pub.leaflet.blocks.image":
          return await renderLeafletBlockImage(
            block.block as LeafletDocumentBlockImage
          );
        case "pub.leaflet.blocks.code":
          return renderLeafetBlockCode(block.block as LeafletDocumentBlockCode);
        default:
          console.log(block);
          return (
            <div className="py-2">
              Woops, we don't know how to support this content type yet.
            </div>
          );
      }
    })
  );

  return <div>{renderedBlocks}</div>;
}

function renderLeafletBlockText(
  block: LeafletDocumentBlockText
): React.ReactElement {
  return <p>{block.plaintext}</p>;
}

function renderLeafletBlockHeader(
  block: LeafletDocumentBlockHeader
): React.ReactElement {
  switch (block.level) {
    case 1:
      return <h1>{block.plaintext}</h1>;
    case 2:
      return <h2>{block.plaintext}</h2>;
    case 3:
      return <h3>{block.plaintext}</h3>;
    default:
      return <h3>{block.plaintext}</h3>;
  }
}

async function renderLeafletBlockImage(
  block: LeafletDocumentBlockImage
): Promise<React.ReactElement> {
  return (
    <Image
      src={`https://bsky.social/xrpc/com.atproto.sync.getBlob?did=did:plc:4zwo7e6xbmv3clz7bj5wsxxu&cid=${block.image.ref.$link}`}
      alt={"Alt text placeholder."}
      loading="lazy"
      width={block.aspectRatio.width}
      height={block.aspectRatio.height}
    />
  );
}

async function renderLeafetBlockCode(
  block: LeafletDocumentBlockCode
): Promise<React.ReactElement> {
  const renderedHtml = await renderCode(block.plaintext, block.language);
  return <div dangerouslySetInnerHTML={{ __html: renderedHtml }} />;
}
