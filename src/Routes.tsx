import { TopNews } from 'pages';
import React from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import { routes } from 'utils';

const RedirectToTopNews: React.FC<RouteComponentProps> = () => (
  <Redirect to={routes.topNews.path} />
);

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={'/'} render={RedirectToTopNews} />
      <Route path={routes.topNews.path} component={TopNews} />
    </Switch>
  );
};
