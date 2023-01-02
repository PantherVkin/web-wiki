import html2canvas from 'html2canvas';

function download(code, fileName) {
  var aLink = document.createElement('a'); // 创建一个a标签
  var blob = base64ToBlob(code);
  var event = document.createEvent('HTMLEvents');
  event.initEvent('click', true, true);
  aLink.download = fileName;
  aLink.href = URL.createObjectURL(blob);
  aLink.click();
}

// base64转Blob对象
function base64ToBlob(code) {
  var parts = code.split(';base64,');
  var contentType = parts[0].split(':')[1];
  var raw = window.atob(parts[1]);
  var rawLength = raw.length;
  var uint8Array = new Uint8Array(rawLength);
  for (var i = 0; i < rawLength; i++) {
    uint8Array[i] = raw.charCodeAt(i);
  }
  return new Blob([uint8Array], {type: contentType});
}

// 绘制图片
export default async function createPicture(imgDom, fileName) {
  // 解决转换出来的图片的清晰度问题
  const canvas = document.createElement('canvas');
  // 获取父级的宽高
  const width = parseInt(window.getComputedStyle(imgDom).width);
  const height = parseInt(window.getComputedStyle(imgDom).height);
  // 定义放大倍数，可支持小数
  let scale = 2;
  // 设定 canvas 元素属性宽高为 DOM 节点宽高 * 像素比
  canvas.width = width * scale;
  canvas.height = height * scale;
  // 设定 canvas css宽高为 DOM 节点宽高
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';
  // 获取content,设置scale
  canvas.getContext('2d');
  // 拿到目标dom调用一下html2canvas方法就能生成canvas对象了
  const oCanvas = await html2canvas(imgDom, {
    canvas: canvas,
    scale: scale,
    useCORS: true // 开启跨域设置，需要后台设置cors
  });
  let dataURL = oCanvas.toDataURL('image/png'); // toDataURL函数生成img标签的可用数据  图片格式转成 base64
  download(dataURL, fileName);
}

// https://juejin.cn/post/6844904090888044551
// https://juejin.cn/post/7075211593427976229
