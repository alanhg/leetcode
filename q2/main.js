/**
 * semver版本号比较大小
 * @param versionNum1
 * @param versionNum2
 * @returns {boolean}
 * 1表示versionNum1大
 * -1表示versionNum2大
 * 0表示versionNum1==versionNum2
 */
function compareVersion(versionNum1, versionNum2) {
  versionNum1 = versionNum1.replace(/[^\d.]/, '');
  versionNum2 = versionNum2.replace(/[^\d.]/, '');
  const versionArr1 = versionNum1.split('.');
  const versionArr2 = versionNum2.split('.');
  if (versionArr1.length !== versionArr2.length) {
    throw new Error('version format is not same');
  }
  for (let i = 0; i < versionArr1.length; i++) {
    if (versionArr1[i] !== versionArr2[i]) {
      return versionArr1[i] > versionArr2[i] ? 1 : -1;
    }
    if (i === versionArr1.length - 1) {
      if (versionArr1[i] === versionArr2[i]) {
        return 0;
      }
      return versionArr1[i] > versionArr2[i] ? 1 : -1;
    }
  }
}

console.log(compareVersion('v1.0.2', '1.1.2'));
console.log(compareVersion('v1.1.2', '1.1.2'));
console.log(compareVersion('v2.0.2', '1.1.2'));

