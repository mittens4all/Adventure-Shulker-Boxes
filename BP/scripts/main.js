import { BlockTypes, system, world } from "@minecraft/server";

const blockTypeIds = BlockTypes.getAll().map(block => block.id);

function shulkerComponents() {
    const allPlayers = world.getPlayers();
    for (const player of allPlayers) {
        const inventory = player.getComponent('inventory').container;
        const mainhand = inventory.getItem(player.selectedSlotIndex);

        if (mainhand?.typeId === ("minecraft:black_shulker_box") || mainhand?.typeId === ("minecraft:blue_shulker_box") || mainhand?.typeId === ("minecraft:brown_shulker_box") || mainhand?.typeId === ("minecraft:cyan_shulker_box") || mainhand?.typeId === ("minecraft:gray_shulker_box") || mainhand?.typeId === ("minecraft:green_shulker_box") || mainhand?.typeId === ("minecraft:light_blue_shulker_box") || mainhand?.typeId === ("minecraft:light_gray_shulker_box") || mainhand?.typeId === ("minecraft:lime_shulker_box") || mainhand?.typeId === ("minecraft:magenta_shulker_box") || mainhand?.typeId === ("minecraft:orange_shulker_box") || mainhand?.typeId === ("minecraft:pink_shulker_box") || mainhand?.typeId === ("minecraft:purple_shulker_box") || mainhand?.typeId === ("minecraft:red_shulker_box") || mainhand?.typeId === ("minecraft:undyed_shulker_box") || mainhand?.typeId === ("minecraft:white_shulker_box") || mainhand?.typeId === ("minecraft:yellow_shulker_box")) {
            mainhand.setCanPlaceOn(blockTypeIds);
            inventory.setItem(player.selectedSlotIndex, mainhand);
        }
        if (mainhand?.typeId.indexOf(blockTypeIds)) {
            mainhand.setCanDestroy(["minecraft:black_shulker_box", "minecraft:blue_shulker_box", "minecraft:brown_shulker_box", "minecraft:cyan_shulker_box", "minecraft:gray_shulker_box", "minecraft:green_shulker_box", "minecraft:light_blue_shulker_box", "minecraft:light_gray_shulker_box", "minecraft:lime_shulker_box", "minecraft:magenta_shulker_box", "minecraft:orange_shulker_box", "minecraft:pink_shulker_box", "minecraft:purple_shulker_box", "minecraft:red_shulker_box", "minecraft:undyed_shulker_box", "minecraft:white_shulker_box", "minecraft:yellow_shulker_box"]);
            inventory.setItem(player.selectedSlotIndex, mainhand);
        };
    };
};
system.runInterval(shulkerComponents, 1);