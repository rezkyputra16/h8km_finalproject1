// Komponen CardItem
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveThisNews } from "../features/news-slice";
import {
  BsBookmark,
  BsBookmarkFill,
  BsHeart,
  BsHeartFill,
} from "react-icons/bs";
import { formatDate } from "../utils/index";
import LazyLoad from "react-lazy-load";

const CardItem = ({ news }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const dispatch = useDispatch();

  const isNewsSaved = (news) => {
    const savedNews = useSelector((state) => state.news.data.saved);
    return savedNews.some((item) => item.title === news.title);
  };

  function handleBookmark() {
    setIsBookmarked(!isBookmarked);
    dispatch(saveThisNews(news));
  }

  function handleLike() {
    setIsLiked(!isLiked);
    // dispatch(saveThisLike(news));
  }

  return (
    <article className="cardItem bg-card rounded-lg border border-2 shadow-lg">
      <div>
        <a href={news.url} target="_blank" rel="noreferrer">
          <LazyLoad>
            <img
              className="rounded-t-lg w-full h-48 object-cover"
              src={news?.urlToImage}
              alt={news?.title}
            />
          </LazyLoad>
          <p className="text-sm text-gray-600 p-2">
            <span className="mr-2">{news?.author}</span> •{" "}
            <span>{formatDate(news?.publishedAt)}</span>
          </p>
          <div className="p-4">
            <h3 className="text-2xl line-clamp-3 font-bold">{news?.title}</h3>
            <p className="text-sm mt-2 line-clamp-5 text-gray-500">
              {news?.description}
            </p>
          </div>
        </a>
      </div>
      <footer className="p-4 border-t border-gray-200">
        <div className="flex justify-end">
          <button onClick={handleBookmark} className="text-primary">
            {isNewsSaved(news) ? (
              <BsBookmarkFill size={25} />
            ) : (
              <BsBookmark size={25} />
            )}
          </button>
        </div>
      </footer>
    </article>
  );
};

export default CardItem;
