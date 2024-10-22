export const RichText = ({ html }: { html: string }) => {
  if (!html) {
    console.warn("No HTML provided to RichText component. Nothing will be rendered.")
    return null
  }

  return <div className="flex w-full justify-center">
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      className="prose prose-sm lg:prose-base xl:prose-lg prose-slate max-w-none"
    />
  </div>
}

