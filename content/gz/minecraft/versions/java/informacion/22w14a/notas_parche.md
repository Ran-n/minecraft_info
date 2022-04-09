---
title: "Notas de versión"
date: 2022-04-05T21:55:25+02:00
#draft: true
author: 'Ran#'

toc: true
collapsible_toc: false

slug: 'notas'
aliases: [
    'notas_version',
    'patch_notes',
    'notes',
]

weight: 1
bookcase_cover_src: 'monochrome/cover/list.png'
bookcase_cover_src_dark: 'monochrome/cover/list_dark.png'

---

# 22w14a

<img src="/fotos_content/paisaxes/paisaxe2.jpg" />

---

Mangleiros! Ras temperadas! Bloques de lama! Máis mangleiros!
Hoxe, estamos estusiasmados de traervos a *snapshot* máis a-lama-da ata a data!

Tamén é certo que é a nosa única *snapshot* a-lama-da ata o día de hoxe, pero o importante é que o noso novo bioma, o pantano de mangleiro, está dispoñible para probar; xunto con outras características secundarias como a brúxula de recuperación e moitos máis beliscos técnicos.

Disfrutade!

## Novas características na 22w14a

- Engadida a renovación da arxila.
- Engadidos as mangleiros.
- Engadido o bioma do pantano de mangleiros.
- Engadido o fragmento de eco e a compás de recuperación.

## Renovación da arxila

Colocar unha estalactita dun bloque de lonxitude baixo un bloque de lama provocará que este se acabe convirtindo nun bloque de arxila.

## Mangleiros

Introducido un novo tipo de árbore adaptada á auga que se crea apoiandose nas súas raíces:

- Teñen probabilidade de xerar unha colmea.
- Medran a partir de propágulos de mangleiro.

## Compás de recuperación

Un novo obxecto que pode ser elaborado (*crafteado*) a partir de fragmentos de eco.
Os cales soamente se poden atopar nos cofres de cidades antigas.

- A diferenza dunha brúxula normal, esta apunta ó lugar onde o xogador morreu por última vez.
- Se non te atopas na dimensión da morte, ou inda non morriches, moverase aleatoriamente.
- Pode ser elaborada a partir dunha brúxula inicial rodeada por 8 fragmentos de eco.

## Cambios

O Gardián (*Warden*) agora enfadase con calquer *mob* que se choque contra el, non soamente os xogadores.

### Cambios técnicos

- CatType fields on enitites with type minecraft:cat have been replaced with variant, with numeric values being replaced with string ids (so, for example, 5 becomes minecraft:calico)
- Some mutually exclusive tests in entity predicate (player, fishing_hook, lightning_bolt and catType) have been collapsed to type_specific field
- Added item_delivered_to_player advancement trigger
- Added allay_drop_item_on_block advancement trigger

#### Predicados

##### Predicado de entidade

- player, fishing_hook, lightning_bolt and catType fields have been replaced with type_specific

- type_specific has field type (one of player, fishing_hook, lightning_bolt or cat) and same fields as removed fields

```
"lightning_bolt": {
    "blocks_set_on_fire": 0
}
```

```
"type_specific": {
    "type": "lightning",
    "blocks_set_on_fire": 0
}
```

- catType has been wrapped to match new format and now uses new cat variant names instead of texture names:

```
"catType": "minecraft:textures/entity/cat/british_shorthair.png"
```

```
"type_specific": {
    "type": "cat",
    "variant": "minecraft:british"
}
```


- New type_specific options:
    + frog has variant field matching frog variant (minecraft:warm, minecraft:temperate or minecraft:cold)
    + slime applies for slimes and magma creams, has size field matching slime size (smallest is 1)

## Avances

Removed field location from triggers location, slept_in_bed, hero_of_the_village and voluntary_exile - it was handled exactly the same as player.location.

### Novas deteccións

```
ITEM_DELIVERED_TO_PLAYER
```

