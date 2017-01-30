/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/1.docs-introduction-what-you-get-from-junctions-1482f2e28778a84261cb.js","3db1fff5fdbd8a416eff2b98f84bc45b"],["/10.docs-basics-routes-52b4ffa55ca5840ebda6.js","a92e2e400ad943cc80f61e44414dc7ca"],["/11.docs-basics-locations-0e0f02278a453862fbe2.js","3dd3919ab5a7988db12fccdc9488cb22"],["/11722dfd0d09de3a50a506b0bcf75d49.png","11722dfd0d09de3a50a506b0bcf75d49"],["/12.docs-basics-links-368a5a691dd60fd5e936.js","628124d072bfb013288ebe4c60bd689d"],["/13.docs-basics-junctions-6ac07be8106f0f3c9dc7.js","3b04301b67064ca88e2e8903ced70b18"],["/14.docs-basics-example-contact-list-3c35439b3de998927a3e.js","e8b4c6a32d5d03767ac96e0a95e62666"],["/15.docs-basics-converting-locations-to-routes-0328ab0c63233d26165c.js","8610cffdcd8abf4b45c41fd85797c6ba"],["/16.docs-api-react-junctions-Router-c5c7f14deb7bf92ff5b5.js","48b9327efa7587823ba82c878ee737f7"],["/17.docs-api-react-junctions-Link-f2541dbdb06dcf9bc295.js","8ee130ec3137c0816ff101ef08fc997a"],["/18.docs-api-react-junctions-HistoryContext-ffcfc7d97466f91cb74b.js","33df6d07ae691fd06b8f77cd0fede993"],["/19.docs-api-junctions-routesMatch-2dbd9af703416bc6295f.js","22f66bc7fbab2c3fe4d0bb985b63cb60"],["/1dbb8572c4f6fc4bb3aac655920b5efe.png","1dbb8572c4f6fc4bb3aac655920b5efe"],["/2.docs-tutorial-1f4a8afedad643591705.js","8b9f08f06d21d6b77a139f82e7cb95db"],["/20.docs-api-junctions-locationsEqual-c21ee5593b5daa4c0e69.js","29518020634f92fb8c35fc480961a57d"],["/21.docs-api-junctions-createJunction-9cce569ce65467472d72.js","c4667cfa7b6277f02e3432e6ebba0bdb"],["/22.docs-api-junctions-createConverter-2f2708ec2db50e31d75a.js","df1dd5fd5d2ebcdc211d8eaa493b7ad2"],["/23.docs-api-junctions-Route-f26d8262ba40a263a88f.js","efeed958155580f7cf5b4db998026b3d"],["/24.docs-api-junctions-Location-3d35cee89601fa8a2ee1.js","4dd55f8203bf31989d5d1cf2c29fbfc7"],["/25.docs-api-junctions-Junction-cbc739fab39728102954.js","83bd4d33e5112d6bc74e086c1bb195b1"],["/26.docs-api-junctions-Converter-e00514f4ecd3d377234c.js","091180014188baf44198368a9fe53189"],["/27.docs-api-README-3a4aa61c90b144a6db27.js","6332992db30b29e9882a115d8ac63b58"],["/28.docs-advanced-contextual-links-e7484a482f77bcc932e9.js","1d87e7c518aa8533571ce5b76f6a9965"],["/29.docs-advanced-canonical-locations-0bd07eb0aad46dff68d0.js","6e5e6978d9b6f2b113cbc86c5e44331a"],["/3.docs-introduction-three-principles-a710611352a345e45c83.js","8fcd11bf71b74cbdca5e224b98db50ce"],["/30.docs-Glossary-603e12011eb87529ba98.js","3a3a4e3e73a9b2a54f24b1865de89de2"],["/31.README-7496cd9e61f8b7bd3c42.js","9f88838b7c398c77389d6919b758c25f"],["/4.examples-Raw-example-a3ad71e31e8725b39a36.js","3013f3f3ee9fb2f0f03963682aca2ad0"],["/5.examples-Basic-example-57a73c5ffc6eccba631c.js","3cebe53f919ba07a8647a670efa9c621"],["/6.examples-BaseLocation-example-14a34d3eb76ed51ae270.js","ae4dc29daf569865f13ee3663240e840"],["/63d8539be1b481ea13cd9ca3831fb00f.png","63d8539be1b481ea13cd9ca3831fb00f"],["/7.docs-introduction-motivation-5aa98d32d5e5fddd3725.js","854a3233450c915ce960261cced615b6"],["/8.docs-introduction-do-i-need-a-router-a488d60e6f220121b1f7.js","f119902a9cb350a03086a9f8bf32084f"],["/8ba7f97c02ca2df6a15fbd88f7e2e325.png","8ba7f97c02ca2df6a15fbd88f7e2e325"],["/9.docs-basics-the-screen-pattern-247ac01f7f3982bcbdfa.js","04e0212de500b6ac080e08961eb7b3cf"],["/android-chrome-192x192.png","e18f6fef7794cb579582c2512df32054"],["/android-chrome-256x256.png","efde49536de1c8d93b836a521b514705"],["/api/index.html","b9e4fbba74fbed9bfe102277e9561fcb"],["/api/junctions/Converter.html","ef02880224c310fa8ac4e8efe60af3db"],["/api/junctions/Junction.html","984f2b2e92dd6c67d759b9ce8c705b36"],["/api/junctions/Location.html","c5733663d22cea2d8d457e3161745db2"],["/api/junctions/Route.html","0ad60c15df394e5295ccfc1928e941c8"],["/api/junctions/createConverter.html","ce1cd4502cccac1fbb332f0b373d884e"],["/api/junctions/createJunction.html","7197b25ada6e6c82f4d97b9171624f06"],["/api/junctions/index.html","2a4b1b92700e52ff7daaaab21b398be6"],["/api/junctions/locationsEqual.html","f066286ccff1e605bada74dd435c10ef"],["/api/junctions/routesMatch.html","9a7cdc47b07e1f0f1dba8c37f18378f7"],["/api/react-junctions/HistoryContext.html","cfdad3706c001ef60e7dd5329bfcf78f"],["/api/react-junctions/Link.html","c48746256c40e2d50fb22d14955cf8d6"],["/api/react-junctions/Router.html","2b884dbb252d32331b036a6d19f69ceb"],["/api/react-junctions/index.html","45b14c2ccda4c53a1837fdc73d9e2a97"],["/apple-touch-icon.png","dcc1b0471dd1849f622a48faa3dd513c"],["/b8f87f8fdb4c0295e0cfd931310d74ba.png","b8f87f8fdb4c0295e0cfd931310d74ba"],["/bd55958691efe2c63307fd7b7d5a3644.png","bd55958691efe2c63307fd7b7d5a3644"],["/bfbc35eea5e663cfe6dd5726eb76a791.png","bfbc35eea5e663cfe6dd5726eb76a791"],["/entry-ac5d4f904bf29d4b6899.js","afc078474e3d56d0c75e465bdbbd0434"],["/examples/BaseLocation.html","3c5cd1377a4a3d1ad7793be6b3f5526b"],["/examples/Basic.html","2402b79c941d3e3b9b2db72903cff079"],["/examples/Raw.html","4e0a7dd062158145395c15547b9e0c30"],["/examples/index.html","c53b8659b453466f5334b1b2500097b3"],["/favicon-16x16.png","bd62b4a682eef331edb5d356b85e5968"],["/favicon-32x32.png","952c40b76b2cd77038f7000175d57340"],["/guide/Glossary.html","e001144aa610063805093066195b58ce"],["/guide/advanced/canonical-locations.html","7939f93b4b73247dc7ddc7e174d6cf3e"],["/guide/advanced/contextual-links.html","af28282ce79381c8810496f7189daf77"],["/guide/advanced/index.html","b916dc8cba80f5b64621d86faad797f2"],["/guide/basics/converting-locations-to-routes.html","d80c7ade1134a4f7f2a08f21f8fcf3e0"],["/guide/basics/example-contact-list.html","330544480cc30b742e4f978507aa91c6"],["/guide/basics/index.html","7bb97eb1c4f79cb0bcc4e555769745e0"],["/guide/basics/junctions.html","6ee51e27925b864dc85e87417abb9ee2"],["/guide/basics/links.html","856a79ad1bd00f19b28467bfd7d8f3aa"],["/guide/basics/locations.html","049d2176ef07e741444c07a7cd3e063b"],["/guide/basics/routes.html","a4e8fc73022fd2c7d8ef8ae80277fe01"],["/guide/basics/the-screen-pattern.html","be26c1d12354ee92c4d6f769bfb9391b"],["/guide/index.html","4f292d8db5500cffec83cd2f7b7668d5"],["/guide/introduction/do-i-need-a-router.html","f25d60e2446037d4c56f3c3008ca63ff"],["/guide/introduction/index.html","89c90f0c599e1dabc4b93f8678902de2"],["/guide/introduction/motivation.html","1e0330d34d9893538a14565e1bb8b996"],["/guide/introduction/three-principles.html","cae7c537e5bcd6b91e30d365ef1fdc25"],["/guide/introduction/what-you-get-from-junctions.html","8ef687065a4fe72b8f50f5889339deed"],["/index.html","e9d24d23db7cd1d1e84bd07d79912ce6"],["/logo.png","961b06f3b3d5f0ae5ec3180ed3ab1b47"],["/mstile-150x150.png","c8a7d0a7b404d18fdb0f3de4e633b031"],["/safari-pinned-tab.svg","9be604babe23f64093515648f24bdd78"],["/site-bundle.f5f606b3.css","f5f606b373ddb7365207693117919b47"],["/vendor-69ac9439b09be6398a32.js","92dd2f35d6c83191e1889658bad5ef95"]];
var cacheName = 'sw-precache-v2--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {
                credentials: 'same-origin',
                redirect: 'follow'
              }));
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







