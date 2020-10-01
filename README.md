Lazy loading is an old technique to optimize web applications as well as on mobile apps. The thing is pretty straight forward - do not render things if they are not viewed or required at that moment. So, for example, if we have a list of posts to show, we should initially only render what’s on the viewport. That means the rest of the elements will be rendered later on demand (when they’re in the viewport or about to be on the viewport).

## Why Lazy Loading?

Most of the times our users don’t see the whole web page, at least in the beginning. In these cases, rendering those components not only harms our application’s performance but also wastes a lot of resources (especially when they have images or similar data hungry contents). 

So, loading or rendering those components on demand seems to be a more efficient decision. It can improve the application’s performance, and at the same time can save us a lot of resources.

## How?

This react application give you a taste of lazy loading.

## Before LazyLoad

```js
  const renderFunc = () => {
    if (data.length !== 0) {
      return (
        data.map(post => {
          return <Post key={post.id} {...post} />
        })
      )
    } else {
      return <div />
    }
  }
```

Using `react-lazyload` is pretty straight forward, just wrap the component with `<LazyLoad …> … </LazyLoad>`. Here we are using a placeholder component `<Loading />` that’ll show `Loading...` till the component has loaded. We can also set the effective `height` and `offset` of the `LazyLoad` component.

```js
  const renderFunc = () => {
    return (
      data.map(post => {
        return (
          <LazyLoad key={post.id}
            height={100}
            offset={[-100, 100]}
            placeholder={<Loading />}>
            <Post key={post.id} {...post} />
          </LazyLoad>
        )
      })
    )
  }
```

Now we can scroll the list with our inspect element open to see how these components change when they come near to the viewport then gets rendered and the placeholder gets replaced by actual contents.

And we are done, for now, our LazyLoad is working with all its grace. That was pretty easy!!!