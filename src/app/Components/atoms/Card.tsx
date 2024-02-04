import Image from "next/image";

type Props = {
  image: string;
  heading: string;
};
function Card({ image, heading }: Props) {
  return (
    <div className="card">
      <Image src={image || "/assets/MovieCover.jpg"} alt={heading} width={100} height={100} />
      <h3>{heading}</h3>
    </div>
  );
}

export default Card;
