import { moduleMetadata } from '@storybook/angular-vite';
import type { Meta, StoryObj } from '@storybook/angular-vite';

import { NgBizListToolbarModule } from './list-toolbar.module';
import { ListToolbarComponent } from './list-toolbar.component';

const meta: Meta<ListToolbarComponent> = {
  title: 'Components/ListToolbar',
  tags: ['autodocs'],
  component: ListToolbarComponent,
  decorators: [
    moduleMetadata({
      imports: [NgBizListToolbarModule],
    }),
  ],
};

export default meta;

type Story = StoryObj<ListToolbarComponent>;

// Stories
export const Default: Story = {
};
