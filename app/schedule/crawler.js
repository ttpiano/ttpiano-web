/**
 * ttpiano-web/crawler
 *
 * @Author xianqian.rxq@alibaba-inc.com
 * @Date 2018-03-24
 * @copyright(c) Alibaba Group Holding Limited.
 */

const Crawler = require('crawler');

module.exports = {
  schedule: {
    interval: '6h',
    type: 'worker', // 指定所有的 worker 都需要执行
		immediate: true,
  },
  async task(ctx) {
    ctx.logger.info('task:crawler starting');

    await ctx.service.crawler.directAndSave2DB();

		ctx.logger.info('task:crawler completed');
  },
};
