import { defineConfig } from '@umijs/max'
import routes from './routes';
export default defineConfig({
  history: { type: 'hash' },
  /**
   * @name 开启 hash 模式
   * @description 让 build 之后的产物包含 hash 后缀。通常用于增量发布和避免浏览器加载缓存。
   * @doc https://umijs.org/docs/api/config#hash
   */
  hash: true,
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '平台设计',
  },

  routes
});

