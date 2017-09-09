// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';
// import { refreshToken, clearToken } from 'utils/tokenManager';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

// const localStorage = global.window.localStorage;
// const checkNRefreshToken = (isDashboard) => (nextState, replace, callback) => {
//   if (window.location.pathname !== '/') localStorage.pre_url = window.location.href;
//   if (localStorage.access_token && Date.now() < localStorage.expires_in - 12600000) {
//     if (isDashboard) {
//       replace('/list');
//     }
//     return callback();
//   }
//
//   if (!localStorage.refresh_token) {
//     if (window.location.pathname !== '/') {
//       replace('/');
//     }
//     callback();
//   } else {
//     refreshToken()
//       .then(() => {
//         if (isDashboard) {
//           replace('/list');
//         }
//         callback();
//       })
//       .catch((error) => {
//         localStorage.refresh_token_error = localStorage.refresh_token;
//         clearToken();
//         replace('/');
//         callback(error);
//       });
//   }
//   return true;
// };

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: 'video',
      name: 'video',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/VideoPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: 'videovr',
      name: 'videolive',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/VideoVrPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: 'videolive',
      name: 'videolive',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/VideoLivePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: 'videovrlive',
      name: 'videolive',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/VideoVrLive'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
