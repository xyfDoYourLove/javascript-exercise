export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  const oooldPerson = collection.filter(item => item.age > 10 && item.age <= 20);
  return oooldPerson[0].name;
}
