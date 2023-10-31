"use strict";

import colors from "@radix-ui/colors";
import convertColor from "color-convert";
import parseColor from "color-parse";
import assert from "node:assert";

const makeScale = (scale) => {
  return Object.entries(scale).map(([_key, value]) => {
    if (value.length === "#RRGGBBAA".length) {
      return value.toLowerCase();
    }

    if (value.length === "#RRGGBB".length) {
      return `${value}ff`.toLowerCase();
    }

    if (value.startsWith("rgba(")) {
      const color = parseColor(value);
      assert.ok(color.space === "rgb");

      const {
        values: [r, g, b],
        alpha: a,
      } = color;

      const hexColor = convertColor.rgb.hex(r, g, b);

      const alphaNibble = Math.round(a * 255)
        .toString(16)
        .padStart(2, "0");

      return `#${hexColor}${alphaNibble}`.toLowerCase();
    }

    throw new Error(`Unexpected color format: '${value}'.`);
  });
};

const makeAlphaScale = (scale) => {
  return makeScale(scale);
};

const main = (() => {
  const scales = [
    {
      name: "Gray",
      light: makeScale(colors.gray),
      lightAlpha: makeAlphaScale(colors.grayA),
      dark: makeScale(colors.grayDark),
      darkAlpha: makeAlphaScale(colors.grayDarkA),
    },
    {
      name: "Mauve",
      light: makeScale(colors.mauve),
      lightAlpha: makeAlphaScale(colors.mauveA),
      dark: makeScale(colors.mauveDark),
      darkAlpha: makeAlphaScale(colors.mauveDarkA),
    },
    {
      name: "Slate",
      light: makeScale(colors.slate),
      lightAlpha: makeAlphaScale(colors.slateA),
      dark: makeScale(colors.slateDark),
      darkAlpha: makeAlphaScale(colors.slateDarkA),
    },
    {
      name: "Sage",
      light: makeScale(colors.sage),
      lightAlpha: makeAlphaScale(colors.sageA),
      dark: makeScale(colors.sageDark),
      darkAlpha: makeAlphaScale(colors.sageDarkA),
    },
    {
      name: "Olive",
      light: makeScale(colors.olive),
      lightAlpha: makeAlphaScale(colors.oliveA),
      dark: makeScale(colors.oliveDark),
      darkAlpha: makeAlphaScale(colors.oliveDarkA),
    },
    {
      name: "Sand",
      light: makeScale(colors.sand),
      lightAlpha: makeAlphaScale(colors.sandA),
      dark: makeScale(colors.sandDark),
      darkAlpha: makeAlphaScale(colors.sandDarkA),
    },
    {
      name: "Gold",
      light: makeScale(colors.gold),
      lightAlpha: makeAlphaScale(colors.goldA),
      dark: makeScale(colors.goldDark),
      darkAlpha: makeAlphaScale(colors.goldDarkA),
    },
    {
      name: "Bronze",
      light: makeScale(colors.bronze),
      lightAlpha: makeAlphaScale(colors.bronzeA),
      dark: makeScale(colors.bronzeDark),
      darkAlpha: makeAlphaScale(colors.bronzeDarkA),
    },
    {
      name: "Brown",
      light: makeScale(colors.brown),
      lightAlpha: makeAlphaScale(colors.brownA),
      dark: makeScale(colors.brownDark),
      darkAlpha: makeAlphaScale(colors.brownDarkA),
    },
    {
      name: "Yellow",
      light: makeScale(colors.yellow),
      lightAlpha: makeAlphaScale(colors.yellowA),
      dark: makeScale(colors.yellowDark),
      darkAlpha: makeAlphaScale(colors.yellowDarkA),
    },
    {
      name: "Amber",
      light: makeScale(colors.amber),
      lightAlpha: makeAlphaScale(colors.amberA),
      dark: makeScale(colors.amberDark),
      darkAlpha: makeAlphaScale(colors.amberDarkA),
    },
    {
      name: "Orange",
      light: makeScale(colors.orange),
      lightAlpha: makeAlphaScale(colors.orangeA),
      dark: makeScale(colors.orangeDark),
      darkAlpha: makeAlphaScale(colors.orangeDarkA),
    },
    {
      name: "Tomato",
      light: makeScale(colors.tomato),
      lightAlpha: makeAlphaScale(colors.tomatoA),
      dark: makeScale(colors.tomatoDark),
      darkAlpha: makeAlphaScale(colors.tomatoDarkA),
    },
    {
      name: "Red",
      light: makeScale(colors.red),
      lightAlpha: makeAlphaScale(colors.redA),
      dark: makeScale(colors.redDark),
      darkAlpha: makeAlphaScale(colors.redDarkA),
    },
    {
      name: "Ruby",
      light: makeScale(colors.ruby),
      lightAlpha: makeAlphaScale(colors.rubyA),
      dark: makeScale(colors.rubyDark),
      darkAlpha: makeAlphaScale(colors.rubyDarkA),
    },
    {
      name: "Crimson",
      light: makeScale(colors.crimson),
      lightAlpha: makeAlphaScale(colors.crimsonA),
      dark: makeScale(colors.crimsonDark),
      darkAlpha: makeAlphaScale(colors.crimsonDarkA),
    },
    {
      name: "Pink",
      light: makeScale(colors.pink),
      lightAlpha: makeAlphaScale(colors.pinkA),
      dark: makeScale(colors.pinkDark),
      darkAlpha: makeAlphaScale(colors.pinkDarkA),
    },
    {
      name: "Plum",
      light: makeScale(colors.plum),
      lightAlpha: makeAlphaScale(colors.plumA),
      dark: makeScale(colors.plumDark),
      darkAlpha: makeAlphaScale(colors.plumDarkA),
    },
    {
      name: "Purple",
      light: makeScale(colors.purple),
      lightAlpha: makeAlphaScale(colors.purpleA),
      dark: makeScale(colors.purpleDark),
      darkAlpha: makeAlphaScale(colors.purpleDarkA),
    },
    {
      name: "Violet",
      light: makeScale(colors.violet),
      lightAlpha: makeAlphaScale(colors.violetA),
      dark: makeScale(colors.violetDark),
      darkAlpha: makeAlphaScale(colors.violetDarkA),
    },
    {
      name: "Iris",
      light: makeScale(colors.iris),
      lightAlpha: makeAlphaScale(colors.irisA),
      dark: makeScale(colors.irisDark),
      darkAlpha: makeAlphaScale(colors.irisDarkA),
    },
    {
      name: "Indigo",
      light: makeScale(colors.indigo),
      lightAlpha: makeAlphaScale(colors.indigoA),
      dark: makeScale(colors.indigoDark),
      darkAlpha: makeAlphaScale(colors.indigoDarkA),
    },
    {
      name: "Blue",
      light: makeScale(colors.blue),
      lightAlpha: makeAlphaScale(colors.blueA),
      dark: makeScale(colors.blueDark),
      darkAlpha: makeAlphaScale(colors.blueDarkA),
    },
    {
      name: "Cyan",
      light: makeScale(colors.cyan),
      lightAlpha: makeAlphaScale(colors.cyanA),
      dark: makeScale(colors.cyanDark),
      darkAlpha: makeAlphaScale(colors.cyanDarkA),
    },
    {
      name: "Teal",
      light: makeScale(colors.teal),
      lightAlpha: makeAlphaScale(colors.tealA),
      dark: makeScale(colors.tealDark),
      darkAlpha: makeAlphaScale(colors.tealDarkA),
    },
    {
      name: "Jade",
      light: makeScale(colors.jade),
      lightAlpha: makeAlphaScale(colors.jadeA),
      dark: makeScale(colors.jadeDark),
      darkAlpha: makeAlphaScale(colors.jadeDarkA),
    },
    {
      name: "Green",
      light: makeScale(colors.green),
      lightAlpha: makeAlphaScale(colors.greenA),
      dark: makeScale(colors.greenDark),
      darkAlpha: makeAlphaScale(colors.greenDarkA),
    },
    {
      name: "Grass",
      light: makeScale(colors.grass),
      lightAlpha: makeAlphaScale(colors.grassA),
      dark: makeScale(colors.grassDark),
      darkAlpha: makeAlphaScale(colors.grassDarkA),
    },
    {
      name: "Lime",
      light: makeScale(colors.lime),
      lightAlpha: makeAlphaScale(colors.limeA),
      dark: makeScale(colors.limeDark),
      darkAlpha: makeAlphaScale(colors.limeDarkA),
    },
    {
      name: "Mint",
      light: makeScale(colors.mint),
      lightAlpha: makeAlphaScale(colors.mintA),
      dark: makeScale(colors.mintDark),
      darkAlpha: makeAlphaScale(colors.mintDarkA),
    },
    {
      name: "Sky",
      light: makeScale(colors.sky),
      lightAlpha: makeAlphaScale(colors.skyA),
      dark: makeScale(colors.skyDark),
      darkAlpha: makeAlphaScale(colors.skyDarkA),
    },
    {
      name: "Black",
      light: makeAlphaScale(colors.blackA),
      lightAlpha: makeAlphaScale(colors.blackA),
      dark: makeAlphaScale(colors.blackA),
      darkAlpha: makeAlphaScale(colors.blackA),
    },
    {
      name: "White",
      light: makeAlphaScale(colors.whiteA),
      lightAlpha: makeAlphaScale(colors.whiteA),
      dark: makeAlphaScale(colors.whiteA),
      darkAlpha: makeAlphaScale(colors.whiteA),
    },
  ];

  const quote = (value) => `"${value}"`;

  for (const scale of scales) {
    const decl = `
      fn ${scale.name.toLowerCase()}() -> DefaultColorScaleSet {
          DefaultColorScaleSet {
              scale: ColorScaleName::${scale.name},
              light: [${scale.light.map(quote).join(",\n")}],
              light_alpha: [${scale.lightAlpha.map(quote).join(",\n")}],
              dark: [${scale.dark.map(quote).join(",\n")}],
              dark_alpha: [${scale.darkAlpha.map(quote).join(",\n")}],
          }
      }
      `;

    console.log(decl);
  }
})();
