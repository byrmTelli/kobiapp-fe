interface SubPage {
  title: string;
  path: string;
  breadCrumb: string;
  element: React.ReactNode;
  isProtected?: boolean;
}

interface Page {
  isProtected?: boolean;
  rootPath: string;
  subPages?: SubPage[];
  layout: React.ReactNode;
  title: string;
}

export type { Page, SubPage };