- Triggered when an allay delivers an item to a player.
- Condicións:
    + player - a player for which this trigger runs

```
ALLAY_DROP_ITEM_ON_BLOCK
```

- Triggered when an allay drops an item on a block.
- Condicións:
    + player - a player for which this trigger runs
    + location - a predicate for the block that the item was dropped on
    + item - a predicate for the item that was dropped


## Bugs arranxados

- {{< mc-bug codigo="MC-207289" titulo="Sculk sensor wool occlusion has directional bias" >}}
- {{< mc-bug codigo="MC-207635" titulo="Sculk sensors react differently to wool occlusion depending on the global direction" >}}
- {{< mc-bug codigo="MC-249075" titulo="Sculk shrieker isn’t grouped with other sculk related blocks in the decorations tab of creative inventory" >}}
- {{< mc-bug codigo="MC-249122" titulo="block.sculk_catalyst.bloom has no subtitle" >}}
- {{< mc-bug codigo="MC-249254" titulo="Frogs eating named slimes or magma cubes isn’t logged in console" >}}
- {{< mc-bug codigo="MC-249384" titulo="Warden can create Light, barriers or structure voids particles when digging" >}}
- {{< mc-bug codigo="MC-249386" titulo="The entity shadows of wardens are too small in relation to the size of their models" >}}
- {{< mc-bug codigo="MC-249387" titulo="Warden’s digging sound is the same as its emerging sound" >}}
- {{< mc-bug codigo="MC-249400" titulo="The vertical movement of wardens when they’re in liquids is too sensitive" >}}
- {{< mc-bug codigo="MC-249401" titulo="Warden spawn egg isn’t alphabetized correctly" >}}
- {{< mc-bug codigo="MC-249415" titulo="Wardens won’t pathfind through lava even though they’re immune to it" >}}
- {{< mc-bug codigo="MC-249422" titulo="Some subtitles relating to the warden don’t contain possessive apostrophes where appropriate" >}}
- {{< mc-bug codigo="MC-249426" titulo="Angered wardens play the “warden takes notice angrily” sound when hit in survival on top of their hurt sound" >}}
- {{< mc-bug codigo="MC-249430" titulo="Wardens remember players in creative mode" >}}
- {{< mc-bug codigo="MC-249434" titulo="The warden indefinitely roars when attacked by multiple entities" >}}
- {{< mc-bug codigo="MC-249445" titulo="Activated sculk shriekers fail to summon the warden when broken" >}}
- {{< mc-bug codigo="MC-249447" titulo="Activated sculk shriekers fail to summon the warden if you run away" >}}
- {{< mc-bug codigo="MC-249451" titulo="Warden doesn’t appear in spawner" >}}
- {{< mc-bug codigo="MC-249455" titulo="“Not a string” appears in log when serializing angered Warden" >}}
- {{< mc-bug codigo="MC-249473" titulo="Some Warden sounds play in Peaceful difficulty" >}}
- {{< mc-bug codigo="MC-249476" titulo="Warden can spawn in water" >}}
- {{< mc-bug codigo="MC-249479" titulo="Wardens will attack their teammates" >}}
- {{< mc-bug codigo="MC-249499" titulo="Warden summoned with ‘Silent’ tag still plays heartbeat sounds" >}}
- {{< mc-bug codigo="MC-249504" titulo="The sounds of wardens groaning angrily aren’t controlled by the “Hostile Creatures” sound slider" >}}
- {{< mc-bug codigo="MC-249509" titulo="Warden is invisible for a split second when spawned in by spawner or spawn egg" >}}
- {{< mc-bug codigo="MC-249517" titulo="Warden doesn’t detect non-player mobs colliding with them" >}}
- {{< mc-bug codigo="MC-249526" titulo="Sculk shriekers are not activated when the player is riding something" >}}
- {{< mc-bug codigo="MC-249530" titulo="Warden’s hitbox shows up in peaceful difficulty" >}}
- {{< mc-bug codigo="MC-249531" titulo="Warden indefinitely roars when the attack target is invulnerable" >}}
- {{< mc-bug codigo="MC-249646" titulo="The warden sniffs excessively after killing a mob" >}}
- {{< mc-bug codigo="MC-249659" titulo="Sculk Catalyst and Sculk Veins only drop when broken by Silk Touch hoe" >}}
- {{< mc-bug codigo="MC-249664" titulo="Warden despawns when far away" >}}
- {{< mc-bug codigo="MC-249674" titulo="Wardens forget their targets on world reload" >}}
- {{< mc-bug codigo="MC-249712" titulo="Server hangs and game stops responding when loading a chunk containing a structure with an allay" >}}
- {{< mc-bug codigo="MC-249714" titulo="Z-fighting can be seen on the wings of allays during their death animation" >}}
- {{< mc-bug codigo="MC-249720" titulo="Allay’s wings are not attached to its body" >}}
- {{< mc-bug codigo="MC-249727" titulo="Wardens stop sensing vibrations after world reload" >}}
- {{< mc-bug codigo="MC-249728" titulo="Lava can generate in ancient cities and burn wool/make structures fly" >}}
- {{< mc-bug codigo="MC-249729" titulo="Z-fighting can be seen on the underside of allays’ heads" >}}
- {{< mc-bug codigo="MC-249751" titulo="Warden UV overlapping" >}}
- {{< mc-bug codigo="MC-249758" titulo="Z-fighting can be seen when the arms of allays intersect their bodies" >}}
- {{< mc-bug codigo="MC-249761" titulo="Trapdoor of Ice Box in Ancient Cities is by default open" >}}
- {{< mc-bug codigo="MC-249764" titulo="Second lamp in the centres of ancient cities is missing its sculk sensor" >}}
- {{< mc-bug codigo="MC-249768" titulo="entrance_path_5 can never generate" >}}
- {{< mc-bug codigo="MC-249769" titulo="Unused structures in ancient cities" >}}
- {{< mc-bug codigo="MC-249780" titulo="Blocks that require support can generate floating in ancient cities" >}}
- {{< mc-bug codigo="MC-249785" titulo="Warden can be pushed when emerging and digging" >}}
- {{< mc-bug codigo="MC-249800" titulo="Eating doesn’t activate redstone door in the Ancient City center" >}}
- {{< mc-bug codigo="MC-249816" titulo="Wardens hitbox doesn’t adjust when emerging and digging" >}}

