// filepath: src/utils/collision.js
export const checkCollision = (obj1, obj2) => {
  // AABB collision detection for 3D objects
  const dx = Math.abs(obj1.position.x - obj2.position.x);
  const dy = Math.abs(obj1.position.y - obj2.position.y);
  const dz = Math.abs(obj1.position.z - obj2.position.z);
  
  const halfWidth1 = obj1.size.x / 2;
  const halfHeight1 = obj1.size.y / 2;
  const halfDepth1 = obj1.size.z / 2;
  
  const halfWidth2 = obj2.size.x / 2;
  const halfHeight2 = obj2.size.y / 2;
  const halfDepth2 = obj2.size.z / 2;
  
  return dx < (halfWidth1 + halfWidth2) &&
         dy < (halfHeight1 + halfHeight2) &&
         dz < (halfDepth1 + halfDepth2);
};