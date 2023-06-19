import { RouteObject } from 'react-router-dom';
import ExamsPage from '../pages/Exams';
import GrammarPage from '../pages/Grammar';
import HomePage from '../pages/Home';
import VocabulariesPage from '../pages/Vocabularies';
import RootLayout from '../pages/layouts/Root';
import UserProfilePage from '../pages/UserProfile';
import AnalyzeResults from '../pages/UserProfile/AnalyzeResults';
import UserInformation from '../pages/UserProfile/UserInformation';
import Collection from '../pages/UserProfile/Collection';
import Reminder from '../pages/UserProfile/Reminder';

export const mainRoute: RouteObject = {
  path: '/',
  element: <RootLayout />,
  children: [
    {
      index: true,
      element: <HomePage />,
    },
    {
      path: 'exams',
      element: <ExamsPage />,
    },
    {
      path: 'vocabularies',
      element: <VocabulariesPage />,
    },
    {
      path: 'grammar',
      element: <GrammarPage />,
    },
    {
      path: 'users',
      element: <UserProfilePage />,
      children: [
        {
          path: 'analyzeResults',
          element: <AnalyzeResults />
        },
        {
          path: 'userInformation',
          element: <UserInformation />
        },
        {
          path: 'collection',
          element: <Collection />
        },
        {
          path: 'reminder',
          element: <Reminder />
        }
      ]
    },
  ],
};
