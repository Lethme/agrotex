import { Injectable } from "@angular/core";
import { StyleStore } from './style.store';

declare var document: any;

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  private styles: any = {};

  constructor() {
    StyleStore.forEach((style: any) => {
      this.styles[style.name] = {
        loaded: false,
        src: style.src
      };
    });
  }

  load(...styles: Array<string>) {
    let promises: Array<any> = [];
    styles.forEach(style => promises.push(this.loadStyle(style)));
    return Promise.all(promises);
  }

  loadAll() {
    let promises: Array<any> = [];
    Object.keys(this.styles).forEach(style => {
      promises.push(this.loadStyle(style));
    });
    return Promise.all(promises);
  }

  loadStyle(name: string) {
    return new Promise((resolve, reject) => {
      //resolve if already loaded
      if (this.styles[name].loaded) {
        resolve({ style: name, loaded: true, status: 'Already Loaded' });
      }
      else {
        //load style
        let style = document.createElement('link');
        style.rel = 'stylesheet';
        style.href = this.styles[name].src;
        if (style.readyState) {  //IE
          style.onreadystatechange = () => {
            if (style.readyState === "loaded" || style.readyState === "complete") {
              style.onreadystatechange = null;
              this.styles[name].loaded = true;
              resolve({ style: name, loaded: true });
            }
          };
        } else {  //Others
          style.onload = () => {
            this.styles[name].loaded = true;
            resolve({ style: name, loaded: true });
          };
        }
        style.onerror = (error: any) => resolve({ style: name, loaded: false });
        document.getElementsByTagName('head')[0].appendChild(style);
      }
    });
  }
}