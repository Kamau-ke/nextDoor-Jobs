// src/utils/dateUtils.js
 function getTime(timestampString) {
  const date = new Date(timestampString);
  const seconds = Math.floor((new Date() - date) / 1000);
  
  // Check for months (approximating a month as 30.44 days)
  let interval = Math.floor(seconds / (86400 * 30.44));
  if (interval >= 1) {
    return interval === 1 ? "1 month ago" : interval + " months ago";
  }
  
  // Check for days
  interval = Math.floor(seconds / 86400);
  if (interval >= 1) {
    return interval === 1 ? "1 day ago" : interval + " days ago";
  }
  
  // Check for hours
  interval = Math.floor(seconds / 3600);
  if (interval >= 1) {
    return interval === 1 ? "1 hour ago" : interval + " hours ago";
  }
  
  // Check for minutes
  interval = Math.floor(seconds / 60);
  if (interval >= 1) {
    return interval === 1 ? "1 minute ago" : interval + " minutes ago";
  }
  
  return "Just now";
}

export default getTime