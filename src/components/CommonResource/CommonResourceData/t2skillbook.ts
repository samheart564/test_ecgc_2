import type { ResourceProps } from "./types"

const T2SkillBookData: ResourceProps = {
  name: "T2 Skill Book",
  rarity: 3,
  image: "materials/unknown_t2_book.png",
  wikiLink: "https://azurlane.koumakan.jp/wiki/Living_Area#Tactical_Class",
  drops: {
    academy: {
      found: true,
      locations: [
        {
          name: "Commissions",
          wikiLink: "https://azurlane.koumakan.jp/wiki/Commissions",
          quantity: { amount: "RNG", timeFrame: null },
        },
      ],
      checkMark: {
        color: "sand",
        mark: "check",
      },
    },
    dailyRaid: {
      found: true,
      locations: [
        {
          name: "Advance Mission",
          wikiLink:
            "https://azurlane.koumakan.jp/wiki/Daily_Raid#Advance_Mission",
          quantity: { amount: "RNG", timeFrame: "daily" },
          notes: "Lv.25+",
        },
      ],
      checkMark: {
        color: "green",
        mark: "check",
        optimal: true,
      },
    },
    generalShop: {
      found: true,
      locations: [
        {
          name: "General Shop",
          wikiLink: "https://azurlane.koumakan.jp/wiki/Shops#General_Shop",
          quantity: { amount: 1, timeFrame: "cycle" },
          notes: "RNG",
        },
      ],
      checkMark: {
        color: "sand",
        mark: "check",
      },
    },
    guildShop: {
      found: true,
      locations: [
        {
          name: "Guild Shop",
          wikiLink: "https://azurlane.koumakan.jp/wiki/Shops#Guild_Shop",
          quantity: { amount: 3, timeFrame: "cycle" },
          notes: "RNG",
        },
      ],
      checkMark: {
        color: "sand",
        mark: "check",
      },
    },
    medalShop: {
      found: true,
      locations: [
        {
          name: "Medal Shop",
          wikiLink: "https://azurlane.koumakan.jp/wiki/Shops#Medal_Shop",
          quantity: { amount: 18, timeFrame: "monthly" },
          notes: "6 Each"
        },
      ],
      checkMark: {
        color: "green",
        mark: "check",
        optimal: true,
      },
    },
  },
  total: {
    bimonthly: "N/A",
    monthly: "N/A",
    weekly: "N/A",
    daily: "N/A",
  },
  notes: "<b>Not a concern.</b>",
}

export default T2SkillBookData