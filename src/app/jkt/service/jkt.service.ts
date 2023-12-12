import { useQuery } from 'react-query';
import axios from 'axios';
import * as cheerio from 'cheerio';

interface Member {
  name: string;
  src: string;
}

const getMembers = async (): Promise<Member[]> => {
  const baseUrl = 'https://jkt48.com';
  const url = `${baseUrl}/member/list?lang=id`;

  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const memberList: Member[] = [];

    // Define a function to get the source from different elements
    const getSrcFromElement = (element: cheerio.Element): string => {
      const possibleSelectors = [
        '.entry-member__src',
        '.entry-member img',
        '.entry-member__avatar img',
      ];
      for (const selector of possibleSelectors) {
        const src = $(element).find(selector).attr('src');
        if (src) {
          return src;
        }
      }
      return '';
    };

    // Assuming each member is within a container with class 'entry-member'
    $('.entry-member').each((index, element) => {
      const name: string = $(element)
        .find('.entry-member__name')
        .text()
        .trim()
        .replace(/([a-z])([A-Z])/g, '$1 $2');

      const src: string = getSrcFromElement(element);
      memberList.push({ name, src: baseUrl.concat(src) });
    });

    return memberList;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching or scraping data: ${error.message}`);
    } else {
      throw new Error(`Error fetching or scraping data: ${error}`);
    }
  }
};

const useGetMembers = () => {
  return useQuery('membersData', getMembers, {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 30,
  });
};

export default useGetMembers;
