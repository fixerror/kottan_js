/**
 * Created by FixError on 02.06.2016.
 */
"use strict"
const ph = require('posthtml'),
    fs = require('fs'),
    inputFileHtml = fs.readFileSync('index.html', 'utf-8').split('\n');
const cutJS = /js-/
const cutBootstrap = /col-(xs|sm|md|lg)?(-\w+)?-\d+/i


const pluginCutBootstrap  = tree =>{
    tree.match({tag: true, attrs: { class: true}}, node => {
        if(cutBootstrap.test(node.attrs.class)){
           node.attrs.class=node.attrs.class.replace(cutBootstrap, ' ').trim();
        }
        if(cutJS.test(node.attrs.class)){
            node.attrs.class = node.attrs.class.replace(cutJS, 'data-').trim();
        }
        return node;
        })
};

ph([pluginCutBootstrap]).process(inputFileHtml).then(res=> {
    fs.writeFileSync('rezult.html', res.html, 'utf-8')
});

