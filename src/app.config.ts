const pages = ['pages/index/index'];
const color = '#282c34';

import { AppConfig as WechatAppConfig } from 'remax/wechat';
import { AppConfig as AlipayAppConfig } from 'remax/alipay';
import { AppConfig as ToutiaoAppConfig } from 'remax/toutiao';

export const wechat: WechatAppConfig = {
  pages,
  window: {
    navigationBarBackgroundColor: color,
    navigationBarTitleText: 'Remax One Wechat'
  }
};

export const alipay: AlipayAppConfig = {
  pages,
  window: {
    defaultTitle: 'Remax One Alipay',
    titleBarColor: color
  }
};

export const toutiao: ToutiaoAppConfig = {
  pages,
  window: {
    navigationBarTitleText: 'Remax One Toutiao',
    navigationBarBackgroundColor: color
  }
};
