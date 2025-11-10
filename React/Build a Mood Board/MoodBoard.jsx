export const MoodBoardItem = ({ color, image, description }) => {
  return (
    <div className="mood-board-item" style={{ backgroundColor: color }}>
      <img src={image} alt="" className="mood-board-image" />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
};

export const MoodBoard = () => {
  const cards = [
    {
      id: 1,
      color: "grey",
      image: "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",
      description: "This is my first card in reack, let's go!",
    },
    {id: 2,
      color: "red",
      image: "https://cdn.freecodecamp.org/curriculum/labs/shore.jpg",
      description: "This is my second card in reack, let's go!",
    },
    {
id: 3,
      color: "blue",
      image: "https://cdn.freecodecamp.org/curriculum/labs/grass.jpg",
      description: "This is my third card in reack, let's go!",

    },
    
 
  ];
  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>

       <div className="mood-board">
        {cards.map((card) => (
          <MoodBoardItem
            key={card.id}
            color={card.color}
            image={card.image}
            description={card.description}
          />
        ))}
      </div>
      
    </div>
  );
};