## Obtención da *snapshot*

As *snapshots* están dispoñibles para Minecraft: Edición Java.
Para instalala, abre o lanzador de Minecraft e habilita as *snapshots* na pestana de "Instalacións".

**As *snapshots* poden corromper o teu mundo así que, por favor, realiza unha copia de seguridade e/ou utilizaas nunha carpeta distinta da usada usualmente para os teus mundos.**

Ficheiro jar multiplataforma:
[jar de servidor](https://launcher.mojang.com/v1/objects/5f48eea55c7fd1881d9c63835b15dfb5bbcd3a67/server.jar).
<!--[jar de servidor](/fichs_content/minecraft/versions/22w13/22w13_server.jar).-->

Reporta bugs aquí: [Traqueador de problemas de Minecraft](https://bugs.mojang.com/projects/MC/issues)

Queres dar as túas opinións?\
Dirixete á [nosa páxina web](https://aka.ms/JavaSnapshotFeedback?ref=minecraftnet) ou falanos no chat do noso [servidor de Discord oficial de Minecraft](https://discordapp.com/invite/minecraft).

---

Publicado: 2022/04/06\
Autor: Adrian Östergård\
Tradutor: Ran#

[Publicación orixinal](https://www.minecraft.net/en-us/article/minecraft-snapshot-22w14a)
