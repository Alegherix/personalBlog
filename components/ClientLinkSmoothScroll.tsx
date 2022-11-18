'use client';

import { usePathname, useRouter } from 'next/navigation';
import { FC } from 'react';

type ClientLinkSmoothScrollProps = {
  section: string;
};
export const ClientLinkSmoothScroll: FC<ClientLinkSmoothScrollProps> = ({
  section,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const redirectUrl = `${pathname}#${section}`;

  return <button onClick={() => router.replace(redirectUrl)}>{section}</button>;
};
