import { ReactNode } from "react";

type TRoute = {
  path: string;
  element: ReactNode;
};

type TuserPath = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TuserPath[];
};

export const routesGenerator = (items: TuserPath[]) => {
  const routes = items.reduce((acc: TRoute[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }

    if (item.children) {
      item.children.forEach((child) => {
        acc.push({
          path: child.path!, // ! mane not null assertion
          element: child.element,
        });
      });
    }

    return acc;
  }, []);

  return routes;
};
