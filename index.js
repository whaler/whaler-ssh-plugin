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
            volumesFrom.push(process.env.WHALER_SSH_PLUGIN_CONTAINER || 'ssh-agent');
            ctx.options['HostConfig']['VolumesFrom'] = volumesFrom;
        }
    });

}
