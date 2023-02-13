import { createCurrentUserHook, createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: '2022-01-12',
    useCdn: process.env.NODE_ENV === 'production',
    // useCdn: false,
    // token: process.env.SANITY_API_TOKEN, 
}

export const sanityClient = createClient(config);
// console.log(sanityClient)

export const urlFor = (source) => createImageUrlBuilder(config).image(source);