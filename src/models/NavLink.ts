import type React from 'react';

interface Icon {
  value: React.ReactElement;
}

export interface NavLink {
  href: string;
  label: string;
  asButton?: boolean;
  icon?: Icon;
}
