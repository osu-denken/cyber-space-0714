// filepath: src/utils/collision.js
export const checkCollision = (obj1, obj2) => {
  return (
    obj1.position.x < obj2.position.x + obj2.size.x &&
    obj1.position.x + obj1.size.x > obj2.position.x &&
    obj1.position.y < obj2.position.y + obj2.size.y &&
    obj1.position.y + obj1.size.y > obj2.position.y &&
    obj1.position.z < obj2.position.z + obj2.size.z &&
    obj1.position.z + obj1.size.z > obj2.position.z
  );
};