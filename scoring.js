// import _groupBy from 'lodash.groupby';
'use strict';
const _ = require('lodash');
const list = require('./scoring_list.json')

const groupedStatuses = _.groupBy(list, 'status.code');
// console.log(groupedStatuses);

const STATUS_TYPES = {
    all: 'all',
    rework: 'rework',
    verification: 'verification',
    signing: 'signing',
    activated: 'activated',
    activating: 'activating',
    declined: 'declined',
    duplicate: 'duplicate',
    draft_new: 'draft_new',
    draft_declined: 'draft_declined',
    unknown: 'unknown'
};

const STATUSES = [
    {
        text: 'Все',
        value: STATUS_TYPES.all,
        order: 0
    },
    {
        value: STATUS_TYPES.rework,
        order: 1
    },
    {
        value: STATUS_TYPES.verification,
        order: 2
    },
    {
        value: STATUS_TYPES.signing,
        order: 3
    },
    {
        value: STATUS_TYPES.activating,
        order: 4
    },
    {
        value: STATUS_TYPES.activated,
        order: 5
    },
    {
        value: STATUS_TYPES.declined,
        order: 6
    },
    {
        value: STATUS_TYPES.duplicate,
        order: 7
    },
    {
        value: STATUS_TYPES.draft_new,
        order: 8
    },
    {
        value: STATUS_TYPES.draft_declined,
        order: 9
    },
    {
        value: STATUS_TYPES.unknown,
        order: 10
    }
];

let filterStatuses = groupedStatuses && STATUSES.map((item) => {
    let order = groupedStatuses[item.value];
    return order && {
        text: order[0].status.name,
        value: item.value,
        order: item.order
    };
});

console.log(filterStatuses);

const filterStatuses2 = filterStatuses.filter(item => item);
console.log(filterStatuses2);