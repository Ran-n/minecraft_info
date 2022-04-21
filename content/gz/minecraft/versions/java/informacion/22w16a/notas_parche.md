---
title: "Notas de versión"
date: 2022-04-21T19:36:00+02:00
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

# 22w16a

<img title="22w16a" alt="22w16a" src="/fotos_content/mobs/parrot/parrot1.jpg">

Unha oportunidade para revivir os bos tempos aparece na *snapshot* 22w16a coa habilidade de desfragmentar un disco - un novo disco de música, para ser precisos!
Esta instantánea tamén inclúe máis música, cambios ós Alivios, e para facelo redondo, algúns eventos aleatorios do xogo agora son máis predicibles.

Disfrutade!

## Novas características

- Engadida nova música
- Engadidos os obxectos fragmento de disco 5 e disco de música 5

### Catro novas cancións

- As novas cancións chámanse Ancestry, Aerie, Firebugs e Libyrinthine
- Soan en certos biomas e no menú principal

### Disco de música 5

Un novo disco de música foi engadido ó xogo.

- A diferenza doutros discos, soamente pode ser obtido fabricándoo atopando os 9 fragmentos de discos.
- Estes discos atópanse moi raramente nos cofres das Cidades Antigas.

## Cambios

- Cambios do Alivio
- Mellorada a predictibilidade dun número de elementos do xogo
- As ras agora pódense xerar naturalmente sobre céspede, lama, alfombra de musgo, raíces de mangleiro e raíces de mangleiro enlamadas.
- Anfibrillos poden ser movidos con pistóns

### Cambios dos Alivios

- Subida a saúde de 10 a 20
- Retraso despois de lanzar un obxecto baixado de 5 a 3 segundos
- Rango de búsqueda de obxectos subido de 9 a 32 bloques
- Cambios na velocidade de movemento:
    - Máis lento ó vagar
    - Máis rápido ó recoller obxectos, ir cara o xogador ou o bloque de notas
- O arco de tiro dos obxectos foi cambiado seguindo os consellos da comunidade

### Predictibilidade de eventos aleatorios


## Cambios técnicos

### Cadros

## Bugs Arranxados

- {{< mc-bug codigo="MC-81870" titulo="Editing entitydata of Painting does not reflect ingame until chunk reload" >}}
- {{< mc-bug codigo="MC-111809" titulo="Paintings unrender when entity data is updated rapidly" >}}
- {{< mc-bug codigo="MC-187188" titulo="Painting NBT and registry contain a typo: “Motive” instead of “Motif”" >}}
- {{< mc-bug codigo="MC-226184" titulo="Axolotls pathfinding to water can sometimes fall in wide holes" >}}
- {{< mc-bug codigo="MC-228049" titulo="Axolotl can’t pathfind through open doors" >}}
- {{< mc-bug codigo="MC-228174" titulo="Axolotls try to pathfind through 2 tall walls" >}}
- {{< mc-bug codigo="MC-244957" titulo="“Search” Option in Social Interactions Screen is not labeled in the right order when using Tab" >}}
- {{< mc-bug codigo="MC-245001" titulo="“Manage with Microsoft account” button in Social Interactions menu is not centered" >}}
- {{< mc-bug codigo="MC-249084" titulo="No sound is present for placing a Bucket of Tadpole" >}}
- {{< mc-bug codigo="MC-249092" titulo="Mangrove Stripped Log, Stripped Wood and Wood are in the incorrect order in the creative inventory" >}}
- {{< mc-bug codigo="MC-249176" titulo="Froglights are not visible on maps" >}}
- {{< mc-bug codigo="MC-249193" titulo="Frog can’t pathfind through open doors" >}}
- {{< mc-bug codigo="MC-249217" titulo="Fluid level next to froglights is too low" >}}
- {{< mc-bug codigo="MC-249245" titulo="Turtle can’t pathfind through open doors" >}}
- {{< mc-bug codigo="MC-249246" titulo="Strider can’t pathfind through open doors" >}}
- {{< mc-bug codigo="MC-249265" titulo="Some blocks cannot be placed on froglights" >}}
- {{< mc-bug codigo="MC-249459" titulo="Cactus is not destroyed by froglights" >}}
- {{< mc-bug codigo="MC-249663" titulo="The subtitles of some parrot imitation sounds are inconsistent with the original sounds’ subtitles" >}}
- {{< mc-bug codigo="MC-249679" titulo="Incorrect activation of warden’s sniffing animations and behavior" >}}
- {{< mc-bug codigo="MC-249715" titulo="Allays don’t drop their held items upon death" >}}
- {{< mc-bug codigo="MC-249766" titulo="Allays can despawn after being given an item if they haven’t picked up any items yet" >}}
- {{< mc-bug codigo="MC-249790" titulo="Allay follows and drops items for players in spectator mode" >}}
- {{< mc-bug codigo="MC-249838" titulo="Allays lose their idle animation once they start moving" >}}
- {{< mc-bug codigo="MC-249855" titulo="Parity Issue: Allays don’t have a flying animation in Java" >}}
- {{< mc-bug codigo="MC-249912" titulo="minecraft:ancient_city/city_center_3 is one block shorter compared than the other ancient city centers" >}}
- {{< mc-bug codigo="MC-249928" titulo="Mangrove tree roots do not update blocks around them when generating" >}}
- {{< mc-bug codigo="MC-250039" titulo="Wardens can get angry at mobs outside world border" >}}
- {{< mc-bug codigo="MC-250040" titulo="Wardens can hear mobs beyond the world border" >}}
- {{< mc-bug codigo="MC-250041" titulo="Wardens can spawn outside of world border" >}}
- {{< mc-bug codigo="MC-250044" titulo="Observers don’t detect mangrove roots when tree grows" >}}
- {{< mc-bug codigo="MC-250094" titulo="Wardens ignore /kill execution whilst they’re emerging or digging" >}}
- {{< mc-bug codigo="MC-250095" titulo="Wardens can spawn in very narrow places, causing them to suffocate" >}}
- {{< mc-bug codigo="MC-250293" titulo="The “allay_dust” particle is unused" >}}
- {{< mc-bug codigo="MC-250294" titulo="Parity Issue: Allays item detection range is significantly smaller than in Bedrock" >}}

## Obtención da *snapshot*

As *snapshots* están dispoñibles para Minecraft: Edición Java.
Para instalala, abre o lanzador de Minecraft e habilita as *snapshots* na pestana de "Instalacións".

**As *snapshots* poden corromper o teu mundo así que, por favor, realiza unha copia de seguridade e/ou utilizaas nunha carpeta distinta da usada usualmente para os teus mundos.**

Ficheiro jar multiplataforma:
[jar de servidor](https://launcher.mojang.com/v1/objects/a54810e8b1a7a043fa54a462309d680ad67da479/server.jar).

Reporta bugs aquí: [Traqueador de problemas de Minecraft](https://bugs.mojang.com/projects/MC/issues)

Queres dar as túas opinións?\
Dirixete á [nosa páxina web](https://aka.ms/JavaSnapshotFeedback?ref=minecraftnet) ou falanos no chat do noso [servidor de Discord oficial de Minecraft](https://discordapp.com/invite/minecraft).

---

Publicado: 2022/04/19\
Autor: Adrian Östergård\
Tradutor: Ran#

[Publicación orixinal](https://www.minecraft.net/en-us/article/minecraft-snapshot-22w16a)
