# Bekk mdx-deck tema

Et gjenbrukbart Bekk-tema for [`mdx-deck`](https://github.com/jxnblk/mdx-deck)!

## Bruk

For å få Bekk-tema må du først installere det:

```sh
npm install selbekk/mdx-deck-theme
```

Det er ikke lagt ut som en npm-pakke enda (siden vi fortsatt er i
alfatesting-stadiet), men det kommer nok snart.

Så, øverst i `deck.mdx`-fila di, legg til følgende linje:

```js
export { lightTheme as theme } from '@bekk/mdx-deck-theme';
```

eller, for en litt mørkere tone:

```js
export { darkTheme as theme } from '@bekk/mdx-deck-theme';
```

### Fonter

Hvis du ikke har merkevarefontene installert på din datamaskin, må du laste dem
ned og installere dem selv. De finner du på
[merkevare.bekk.no](https://merkevare.bekk.no) (krever innlogging).

Fontene heter Newzald og DIN OT.

### Komponenter og konstanter

I tillegg til det grunnleggende temaet har man noen ekstra verktøy man kan bruke
om man skulle trenge dem:

### `CenteredLayout`

Brukes for å sentrere innholdet i begge retninger. Må ligge i en egen
`.mdx`-fil, grunnet en begrensning med MDX-selv.

```js
import { CenteredLayout } from '@bekk/mdx-deck-theme';
export default CenteredLayout;
```

### `SmallText`

Brukes under tabeller eller figurer for å beskrive hva som står over

#### Eksempel

```js
import { SmallText } from '@bekk/mdx-deck-theme'

<SmallText>En beskrivelse av hva som står over</SmallText>
```

### `fonts`

Et objekt med de forskjellige font-familiene vi bruker, om man trenger å gjøre
tilpasninger.

```js
import { fonts } from '@bekk/mdx-deck-theme'`

const css = {
  h1: {
    fontFamily: fonts.serif,
  },
  h2: {
    fontFamily: fonts.sansSerif,
  }
};
```

### `colors`

Et objekt med de forskjellige fargene i merkevareprofilen vår, om man trenger å
gjøre tilpasninger til temaet, eller lage sine egne komponenter.

Følgende nøkler er tilgjengelig:

```js
import { colors } from '@bekk/mdx-deck-theme'`

const profileColors = [
  colors.white,
  colors.greyLighter,
  colors.greyLight,
  colors.greyMedium,
  colors.greyDark,
  colors.greyDarker,
  colors.black,
  colors.red,
  colors.orange,
  colors.purple,
  colors.green,
  colors.darkBlue,
  colors.greyBlue,
  colors.lightBlue,
]
```

---

For instruksjoner rundt `mdx-deck`, eller `mdx` generelt, ta en titt på de
respektive dokumentasjonssidene:

[`mdx`-spesifikasjonen](https://mdxjs.com/)
[`mdx-deck`-dokumentasjon](https://github.com/jxnblk/mdx-deck)

## Utvikling

Hvis du vil utvikle litt på dette temaet, kan du starte det slik:

```sh
npm start
```

Du finner eksempel-decket i `deck.mdx`.
