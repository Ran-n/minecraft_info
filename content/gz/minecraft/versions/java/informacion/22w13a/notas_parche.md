---
title: "Notas de versión"
date: 2022-04-05T21:55:25+02:00
#draft: true
author: 'Ran#'

toc: true
collapsible_toc: true

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

# 22w13a

<img src="/fotos_content/mobs/allay/allay1.webp" />

---

Allay, the mob that nobody is really sure how to pronounce, is now entering the latest Minecraft: Java Edition snapshot.
Along with our new shiny blue friend, we've added the ancient cities, which have seen some pretty drastic changes since the experimental snapshot a few weeks ago, so make sure you check them out.

Happy mining!

## Novas características

- Engadido o Allay.
- Engadidas as Cidades Antigas.

## Allay

Allays will collect all the surrounding items that match the item they are holding

Allays will like a player who hands them an item and will bring the items they collect to their liked player

If the Allay hears a noteblock play, that noteblock becomes the Allay’s favorite noteblock for 30 seconds. The Allay will stay near that noteblock for that duration and bring its collected items to the noteblock instead of to the player

Interacting with an Allay with an empty hand will remove the item the Allay is holding

Allays can be found in Pillager Outposts and Woodland Mansions

## Cidade Antiga

Wander the halls of these long-abandoned structures in the Deep Dark depths to uncover some relics long forgotten.

Ancient City structures spawn in the Deep Dark biome

In chests, guarded by sculk sensors and shriekers, you can find the new Swift Sneaking enchantment

You can also find a new mysterious block called Reinforced Deepslate here, which cannot be obtained in Survival

Mobs cannot spawn in Ancient Cities

### Diferenzas coa *snapshot* Escuridade Profunda

Many adjustments have been made to Ancient Cities, with new and tweaked structures

Loot tables have been adjusted for Ancient Cities, including a separate loot table for the “ice box” structures

## Cambios

The recipes for minecart with chest/furnace/tnt/hopper are now shapeless

When broken each minecart variant drops itself as an item, instead of splitting into two items (such as chest and minecart)

Only wool and wool carpets now block the sounds coming from noteblocks

### Cambios técnicos

Added kill_mob_near_sculk_catalyst advancement trigger

Sculk shrieker block state changes

Renamed some game events

## Avances
### Novas deteccións

```
KILL_MOB_NEAR_SCULK_CATALYST
```

Triggered when a player kills an entity next to Sculk Catalyst

Conditions:

player - a player for which this trigger runs

entity - a predicate for the entity that was killed

killing_blow - a predicate for how the entity was killed

### Sculk Shrieker

Added can_summon blockstate to the Sculk Shrieker that determines whether a Shrieker can summon a Warden or not

Shriekers placed via worldgen will have can_summon set to true

When a Shrieker is placed or generated via Sculk spread, can_summon is set to false

### Eventos de xogo

Some game events have been renamed, with some of those changes to make them more gramatically consistent:



drinking_finish -> drink

entity_killed -> entity_die

entity_damaged -> entity_damage

elytra_free_fall -> elytra_glide

mob_interact -> entity_interact

ravager_roar -> entity_roar

wolf_shaking -> entity_shake

The following events have been collapsed into block_activate and block_deactivate:



block_press

block_unpress

block_switch

block_unswitch

Other miscellaneous changes to game events:



ring_bell has been removed and replaced with block_change

Both shulker_open and shulker_close have been removed in favour of using container_open and container_close

fishing_rod_cast and fishing_rod_reel_in have been renamed to item_interact_start and item_interact_finish

Added ignore_vibrations_on_occluding_block game event tag with subsequent logic

entity_interact should be dispatched more often when interacting with various mobs

## Bugs arranxados

- {{< mc-bug codigo="MC-249103" titulo="Z-fighting can be seen on the underside of frogs’ feet" >}}
- {{< mc-bug codigo="MC-249110" titulo="Z-fighting textures inside the frog’s mouth" >}}
- {{< mc-bug codigo="MC-249115" titulo="Frogs spawn with wrong color in some biomes" >}}
- {{< mc-bug codigo="MC-249132" titulo="Frogs are not required to be bred for the Two by Two advancement" >}}
- {{< mc-bug codigo="MC-249349" titulo="Dispensing a Bucket of Tadpole dispenses the item, instead of water with a tadpole" >}}
- {{< mc-bug codigo="MC-249380" titulo="The locks of chests within chest boats are positioned slightly too high" >}}
- {{< mc-bug codigo="MC-249382" titulo="Boats with chest do not drop items contained in chest when destroyed in Creative" >}}
- {{< mc-bug codigo="MC-249389" titulo="GUI Scale is a slider instead of a button" >}}
- {{< mc-bug codigo="MC-249392" titulo="Options have missing or untranslated names" >}}
- {{< mc-bug codigo="MC-249397" titulo="Bottom face of Warden’s right arm missing in ‘warden_bioluminescent_layer’ texture" >}}
- {{< mc-bug codigo="MC-249398" titulo="Game crash regarding warden" >}}
- {{< mc-bug codigo="MC-249404" titulo="Boats with Chest aren’t grouped in the recipe book" >}}
- {{< mc-bug codigo="MC-249405" titulo="chatScale option defaults to 0.0 instead of 1.0, causing chat to disappear" >}}
- {{< mc-bug codigo="MC-249409" titulo="Furnaces, blast furnaces and smokers don’t cook without fuel in the bottom slot, even if they are already fired up" >}}
- {{< mc-bug codigo="MC-249474" titulo="Four-legged mobs do not sit correctly in a boat with a chest" >}}
- {{< mc-bug codigo="MC-249642" titulo="Wardens can’t pass over rails" >}}

## Obtención da *snapshot*

As *snapshots* están dispoñibles para Minecraft: Edición Java.
Para instalala, abre o lanzador de Minecraft e habilita as *snapshots* na pestana de "Instalacións".

**As *snapshots* poden corromper o teu mundo así que, por favor, realiza unha copia de seguridade e/ou utilizaas nunha carpeta distinta da usada usualmente para os teus mundos.**

Ficheiro jar multiplataforma:
[jar de servidor](https://launcher.mojang.com/v1/objects/7c8afca77bb9a73d31cdc70f2f68b4119d581455/server.jar).

Reporta bugs aquí: [Traqueador de problemas de Minecraft](https://bugs.mojang.com/projects/MC/issues)

Queres dar as túas opinións?\
Dirixete á [nosa páxina web](https://aka.ms/JavaSnapshotFeedback?ref=minecraftnet) ou falanos no chat do noso [servidor de Discord oficial de Minecraft](https://discordapp.com/invite/minecraft).

---

Publicado: 2022/03/31\
Autor: Adrian Östergård\
Tradutor: Ran#

[Publicación orixinal](https://www.minecraft.net/en-us/article/minecraft-snapshot-22w13a)
