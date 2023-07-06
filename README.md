# 👋 Introduction

The purpose of this application is to analyze and address issues on the [Kings League](https://kingsleague.pro/) page using various techniques.

## Image Size

It is worth noticing that image size can have a huge impact on page performance. Optimizing the images is important to avoid long page load times.

![Kings League images load](/assets/kl-images-load.png)

On the official website, some images are larger than 100KB. While this is not necessarily a bad thing, in this case, these images can be optimized to significantly reduce their size.

The approach I took to reduce the load size of images is to use tools like [squoosh.app](https://squoosh.app/editor), [Cloudinary](https://cloudinary.com/), and [SvgOMG](https://jakearchibald.github.io/svgomg/).

For images **(.jpg)** that are loaded and exceed 70KB in size, I converted them into **.webp** format.

![Convert image to webp example](/assets/convert-image-to-webp-example.png)

On the other hand, I reduced the size of all the **.svg** by using [SvgOMG](https://jakearchibald.github.io/svgomg/).

![Kings League header](/assets/kl-header.png)

In fact, the above section loads **320 KB** of images. With proper optimization, it can be reduced less than **120KB**, which is an incredible performance improvement.

<div>
  <p>Before</p>
  <img src="./assets/kl-images-size.png" alt="Image 1">
</div>

<div>
  <p>After</p>
  <img src="./assets/kl-clone-images-size.png" alt="Image 2">
</div>

### Serve WebP images

Even though WebP is a modern image format that provides superior lossless and lossy compression for web images, it is not supported by older browsers.

If your application needs to support older browsers, I encourage you to look at the following posts:

[Serve WebP images - web.dev](https://web.dev/serve-images-webp/#serve-webp-images)
