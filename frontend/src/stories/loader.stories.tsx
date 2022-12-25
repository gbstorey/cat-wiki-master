import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {CircleLoader} from "react-spinners";

export default {
    title: 'UI/loader',
    component: CircleLoader,
    argTypes: {
        size: {
            control: 'size'
        },
        color: {
            control: 'color'
        },
    }
} as ComponentMeta<typeof CircleLoader>

const Template: ComponentStory<typeof CircleLoader> = () => <CircleLoader/>

export const Primary = Template.bind({});


