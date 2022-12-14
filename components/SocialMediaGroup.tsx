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
    <div className="flex gap-4  items-center justify-center mt-6 mb-5">
      {socialMedia.map((social) => (
        <button className="textTransform p-2" key={social.name}>
          <a href={social.url}>
            <social.icon size={20} />
          </a>
        </button>
      ))}
    </div>
  );
};
