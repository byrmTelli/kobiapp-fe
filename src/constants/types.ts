interface SubPage {
  title: string;
  path: string;
  breadCrumb: string;
  element: React.ReactNode;
}

interface Page {
  isProtected?: boolean;
  rootPath: string;
  subPages?: SubPage[];
  layout: React.ReactNode;
}

export type { Page, SubPage };
