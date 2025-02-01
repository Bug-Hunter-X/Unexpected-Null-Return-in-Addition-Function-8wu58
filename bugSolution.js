function foo(a, b) {
  // Use nullish coalescing to provide default values
  a ??= 0; 
  b ??= 0; 
  return a + b;
}