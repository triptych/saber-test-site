
    export default [
      {
              path: "/posts/hello-world.html",
              meta: {
                __relative: '_posts/hello-world.md',
                __pageId: '6a862f23'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-hello-world-md" */ "/Users/awooldridge/MyHome/MyWork/saber/test-site/pages/_posts/hello-world.md?saberPage=6a862f23")
                
              }
            },
{
              path: "/posts/more-test.html",
              meta: {
                __relative: '_posts/more-test.md',
                __pageId: '0d07ea50'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-more-test-md" */ "/Users/awooldridge/MyHome/MyWork/saber/test-site/pages/_posts/more-test.md?saberPage=0d07ea50")
                
              }
            },
{
              path: "/posts/testing123.html",
              meta: {
                __relative: '_posts/testing123.md',
                __pageId: '0fc969a4'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-testing123-md" */ "/Users/awooldridge/MyHome/MyWork/saber/test-site/pages/_posts/testing123.md?saberPage=0fc969a4")
                
              }
            },
{
              path: "/about.html",
              meta: {
                __relative: 'about.md',
                __pageId: '071116de'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--about-md" */ "/Users/awooldridge/MyHome/MyWork/saber/test-site/pages/about.md?saberPage=071116de")
                
              }
            },
{
              path: "/",
              meta: {
                __relative: 'index.vue',
                __pageId: '0a6c7838'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--index-vue" */ "/Users/awooldridge/MyHome/MyWork/saber/test-site/pages/index.vue?saberPage=0a6c7838")
                
              }
            },
      // An addtional route to catch all other requests, i.e. 404 page
      {
        path: '*',
        name: 404,
        component: function () {
          return import(/* webpackChunkName: "404-page" */ "/Users/awooldridge/MyHome/MyWork/saber/test-site/node_modules/saber/vue-renderer/app/404.vue")
        }
      }
    ]