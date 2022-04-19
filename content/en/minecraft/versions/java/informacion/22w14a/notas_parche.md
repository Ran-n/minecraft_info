---
title: "Patch Notes"
date: 2022-04-05T21:55:25+02:00
#draft: true
author: 'Ran#'

toc: true
collapsible_toc: true

url: '/en/minecraft/versions/java/information/22w14a/notes/'
#slug: 'notas'
#aliases: [
#    'notas_version',
#    'patch_notes',
#    'notes',
#]

weight: 1
bookcase_cover_src: 'monochrome/cover/list.png'
bookcase_cover_src_dark: 'monochrome/cover/list_dark.png'

---

# 22w14a

<img src="/fotos_content/paisaxes/paisaxe2.jpg" />

---

Mangrove trees!
Warm frogs!
Mud blocks!
More mangrove trees!
Today, we’re happy to bring you the most mud-tastic Java snapshot to date!

Sure, it might be our only mud-tastic snapshot to date – but the important thing is that our new biome, mangrove swamp, now is available for testing, along with nitty-gritty features like the recovery compass and other, more technical tidbits.

Enjoy!

## New Features

- Added Clay renewability
- Added Mangrove Trees
- Added Mangrove Swamp biome
- Added Echo Shard and Recovery Compass

# Clay Renewability

Placing Mud above a block that has Pointed Dripstone underneath will eventually turn the Mud Block into Clay

## Mangrove Trees

Introducing a new type of water-adapted tree that spawns propped up on roots
- Have a chance of spawning a Bee Nest
- Grows from Mangrove Propagules

## Mangrove Swamp

Muddy! Murky! Magnificent! Welcome to the newest biome - the Mangrove Swamp

- Located in warmer, more humid places where you’d normally find the Swamp biome in Minecraft
- Here you can find Bees and Warm Frogs
- The floor of this biome is coated with a thick layer of Mud, so be sure to pack your best boots
- Have a nice boat ride under and around the larger-than-life roots of mangrove trees

## Recovery Compass

A new Recovery Compass can be crafted with Echo Shards which can only be found and are unique to Ancient City chests

- Unlike a normal Compass, the Recovery Compass will point to the last place you died
- If you are not in the dimension you last died, or you haven’t died yet in your world, it will randomly spin
- It can be crafted with 1 Compass surrounded by 8 Echo Shards, which can be found in Ancient Cities

## Changes

The Warden will now get angry at ALL living mobs that bump into it, not just players

### Technical Changes

- `CatType` fields on enitites with type `minecraft:cat` have been replaced with `variant`, with numeric values being replaced with string ids (so, for example, 5 becomes `minecraft:calico`)
- Some mutually exclusive tests in entity predicate (`player`, `fishing_hook`, `lightning_bolt` and `catType`) have been collapsed to type_specific field
- Added `item_delivered_to_player` advancement trigger
- Added `allay_drop_item_on_block` advancement trigger

#### Predicates

##### Entity Predicate

- `player`, `fishing_hook`, `lightning_bolt` and `catType` fields have been replaced with `type_specific`

- `type_specific` has field type (one of `player`, `fishing_hook`, `lightning_bolt` or cat) and same fields as removed fields

Before
```
"lightning_bolt": {
    "blocks_set_on_fire": 0
}
```

After
```
"type_specific": {
    "type": "lightning",
    "blocks_set_on_fire": 0
}
```

- `catType` has been wrapped to match new format and now uses new cat variant names instead of texture names:

Before
```
"catType": "minecraft:textures/entity/cat/british_shorthair.png"
```

After
```
"type_specific": {
    "type": "cat",
    "variant": "minecraft:british"
}
```


- New `type_specific` options:
    - `frog` has `variant` field matching frog variant (`minecraft:warm`, `minecraft:temperate` or `minecraft:cold`)
    - `slime` applies for slimes and magma creams, has size field matching slime `size` (smallest is 1)

## Advancements

Removed field location from triggers location, slept_in_bed, hero_of_the_village and voluntary_exile - it was handled exactly the same as player.location.

### new Triggers

`ITEM_DELIVERED_TO_PLAYER`

- Triggered when an allay delivers an item to a player.
- Conditions:
    - `player` - a player for which this trigger runs

`ALLAY_DROP_ITEM_ON_BLOCK`

- Triggered when an allay drops an item on a block.
- Conditions:
    + `player` - a player for which this trigger runs
    + `location` - a predicate for the block that the item was dropped on
    + `item` - a predicate for the item that was dropped


## Fixed Bugs

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

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition.
To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/en-us/download) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:
[Minecraft server jar](https://launcher.mojang.com/v1/objects/cf4f3a6492c0a84e2e852fe0ea714080923ab6ad/server.jar).

Report bugs here:
[Minecraft issue tracker!](https://bugs.mojang.com/projects/MC/issues)

Want to give feedback?\
Head over to our [feedback website](https://aka.ms/JavaSnapshotFeedback?ref=minecraftnet) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).

---

Published: 2022/04/06\
Author: Adrian Östergård\
Adaptor: Ran#

[Original Publication](https://www.minecraft.net/en-us/article/minecraft-snapshot-22w14a)
