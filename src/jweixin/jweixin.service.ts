import { LoaderService } from './../utils/loader.service';
import { Injectable } from '@angular/core';

@Injectable()
export class JWeiXinService {
    
    constructor(private load: LoaderService) {}

    /**
     * 懒加载jweixin.js
     * 
     * @param {string} [jweixinUrl] 默认：//res.wx.qq.com/open/js/jweixin-1.2.0.js
     */
    get(jweixinUrl?: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.load.loadScript(jweixinUrl || '//res.wx.qq.com/open/js/jweixin-1.2.0.js').then((res) => {
                resolve(res.loaded === true);
            }).catch(() => {
                reject();
            });
        });
    }

}
