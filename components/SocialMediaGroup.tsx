import React from 'react';
import {
  IconBrandTwitter,
  IconBrandGithub,
  IconBrandYoutube,
  TablerIcon,
} from '@tabler/icons';

type SocialMedia = {
  name: string;
  url: string;
  icon: TablerIcon;
};

const socialMedia: SocialMedia[] = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/alegherix',
    icon: IconBrandTwitter,
  },
  {
    name: 'Github',
    url: 'https://www.github.com/alegherix',
    icon: IconBrandGithub,
  },
  {
    name: 'Youtube',
    url: 'https://www.youtube.com/channel/UCDk7JqZdFp2PUpOW0Ea2KKA',
    icon: IconBrandYoutube,
  },
];
export const SocialMediaGroup: React.FC = () => {
  return (
    <div className="flex gap-4 lg:gap-12 items-center justify-center mt-6 mb-5">
      {socialMedia.map((social) => (
        <a
          className="transitionAnimation hover:text-heaven-500 p-2"
          href={social.url}
          key={social.name}
        >
          <social.icon size={20} />
        </a>
      ))}
    </div>
  );
};
