/**
 * 创建静态资源文件脚本
 * d1y<chenhonzhou@gmail.com>
 */

const fs = require('fs')
const ghCDN = require('github-to-cdn')
const table = require('markdown-table');
const { execSync } = require('child_process');

/**
 * link: https://stackoverflow.com/a/10456644
 */
Object.defineProperty(Array.prototype, 'chunk', {
  value: function(chunkSize) {
    var array = this;
    return [].concat.apply([],
      array.map(function(elem, i) {
        return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
      })
    );
  }
});


/**
 * 创建静态文件
 * @param {String} path 路径
 */
const createCDNFile = (path)=> {
  return ghCDN({
    username: 'waifu-project',
    repo: '18comic-live',
    path
  })
}

/**
 * 创建预览的图片
 * @param {String} title 页面
 */
const createPreviewImg = (title)=> {
  return createCDNFile(`previews/${ title }.png`)
}

/**
 * 预览的所有图片
 */
const previews = fs.readdirSync('previews').map(item=> {
  const title = item.split('.')[0]
  return createPreviewImg(title)
})

// |    |            |   |
// |----------|:-------------:|------:|
// | ![](./design/1.jpg) |  ![](./design/2.jpg) |  ![](./design/3.jpg) |
// | ![](./design/4.jpg) |  ![](./design/5.jpg) |  ![](./design/6.jpg) |
// | ![](./design/7.jpg) |  ![](./design/8.jpg) |  ![](./design/9.jpg) |
// | ![](./design/10.jpg) |  ![](./design/11.jpg) |  ![](./design/12.jpg) |

/**
 * 打印`table`
 */
const printTable = ()=> {
  const len = 4
  const chunkList = previews.chunk(len)
  console.log(chunkList)
}

printTable()