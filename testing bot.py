import discord
from discord.ext import commands
import keep_alive
from keep_alive import keep_alive

bot = commands.Bot(command_prefix=".")


@bot.event
async def on_ready():
    print(f"Logged in as {bot.user} (ID: {bot.user.id})")
    print("------")

@bot.command()
async def test(ctx):
    ctx.reply("hi!")

keep_alive()
bot.run("MTA5NjM5ODAzNzc2MjQ0OTQwOA.GQj0sU.ndPLwRN8LC_qWViFPMmxEWBKfMn3hfdwgUIiZM")