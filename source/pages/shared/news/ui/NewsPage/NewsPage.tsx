
import { NewsData } from '~widgets/news/ui';

interface INewsPage {}

export function NewsPage({}: INewsPage) {
  return (
    <>
      <div className="grid place-items-center lg:max-h-[100vh] min-h-[calc(100vh-228px)]">
        <NewsData />
      </div>
    </>
  );
}
