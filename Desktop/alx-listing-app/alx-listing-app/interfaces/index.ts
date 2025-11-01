export interface CardProps {
  image: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  onButtonClick: () => void;
}

export interface ButtonProps {
  text: string;
  onClick: () => void;
}
