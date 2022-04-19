---
title: "Patch Notes"
date: 2022-04-05T21:55:25+02:00
#draft: true
author: 'Ran#'

toc: true
collapsible_toc: false

url: '/en/minecraft/versions/java/information/22w15a/notes/'
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

# 22w15a

<img title="22w15a" alt="22w15a" src="/fotos_content/mobs/warden/warden2.webp">

---

Let me tell you a little story about hubris.
Well, not so much a story as a lament.
Because some of you have been thinking that the warden was a little too easy.
I won’t name names, but I know you’re out there.
Why else would we be adding ranged attacks for this already terrifying mob?
Was the sniffing not enough? When will it end?
Not today, apparently.

Enjoy a new terrifying warden along with more advancements and technical changes.

## New Features

- Added advancement “When the Squad Hops into Town” for getting each Frog variant on a Lead
- Added advancement “Sneak 100” for sneaking near a Sculk Sensor or Warden to prevent it hearing you
- Added a new ranged attack to the Warden

### Warden Ranged Attack

- Building up high, hiding behind walls or being out of range of their powerful melee attack will cause Wardens to switch to their ranged attack
    - Their rib cages will open up to shriek a sonically charged ranged attack that can penetrate walls

## Changes

- Added Darkness effect to “How Did We Get Here?” advancement
- Allays have a natural health regen of 2 health per second
- The main menu background now shows a Wild Update panorama
- Mud generates all the way from the surface down to stone in Mangrove Swamps
- Tall Mangroves are far more common than Short Mangroves in Mangrove Swamps
- Moss Carpet generates on top of Mangrove Tree’s roots
- The Wandering Trader will now sometimes offer Propagules for sale
- A previous change to Noteblocks that only Wool and Wool Carpets would block the sounds has been reverted
- Wardens can now sniff you from further away
- The vertical range Wardens get angry at a target while sniffing is now 20 blocks instead of 6 blocks

### Changes to Vibrations

- Carpets, like Wool blocks, will now dampen the vibrations caused by their placing, breaking or dropping as items
- Carpets now also dampen the vibrations caused by running and jumping over them

## Technical Changes

- Removed `item_delivered_to_player` advancement trigger
- Added `thrown_item_picked_up_by_player` advancement trigger
- Added `avoid_vibration` advancement trigger
- Added `sonic_explosion` particle

### Advancements

#### New Triggers

`THROWN_ITEM_PICKED_UP_BY_PLAYER`
- Triggered when a player picks up an item that was thrown by an entity
- Conditions:
    - `player` - a predicate for the player picking up the item
    - `entity` - a predicate for the entity that threw the item
    - `item` - a predicate for the item

`AVOID_VIBRATION`

- Triggered when a vibration event is ignored because the source player is holding the sneak key
- Conditions:
    - `player` - a player for which this trigger runs

### Game Events

- Renamed game event tag `ignore_vibrations_on_occluding_block` to `dampenable_vibrations`
- Added block tag `dampens_vibrations` to indicate blocks which will not trigger vibrations when placed, broken or stepped on
- Renamed item tag `occludes_vibration_signals` to `dampens_vibrations` item tag as well

## Fixed Bugs

