// 获取框架
const WebFramework = require('@midwayjs/koa').Framework;
const { Bootstrap: App } = require('@midwayjs/bootstrap');

module.exports = async () => {
  // 加载框架并执行
  await App.run();
  // 获取依赖注入容器
  const container = App.getApplicationContext();
  // 获取 koa framework
  const framework = container.get(WebFramework);
  // 返回 app 对象
  return framework.getApplication();
};
