import { moduleMetadata } from '@storybook/angular-vite';
import type { Meta, StoryObj } from '@storybook/angular-vite';

import { NgBizNavListModule } from './nav-list.module';
import { NavListComponent } from './nav-list.component';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { NavItem } from './nav-item.type';

const demoItems: NavItem[] = [
  {
    id: 1,
    text: 'Home',
    emoji: '🏠',
    icon: 'home',
    route: '/home',
    children: [],
    color: 'red',
  },
  {
    id: 2,
    text: 'Inbox',
    icon: 'inbox',
    emoji: '📥',
    route: '/inbox',
    children: [],
    color: 'blue',
  },
  {
    id: 3,
    text: 'Configuration',
    icon: 'settings',
    emoji: '⚙️',
    route: '/config',
    color: 'orange',
    children: [
      {
        id: 4,
        text: 'Credentials',
        icon: 'key',
        emoji: '🔑',
        route: '/users',
        color: 'magenta',
        children: [],
      },
      {
        id: 5,
        text: 'Devices',
        icon: 'display_settings',
        emoji: '📺',
        route: '/roles',
        children: [],
        color: 'green',
      },
    ],
  },
];
const meta: Meta<NavListComponent> = {
  title: 'Components/NavList',
  tags: ['autodocs'],
  component: NavListComponent,
  decorators: [
    moduleMetadata({
      imports: [NgBizNavListModule, CommonModule, RouterTestingModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<NavListComponent>;

export const Default: Story = {
  args: {
    activeItemId: 1,
    items: demoItems,
  },
};

export const ItemTemplate: Story = {
  render: (args: Partial<NavListComponent>) => ({
    props: args,
    template: `
      <ngbiz-nav-list [activeItemId]="activeItemId" [items]="items">
        <ng-template #item let-item="item">
          <span>{{item.emoji}}</span><i style="color: {{item.color}}">{{ item.text }}</i>
        </ng-template>
      </ngbiz-nav-list>
    `,
  }),
  args: {
    activeItemId: 1,
    items: demoItems,
  },
};

export const ItemTexTemplate: Story = {
  render: (args: Partial<NavListComponent>) => ({
    props: args,
    template: `
      <ngbiz-nav-list [activeItemId]="activeItemId" [items]="items">
        <ng-template #itemText let-item="item">
          <i style="color: {{item.color}}">{{ item.text }}</i>
        </ng-template>
      </ngbiz-nav-list>
    `,
  }),
  args: {
    activeItemId: 1,
    items: demoItems,
  },
};

export const ItemIconTemplate: Story = {
  render: (args: Partial<NavListComponent>) => ({
    props: args,
    template: `
      <ngbiz-nav-list [activeItemId]="activeItemId" [items]="items">
        <ng-template #itemIcon let-item="item">
          <span>{{item.emoji}}</span>
        </ng-template>
      </ngbiz-nav-list>
    `,
  }),
  args: {
    activeItemId: 1,
    items: demoItems,
  },
};
