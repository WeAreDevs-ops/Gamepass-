import axios from 'axios';

export default async function handler(req, res) {
  const { userId } = req.query;

  if (!userId) return res.status(400).json({ error: 'Missing userId' });

  try {
    const response = await axios.get(`https://games.roblox.com/v1/users/${userId}/games`);
    const games = response.data.data;

    const gamepasses = [];

    for (const game of games) {
      const passesRes = await axios.get(`https://www.roblox.com/marketplace/game-pass-product-info?assetId=${game.rootPlaceId}`);
      const data = passesRes.data;

      if (data?.AssetId) {
        gamepasses.push({
          id: data.AssetId,
          name: data.Name,
          price: data.PriceInRobux,
          icon: data.IconImageAssetId ? `https://www.roblox.com/asset-thumbnail/image?assetId=${data.IconImageAssetId}&width=420&height=420&format=png` : '',
          gameName: game.name
        });
      }
    }

    res.status(200).json({ gamepasses });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch gamepasses' });
  }
}
