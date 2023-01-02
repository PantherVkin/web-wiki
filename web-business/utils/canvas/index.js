function drawImg(ctx, url, x, y, w, h) {
  return new Promise((resolve, reject) => {
    var img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = url;
    img.onload = function () {
      resolve(img);
      ctx.beginPath();
      ctx.drawImage(img, x, y, w, h);
      ctx.save();
    };
  });
}

function drawText(context, size, bold, color, t, y, w, x = 0, align = `start`) {
  context.beginPath();
  var chr = (t + '').split('');
  var temp = '';
  var row = [];
  context.fillStyle = color;
  context.textBaseline = 'top';
  context.textAlign = align;
  for (var a = 0; a < chr.length; a++) {
    if (context.measureText(temp).width < w && context.measureText(temp + chr[a]).width <= w) {
      temp += chr[a];
    } else {
      row.push(temp);
      temp = chr[a];
    }
  }
  row.push(temp);
  for (var b = 0; b < row.length; b++) {
    if (/^[A-Za-z]+$/.test(row[b])) {
      context.font = bold + ' ' + (size + 5) + 'px ' + ' 黑体';
      context.fillText(row[b], x + 10, y + (b + 1) * 50);
    } else {
      context.font = bold + ' ' + size + 'px ' + ' 黑体';
      context.fillText(row[b], x, y + (b + 1) * 50);
    }
  }
}
