import { Separator } from 'components/Separator';
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

export const Footer: React.FC = () => {
  return (
    <footer className="text-xs sticky bottom-0 flex flex-col items-center justify-center ">
      <Separator />
      <div className="flex gap-12 items-center justify-center mt-6 mb-5">
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
      <p className="mb-4 text-dark-700">
        © Alegherix 2022. All rights reserved.
      </p>
    </footer>
  );
};
