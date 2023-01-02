'use strict';

/**
 * task-content service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::task-content.task-content');
