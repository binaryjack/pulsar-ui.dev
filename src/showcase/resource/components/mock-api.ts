/**
 * Mock API Functions
 * Simulated API calls for resource demos
 */

let networkRequestCount = 0;

export async function fetchUser(id: number) {
  const requestId = ++networkRequestCount;
  console.log(`[Network #${requestId}] Fetching user ${id}`);
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        name: `User ${id}`,
        email: `user${id}@example.com`,
        avatar: `https://i.pravatar.cc/150?img=${id}`,
        requestId,
      });
    }, 1000);
  });
}

export async function fetchPosts(userId: number) {
  const requestId = ++networkRequestCount;
  console.log(`[Network #${requestId}] Fetching posts for user ${userId}`);
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: 'Getting Started with Pulsar', likes: 42 },
        { id: 2, title: 'Reactive Programming', likes: 38 },
      ]);
    }, 800);
  });
}

export async function fetchActivity(userId: number) {
  const requestId = ++networkRequestCount;
  console.log(`[Network #${requestId}] Fetching activity for user ${userId}`);
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        totalPosts: 156,
        followers: 1240,
        following: 89,
      });
    }, 600);
  });
}

export async function loadImage(index: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`https://picsum.photos/300/200?random=${index}`);
    }, Math.random() * 500 + 300);
  });
}

export function resetNetworkCount() {
  networkRequestCount = 0;
}
