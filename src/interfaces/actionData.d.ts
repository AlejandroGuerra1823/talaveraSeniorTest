interface ActionData {
  stocks: Stock[];
}

interface Stock {
  symbol: string;
  name: string;
  price: number;
  daily_change: number;
}
