import { Component } from "react";
import { micromark } from "micromark";
import SectionItem from "./SectionItem";
import SectionItemHeading from "./SectionItemHeading";

export default class MusicItem extends Component {
  getContentBytype(type, embedUrl) {
    let content;

    switch (type) {
      case "YouTube":
        content = (
          <iframe
            src={embedUrl}
            className="aspect-video h-full w-full"
            allowFullScreen
          />
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
        divide-y divide-purple-300 dark:divide-purple-300"
      >
        <div className="group font-serif text-lg hover:underline">
          {this.props.info.linkUrl ? (
            <a
              href={this.props.info.linkUrl}
              target="_blank"
              className="h-full w-full"
            >
              <div className="p-2 flex flex-row hover:underline group-hover:animate-wiggle">
                <SectionItemHeading className="basis-11/12 dark:text-stone-100 line-clamp-1">
                  {this.props.info.title}
                </SectionItemHeading>
                <div className="text-right basis-1/12 dark:text-stone-100">
                  <img
                    src="img/external-link-outline-svgrepo-com.svg"
                    className="inline dark:invert"
                  />
                </div>
              </div>
            </a>
          ) : (
            <div className="p-2">
              <SectionItemHeading className="dark:text-stone-100 line-clamp-1">
                {this.props.info.title}
              </SectionItemHeading>
            </div>
          )}
        </div>
        <div className="flex flex-row flex-wrap sm:h-40 h-fit divide-x divide-purple-300 dark:divide-purple-300">
          <div className="w-full sm:w-1/3 p-2 h-full break-words text-ellipsis overflow-auto">
            <div
              dangerouslySetInnerHTML={{
                __html: micromark(
                  this.props.info.description ? this.props.info.description : ""
                ),
              }}
              className="prose prose-stone dark:prose-invert
              prose-sm font-light prose-a:font-light leading-normal dark:text-stone-100
              "
            />
          </div>
          <div
            className="sm:w-2/3 w-full h-full 
          bg-center bg-[url('/img/loading.svg')] dark:bg-[url('/img/loading-dark.svg')]"
          >
            {this.getContentBytype(
              this.props.info.type,
              this.props.info.embedUrl
            )}
          </div>
        </div>
      </SectionItem>
    );
  }
}
