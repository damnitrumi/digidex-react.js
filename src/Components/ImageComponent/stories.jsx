import { ImageComponent } from ".";

export default {
  title: "ImageComponent",
  component: ImageComponent,
  args: {
    img: "a.svg",
  },
};

export const Template = (args) => {
  return <ImageComponent {...args} />;
};
