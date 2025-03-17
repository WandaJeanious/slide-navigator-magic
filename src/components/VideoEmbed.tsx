
interface VideoEmbedProps {
  title: string;
  placeholder?: boolean;
}

export const VideoEmbed = ({ title, placeholder = true }: VideoEmbedProps) => {
  if (placeholder) {
    return (
      <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-200 animate-pulse-gentle flex flex-col items-center justify-center">
        <div className="text-4xl text-gray-400 mb-2">▶️</div>
        <p className="text-gray-600 font-medium">{title}</p>
        <p className="text-gray-500 text-sm mt-2">Video placeholder</p>
      </div>
    );
  }
  
  // If you have an actual video to embed, you can add the iframe here
  return (
    <div className="relative w-full aspect-video">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video URL
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoEmbed;
