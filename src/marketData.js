import MiniChart from 'react-mini-chart';

export const marketData = [
    {
        iconUrl: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Bitcoin-BTC-icon.png',
        name: 'Bitcoin',
        ticker: 'BTC',
        price: 45000.3,
        volume: 5.4,
        chart: <MiniChart dataSet={[0, -20, 343, 49.3, -100, 200, 258]} strokeColor="#22C55E" />
    },
    {
        iconUrl: 'https://iconarchive.com/download/i109534/cjdowner/cryptocurrency-flat/Ethereum-ETH.ico',
        name: 'Ethereum',
        ticker: 'ETH',
        price: 4236.4,
        volume: -3.2,
        chart: <MiniChart dataSet={[160, -20, 343, 49.3, -100, 200, -78]} strokeColor="#FF6600" />
    },
    {
        iconUrl: 'https://cdn.freelogovectors.net/svg10/solana-logo-freelogovectors.net_.svg',
        name: 'Solana',
        ticker: 'SOL',
        price: 112.5,
        volume: -10.9,
        chart: <MiniChart dataSet={[0, -20, 60, 49.3, -80, 110, -53]} strokeColor="#FF6600" />
    },
    {
        iconUrl: 'https://cdn4.iconfinder.com/data/icons/crypto-currency-and-coin-2/256/cardano_ada-512.png',
        name: 'Cardano',
        ticker: 'ADA',
        price: 1.06,
        volume: 7.6,
        chart: <MiniChart dataSet={[0, 60, 169, 49.3, 90.4, 200, 126]} strokeColor="#22C55E" />
    },
    {
        iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/200x200/52.png',
        name: 'Ripple',
        ticker: 'XRP',
        price: 0.87,
        volume: -1.6,
        chart: <MiniChart dataSet={[0, -20, 150, 49.3, -110, -70, -30]} strokeColor="#FF6600" />
    }
];