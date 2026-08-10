import { moduleMetadata } from '@storybook/angular-vite';
import type { Meta, StoryObj } from '@storybook/angular-vite';

import { NgBizViewContentWrapperModule } from './view-content-wrapper.module';
import { ViewContentWrapperComponent } from './view-content-wrapper.component';

const meta: Meta<ViewContentWrapperComponent> = {
  title: 'Components/ViewContentWrapper',
  tags: ['autodocs'],
  component: ViewContentWrapperComponent,
  decorators: [
    moduleMetadata({
      imports: [NgBizViewContentWrapperModule],
    }),
  ],
};

export default meta;

type Story = StoryObj<ViewContentWrapperComponent>;

// Stories
export const Default: Story = {
};
