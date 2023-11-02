export function formatTemperatureValue(value: string | undefined): string {
  return value ? `${value} °C` : 'N/A';
}

export function formatWindValue(value: string | undefined): string {
  return value ? `${value} m/s` : 'N/A';
}

export function formatHumidityValue(value: string | undefined): string {
  return value ? `${value} %` : 'N/A';
}

export function formatRainValue(value: string | undefined): string {
  return value ? `${value} mm/h` : 'N/A';
}
