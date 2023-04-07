const alpha = (color: string, opacity: number) =>
{
  const hexOpacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + hexOpacity.toString(16).toUpperCase();
};

export { alpha };