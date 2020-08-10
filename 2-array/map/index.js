export default function numberMapToWord(collection) {
  // TODO 3: 在这里写实现代码
  return collection.map(item => {
    switch (item) {
      case 1:
        return 'a';
      case 2:
        return 'b';
      case 3:
        return 'c';
      case 4:
        return 'd';
      case 5:
        return 'e';
      default:
        return '';
    }
  });
}
