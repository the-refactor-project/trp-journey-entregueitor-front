import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import "./Loading.css";

const Loading: React.FC = () => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  if (!isFetching && !isMutating) {
    return null;
  }

  return (
    <div className="loading-container">
      <div className="loader"></div>
    </div>
  );
};

export default Loading;
