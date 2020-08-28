/**
 * get waifu
 * create by d1y<chenhonzhou@gmail.com>
 */

// const got = require('got')
// const cheerio = require('cheerio')
const fs = require('fs')
const path = require('path')

const url = "https://mywaifulist.moe/popular"
const waifuPath = path.join(__dirname, "./waifu")
const dataJSON = path.join(waifuPath, "data.json")

;(async ()=> {
  try {
    // const data = await got(url)
    // const body = data.body || ""
    // const $ = cheerio.load(body)
    // const waifuer = Array.from($('.bg-white.shadow.w-full.rounded.border-b-0.overflow-hidden'))
    // const result = waifuer.map(item=> {
    //   const scrope = $(item).find('.bg-white.opacity-75.p-2.rounded-r.text-black.font-semibold').text().trim() || ""
    //   // https://stackoverflow.com/a/14013171
    //   let pic = $($(item).find('.relative.waifu-card-vertical-image')[0]).css('background-image')
    //   pic = pic.slice(4, -1).replace(/"/g, "")
    //   const name = $(item).find('.text-black.no-underline').text().trim() || ""
    //   return {
    //     scrope,
    //     pic,
    //     name
    //   }
    // })
    const result = [
      {
        "scrope": "1st",
        "pic": "https://thicc.mywaifulist.moe/waifus/319/ab7fbcc2f1f4afb6a9a3d052087789e93bb9c1f97a3ba32b6c14c5ca569d32e7_thumb.jpeg",
        "name": "Megumin"
      },
      {
        "scrope": "2nd",
        "pic": "https://thicc.mywaifulist.moe/waifus/41/f86c51782fb88102efb351e51a8d770695694210a3ce63ddcef360a9b2ce98af_thumb.jpeg",
        "name": "Rem"
      },
      {
        "scrope": "3rd",
        "pic": "https://thicc.mywaifulist.moe/waifus/91/3f66214a6b3a413a6643441b1b0be9bbf6f64c3fffcf34ad98e4a2b6b5050727_thumb.jpeg",
        "name": "Holo"
      },
      {
        "scrope": "4th",
        "pic": "https://thicc.mywaifulist.moe/waifus/35/351a666c587e5c97eaa1163590afe50b91925c4e819d23dd50b0490eae807e24_thumb.jpeg",
        "name": "Makise Kurisu"
      },
      {
        "scrope": "5th",
        "pic": "https://thicc.mywaifulist.moe/waifus/58/28d92f7d4d2e16cfec7d4a7523c90ca5f28908e9ee1b67148bd71e4e998f5a9c_thumb.jpeg",
        "name": "Asuna Yuuki"
      },
      {
        "scrope": "6th",
        "pic": "https://thicc.mywaifulist.moe/waifus/554/bd320a06a7b1b3b7f44e980a4c8e1ac8a975e575465915f1f13f60efe1108c3f_thumb.jpeg",
        "name": "Aqua"
      },
      {
        "scrope": "7th",
        "pic": "https://thicc.mywaifulist.moe/waifus/54/b19652debd811944fe022c8ea3c2233c5d959b3d263a753bc1181ef4a30b0567_thumb.jpeg",
        "name": "Emilia"
      },
      {
        "scrope": "8th",
        "pic": "https://thicc.mywaifulist.moe/waifus/583/a9a67e58fcc7225711e4063c12050aa8958ebe9c0b4418418d02bd773b6df813_thumb.jpeg",
        "name": "2B"
      },
      {
        "scrope": "9th",
        "pic": "https://thicc.mywaifulist.moe/waifus/555/3e2b944014ecd5681777194128ad5dec40b8eb29839adcc81af6aa57f2d014c9_thumb.png",
        "name": "Tohru"
      },
      {
        "scrope": "10th",
        "pic": "https://thicc.mywaifulist.moe/waifus/255/10bbfebc8cb042179e0f1a9d68e29711253a75c1922f8cde4967451e068839d2_thumb.jpeg",
        "name": "Shinobu Oshino"
      },
      {
        "scrope": "11th",
        "pic": "https://thicc.mywaifulist.moe/waifus/194/e6e3b025cdd1c754e51edaba53056da167b449e432ddf7a6b66a117e469ad2d4_thumb.jpeg",
        "name": "Tsuyu Asui"
      },
      {
        "scrope": "12th",
        "pic": "https://thicc.mywaifulist.moe/waifus/558/bd31674885dbc9dd4aa1fb2a161088887ef39ae15569507906dcde1d0d47cb5d_thumb.jpeg",
        "name": "Ochaco Uraraka"
      },
      {
        "scrope": "13th",
        "pic": "https://thicc.mywaifulist.moe/waifus/465/27e78f451d26ab64c34b4a7d47235090efc67425a087b077412a6b937011cff0_thumb.png",
        "name": "Dustiness Ford Lalatina"
      },
      {
        "scrope": "14th",
        "pic": "https://thicc.mywaifulist.moe/waifus/9215/15eda4244f824075c15e88a8d41229e36b39960e284b82758063efcdbe61c7a5_thumb.jpeg",
        "name": "Zero Two"
      },
      {
        "scrope": "15th",
        "pic": "https://thicc.mywaifulist.moe/waifus/497/c404863b9ee8cfc06a7b0c008f1abee095747b6ac5f3c48588807ffc869bf193_thumb.jpeg",
        "name": "Kanna Kamui"
      },
      {
        "scrope": "16th",
        "pic": "https://thicc.mywaifulist.moe/waifus/106/94da5e87c3dcc9eb3db018b815d067bed46f63f16a7e12357cafa1b530ce1c1a_thumb.jpeg",
        "name": "Rin Tohsaka"
      },
      {
        "scrope": "17th",
        "pic": "https://thicc.mywaifulist.moe/waifus/3/2cae3d081306cd2c1c585a1a06dcf847e3b4f1fa5713bcdc315b29f3b44e7214_thumb.png",
        "name": "Artoria Pendragon"
      },
      {
        "scrope": "18th",
        "pic": "https://thicc.mywaifulist.moe/waifus/560/6e71e94810bf4d65b6f1d795fddea9c76391b05681118c223d6042a4f1f70cc2_thumb.jpeg",
        "name": "Hachikuji Mayoi"
      },
      {
        "scrope": "19th",
        "pic": "https://thicc.mywaifulist.moe/waifus/262/1289a42d80717ce4fb0767ddc6c2a19cae5b897d4efe8260401aaacdba166f6e_thumb.jpeg",
        "name": "Hitagi Senjougahara"
      },
      {
        "scrope": "20th",
        "pic": "https://thicc.mywaifulist.moe/waifus/685/fc87ebfc3f1dc859ae62260b22c8eca126c4bf72951842d0f45a7d21b11655ba_thumb.png",
        "name": "Tamamo-no-Mae"
      }
    ]
    fs.writeFileSync(dataJSON, JSON.stringify(result))
  } catch (error) {
    throw new Error(error)
  }
})()