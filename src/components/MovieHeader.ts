import EventComponent from "./abstract/EventComponent";
import QueryState from "../states/QueryState";
import { $ } from "../utils/dom";
import { HTMLTemplate, TargetId } from "../types/common";
import IMAGES from "../images";

const MOVIE_QUERY_MAX_LENGTH = 500;

interface MovieHeaderProps {
  targetId: TargetId;
  queryState: QueryState;
}
export default class MovieHeader extends EventComponent {
  private queryState: QueryState;

  constructor({ targetId, queryState }: MovieHeaderProps) {
    super({ targetId });
    this.queryState = queryState;
  }

  protected getTemplate(): HTMLTemplate {
    return `
      <h1 id="movie-list-logo"><img src="${IMAGES.logo}" alt="MovieList 로고" /></h1>
      <div class="search-box">
          <form id="search-form">
            <input name="search-query" type="text" placeholder="검색" maxLength="${MOVIE_QUERY_MAX_LENGTH}"/>
            <button class="search-button">검색</button>
          </form>
      </div>
  `;
  }

  protected setEvent(): void {
    const $form = $("search-form");

    if ($form instanceof HTMLFormElement) {
      $form.addEventListener("submit", (event) =>
        this.onSearchMovieSubmit(event, $form)
      );
    }

    $("movie-list-logo")?.addEventListener(
      "click",
      this.onLogoClick.bind(this)
    );
  }

  private onSearchMovieSubmit(event: Event, form: HTMLFormElement): void {
    event.preventDefault();

    const searchQuery = form["search-query"].value;

    this.queryState.set(searchQuery);
  }

  private onLogoClick(): void {
    this.queryState.set("");

    const $searchForm = $("search-form");

    if ($searchForm instanceof HTMLFormElement) {
      $searchForm.reset();
    }
  }
}
