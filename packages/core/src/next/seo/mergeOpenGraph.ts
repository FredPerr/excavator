import { Metadata } from "next/dist/lib/metadata/types/metadata-interface"

const defaultOpenGraph: Metadata["openGraph"] = {
  type: "website",
  images: [
    {
      url: process.env.NEXT_PUBLIC_SERVER_URL
        ? `${process.env.NEXT_PUBLIC_SERVER_URL}/open-graph.jpg`
        : "/open-graph.jpg",
    },
  ],
  siteName: "Excavator",
  title: "Excavator PayloadCMS plugin",
}

export const mergeOpenGraph = (og?: Metadata["openGraph"]) => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
