'use strict';

module.exports = exports;

/**
 * @param whaler
 */
async function exports (whaler) {

    whaler.before('create:container', async ctx => {
        const vars = await whaler.emit('vars', {});
        if (vars['SSH_AUTH_SOCK']) {
            const volumesFrom = ctx.options['HostConfig']['VolumesFrom'] || [];
            volumesFrom.push('whaler_ssh');
            ctx.options['HostConfig']['VolumesFrom'] = volumesFrom;
        }
    });

}
