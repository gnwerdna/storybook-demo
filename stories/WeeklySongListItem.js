import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info'; 
import WeeklySongListItem from '../src/components/WeeklySongListItem';

storiesOf('WeeklySongListItem', module)
    .add(
        'default',
        () => (
            <WeeklySongListItem
                order="01"
                title="Anh Đang Ở Đâu Đấy Anh"
                singer="Hương Giang"
                viewCount={3416}
            />
        )
    );