import { Component } from "react";
import { micromark } from "micromark";
import SectionItem from "./SectionItem";

export default class MusicItem extends Component {
  getContentBytype(type, embed_url) {
    let content;

    switch (type) {
      case "YouTube":
        content = (
          <iframe src={embed_url} className="h-full w-full" allowFullScreen />
        );
        break;
      case "File":
        content = <div>File</div>;
        break;
      case "Other":
        content = <div>Other</div>;
        break;
      default:
        content = <div>Unspecified</div>;
        break;
    }

    return content;
  }

  render() {
    return (
      <SectionItem
        className="overflow-hidden
        flex flex-col
        transition
        divide-y divide-zinc-400 dark:divide-zinc-300"
      >
          <div className="group hover:underline">
            {this.props.info.link_url ? (
              <a
                href={this.props.info.link_url}
                target="_blank"
                className="h-full w-full"
              >
                <div className="p-2 flex flex-row hover:underline group-hover:animate-wiggle">
                  <h2 className="basis-11/12 font-medium dark:text-violet-100 line-clamp-1">
                    {this.props.info.title}
                  </h2>
                  <div className="text-right basis-1/12 dark:text-zinc-200">
                    <img
                      src="img/external-link-outline-svgrepo-com.svg"
                      className="inline dark:invert"
                    />
                  </div>
                </div>
              </a>
            ) : (
              <div className="p-2">
                <h2 className="font-medium dark:text-violet-100 line-clamp-1">
                  {this.props.info.title}
                </h2>
              </div>
            )}
          </div>
          <div className="flex flex-row flex-wrap sm:h-40 h-fit divide-x divide-zinc-400 dark:divide-zinc-300">
            <div className="w-full sm:w-1/3 p-2 h-full break-words text-ellipsis overflow-auto">
              <div
                dangerouslySetInnerHTML={{
                  __html: micromark(
                    this.props.info.description
                      ? this.props.info.description
                      : ""
                  ),
                }}
                className="prose prose-zinc dark:prose-invert
              prose-sm font-normal prose-a:font-normal leading-normal dark:text-violet-100
              "
              />
            </div>
            <div
              className="sm:w-2/3 w-full h-full
          bg-center bg-[url('/img/loading.svg')] dark:bg-[url('/img/loading-dark.svg')]"
            >
              {this.getContentBytype(
                this.props.info.type,
                this.props.info.embed_url
              )}
            </div>
          </div>

      </SectionItem>
    );
  }
}
