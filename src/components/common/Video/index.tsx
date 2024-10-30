interface VideoProps {
  videoId: string
}

export function Video({ videoId }: VideoProps) {
  return (
    <iframe
      width="493"
      height="350"
      // src={`https://www.youtube.com/embed/${videoId}?rel=0`}
      src={`https://drive.google.com/file/d/${videoId}/preview`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      className="rounded-[0.625rem] w-full lg:w-[500px]"
      allowFullScreen
    />
  )
}
