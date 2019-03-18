// 求最大值
const arr = [1, 2, 3, 4, 4, 3];
console.log(arr.reduce((pre, cur) => (pre > cur ? pre : cur)));

// 求和
console.log(arr.reduce((pre, cur) => (pre + cur)));


// 计算数组中每个元素出现的次数
const arrTime = arr.reduce((pre, cur) => {
  const tempCur = cur;
  const tempPre = pre;
  if (cur in pre) {
    tempPre[tempCur] += 1;
    return tempPre;
  }
  tempPre[tempCur] = 1;
  return tempPre;
}, {});
console.log(arrTime);

// 数组去重
const noRepeat = arr.reduce((pre, cur) => {
  if (pre.includes(cur)) {
    return pre;
  }
  pre.push(cur);
  return pre;
}, []);
console.log(noRepeat);

const Aimarr = [1, 2, [3, [4, 5, [6]]]];
// 二维甚至多维数组化为一为数组
const linArr = (needArr) => {
  const newArr = needArr.reduce((pre, cur) => {
    if (cur instanceof Array) {
      return pre.concat(linArr(cur));
    }
    return pre.concat(cur);
  }, []);
  return newArr;
};
console.log(linArr(Aimarr));


// 数组属性计算
const objArr = [
  { a: 1 },
  { a: 2 },
  { a: 3 },
];
const objSum = objArr.reduce((pre, cur) => pre + cur.a, 0);
console.log(objSum);

// 下划线转驼峰
const str = 'my_name_is_sxq';
const result = str.split('_').reduce((pre, cur) => pre + cur.charAt(0).toUpperCase() + cur.slice(1));
console.log(result);
