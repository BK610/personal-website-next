import { Component } from "react";
import { micromark } from "micromark";

export default class MusicItem extends Component {
  getContentBytype(type, embedUrl) {
    let content;

    // console.log(type);

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
      case "Google Photos":
        content = <div>Google Photos</div>;
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
      <div className="section-item flex flex-col transition divide-y divide-purple-300">
        <div className="group font-serif text-lg hover:underline">
          {this.props.info.linkUrl ? (
            <a
              href={this.props.info.linkUrl}
              target="_blank"
              className="h-full w-full"
            >
              <div className="p-2 flex flex-row hover:underline group-hover:animate-wiggle">
                <h3 className="basis-11/12 dark:text-stone-100 line-clamp-1">
                  {this.props.info.title}
                </h3>
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
              <h3 className="dark:text-stone-100 line-clamp-1">
                {this.props.info.title}
              </h3>
            </div>
          )}
        </div>
        <div className="flex flex-row flex-wrap sm:h-40 h-fit divide-x divide-purple-300 dark:divide-purple-300">
          <div className="w-full sm:basis-1/3 p-2 h-full break-words text-ellipsis">
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
          {this.props.info.type == "YouTube" ? (
            <div
              className="sm:basis-2/3 h-full 
          bg-center bg-[url('/img/loading.svg')] dark:bg-[url('/img/loading-dark.svg')]"
            >
              {this.getContentBytype(
                this.props.info.type,
                this.props.info.embedUrl
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
}
