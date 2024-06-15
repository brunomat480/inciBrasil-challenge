export default function delay(ms = 1000) {
  return new Promise((resolver) => setTimeout(resolver, ms));
}
