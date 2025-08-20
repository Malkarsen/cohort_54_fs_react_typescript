export interface FeedbackProps {
  onLike: () => void;
  like: number;
  onDislike: () => void;
  dislike: number;
  resetResults: () => void;
}
