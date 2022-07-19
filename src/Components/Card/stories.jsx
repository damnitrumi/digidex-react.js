import { Card } from ".";

export default {
  title: "Card",
  component: Card,
  args: {
    img: "a.svg",
    altText: "Imagem do Digi",
    name: "Nome do Digi",
    level: "Level do Digi",
  },
};

export const Template = (args) => {
  return <Card {...args} />;
};
