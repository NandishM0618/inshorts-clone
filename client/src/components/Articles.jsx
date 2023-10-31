import InfiniteScroll from "react-infinite-scroll-component";
import Article from "./Article";
import { getNews } from "../services/api";
import { useEffect, useState } from "react";
export default function Articles(params) {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(0);
  useEffect(() => {
    const dailyNews = async () => {
      const res = await getNews(page);
      // console.log(res.data);
      setNews([...new Set([...news, ...res.data])]);
    };
    dailyNews();
  }, [page]);

  useEffect(() => {
    console.log(news);
  }, [news]);
  return (
    <InfiniteScroll
      dataLength={news.length}
      next={() => setPage((page) => page + 1)}
      hasMore={true}
    >
      {news.map((article) => {
        return <Article article={article} />;
      })}
    </InfiniteScroll>
  );
}
