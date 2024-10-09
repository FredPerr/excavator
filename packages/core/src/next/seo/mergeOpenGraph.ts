import { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import { deepMerge } from "payload"



type OpenGraph = Metadata['openGraph']

export function createOpenGraphMeta(publicServerURL: string, og: OpenGraph = {}): OpenGraph {

  if (!publicServerURL)
    throw new Error("publicServerURL is required to generate OpenGraph images")

  const base: OpenGraph = {
    type: "website",
    images: [
      {
        url: publicServerURL + "/open-graph.jpg",
      },
    ],
    siteName: "Website Name",
    title: "Website Title",
  }

  return deepMerge<OpenGraph, OpenGraph>(base, og)
}
