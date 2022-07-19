import { Name } from ".";

export default {
  title: "Name",
  component: Name,
  args: {
    name: "Teste",
  },
};

export const Template = (args) => {
  return <Name {...args} />;
};