- {{< mc-bug codigo="MC-36783" titulo="Item frames/Glow item frames don’t change their hitbox if they contain a map" >}}
- {{< mc-bug codigo="MC-147686" titulo="Joining a world that uses custom resources shows default resources until fully loaded" >}}
- {{< mc-bug codigo="MC-183520" titulo="Phantoms with NoAI can go through blocks" >}}
- {{< mc-bug codigo="MC-212610" titulo="Glow lichens cannot be put on soul sand" >}}
- {{< mc-bug codigo="MC-212629" titulo="Leashes from two or more invisible entities connect to each other" >}}
- {{< mc-bug codigo="MC-216567" titulo="Vines cannot be placed on the sides of 8 layers of snow" >}}
- {{< mc-bug codigo="MC-216569" titulo="Glow lichen cannot be placed on the side of 8 layers of snow" >}}
- {{< mc-bug codigo="MC-219642" titulo="Vines cannot be placed on the sides of soul sand" >}}
- {{< mc-bug codigo="MC-231458" titulo="The word “ingot” within the “Serious Dedication” advancement description is improperly capitalized" >}}
- {{< mc-bug codigo="MC-235035" titulo="Sleeping in a custom dimension with “natural” set to false causes crash" >}}
- {{< mc-bug codigo="MC-237924" titulo="The word “villager” within the “Star Trader” advancement description is improperly capitalized" >}}
- {{< mc-bug codigo="MC-249072" titulo="Sculk shriekers replace water blocks" >}}
- {{< mc-bug codigo="MC-249087" titulo="The inside texture of mangrove roots darkens when solid blocks are placed adjacent to them" >}}
- {{< mc-bug codigo="MC-249094" titulo="Unexpected culling of inner sculk shrieker faces" >}}
- {{< mc-bug codigo="MC-249111" titulo="sculk_charge cannot be used in /particle command" >}}
- {{< mc-bug codigo="MC-249208" titulo="Vines, glow lichens, and sculk veins cannot be placed on the side or top faces of mud" >}}
- {{< mc-bug codigo="MC-249315" titulo="Mangrove Roots cannot be composted" >}}
- {{< mc-bug codigo="MC-249347" titulo="Map color for mangrove sign and mangrove wall sign is incorrect" >}}
- {{< mc-bug codigo="MC-249423" titulo="You can’t open the boat with chests without a shift, even when you can’t get into the boat" >}}
- {{< mc-bug codigo="MC-249445" titulo="Activated sculk shriekers fail to summon the warden when broken" >}}
- {{< mc-bug codigo="MC-249488" titulo="Darkness pulsing option is not saved" >}}
- {{< mc-bug codigo="MC-249495" titulo="Inconsistent shading in boat item sprites" >}}
- {{< mc-bug codigo="MC-249664" titulo="Warden despawns when far away" >}}
- {{< mc-bug codigo="MC-249688" titulo="Mangrove stairs come after nether wood stairs in the Building Blocks tab" >}}
- {{< mc-bug codigo="MC-249737" titulo="Allay can be pushed around with {NoAI:1b}" >}}
- {{< mc-bug codigo="MC-249741" titulo="New advancement names are not properly capitalized" >}}
- {{< mc-bug codigo="MC-249785" titulo="Warden can be pushed when emerging and digging" >}}
- {{< mc-bug codigo="MC-249917" titulo="Mangrove trees don’t replace certain blocks with roots" >}}
- {{< mc-bug codigo="MC-249923" titulo="Recovery compass isn’t sorted with regular compass in creative inventory" >}}
- {{< mc-bug codigo="MC-249927" titulo="You can use a Recovery Compass on a Lodestone" >}}
- {{< mc-bug codigo="MC-249931" titulo="Growing a Mangrove Tree with bone meal creates a ghost block" >}}
- {{< mc-bug codigo="MC-249933" titulo="Game crash related to the frog occurred (Accessing LegacyRandomSource from multiple threads)" >}}
- {{< mc-bug codigo="MC-249934" titulo="Mangrove roots sometimes don’t generate waterlogged when generating within water" >}}
- {{< mc-bug codigo="MC-249936" titulo="Cave carvers don’t cut through mud" >}}
- {{< mc-bug codigo="MC-249938" titulo="Mangrove Leaves do not drop from Silk Touch tools" >}}
- {{< mc-bug codigo="MC-249942" titulo="Water got removed after waterlogged Mangrove Propagule grows" >}}
- {{< mc-bug codigo="MC-249947" titulo="Top of Sculk Shrieker model is vertically squished" >}}
- {{< mc-bug codigo="MC-249966" titulo="Warden can forget a target it just roared at" >}}
- {{< mc-bug codigo="MC-249968" titulo="Powering a beacon disconnects player from server" >}}
- {{< mc-bug codigo="MC-249977" titulo="Harsh chunk borders appear when upgrading a 1.18.2 world" >}}
- {{< mc-bug codigo="MC-249979" titulo="Chance to have mangrove roots not waterlogged when growing from a sapling while underwater" >}}
- {{< mc-bug codigo="MC-249980" titulo="The Birthday Song advancement description is incorrectly capitalized" >}}
- {{< mc-bug codigo="MC-249984" titulo="note_block is inconsistently spelled as noteblock in the allay_deliver_cake_to_noteblock advancement" >}}
- {{< mc-bug codigo="MC-250017" titulo="UUID launch argument required" >}}
- {{< mc-bug codigo="MC-250025" titulo="The “You Got a Friend in Me” advancement is incorrectly presented in the past tense" >}}
- {{< mc-bug codigo="MC-250099" titulo="Mangrove Log and Mangrove Planks don’t spawn in bonus chest" >}}
- {{< mc-bug codigo="MC-250101" titulo="Can’t plant sugar cane on mud" >}}
- {{< mc-bug codigo="MC-250103" titulo="Can’t plant bamboo on mud" >}}
- {{< mc-bug codigo="MC-250104" titulo="Can’t plant big dripleaf on mud" >}}
- {{< mc-bug codigo="MC-250106" titulo="Overworld vegetation cannot be placed on muddy mangrove roots" >}}

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition.
To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/en-us/download) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:
[Minecraft server jar](https://launcher.mojang.com/v1/objects/5f48eea55c7fd1881d9c63835b15dfb5bbcd3a67/server.jar)
|
[Local Minecraft server jar](/fichs_content/minecraft/versions/22w13/22w13_server.jar)

Report bugs here:
[Minecraft issue tracker!](https://bugs.mojang.com/projects/MC/issues)

Want to give feedback?\
Head over to our [feedback website](https://aka.ms/JavaSnapshotFeedback?ref=minecraftnet) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).

---

Published: 2022/04/06\
Author: Adrian Östergård\
Adaptor: Ran#

[Original Publication](https://www.minecraft.net/en-us/article/minecraft-snapshot-22w15a)
