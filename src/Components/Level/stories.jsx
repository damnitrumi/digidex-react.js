import { Level } from ".";

export default {
  title: "Level",
  component: Level,
  args: {
    level: "Testes",
  },
};

export const Template = (args) => {
  return <Level {...args} />;
};
