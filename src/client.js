import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = SanityClient({
    projectId: '9oaupyuw',
    dataset: 'production',
    apiVersion: '2021-10-21',
    useCdn: true,
    token: 'skd0CDYdsSddJ92DStB43QhYWf6JCDmKgRGeFiCNoseUN7fasyhGLC5wlvhYBgIRHcVO8G9OP55sZ2EkLs0WDOX4t0RIZ6Sb1wDfq8TRq4CEJe50tSyCjVPYhGk1bMEbI543IWDsRVHdOUOgxAajTLxGjv342WfNNawg4TkxnkrtKk04MvgX', 
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);