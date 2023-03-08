import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Title from "./Title";

export default {
  title: "Components/Title",
  component: Title
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Basic = Template.bind({});
Basic.args = { text: "제목입니다." };